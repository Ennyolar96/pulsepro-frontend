import { Editor } from "@/components/blocks/editor-x/editor";
import PrimaryButton from "@/components/ui/buttons";
import { FileInput, FormInput, FormSelect } from "@/components/ui/form";
import { Form, Formik } from "formik";
import { X } from "lucide-react";
import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { http } from "@/router/api";
import { blogSchema, initialValue } from "./validate";
import { jsonToFormData } from "@/components/utils";
import { AxiosError } from "axios";

interface form {
  title: string;
}

export default function UploadNews() {
  const [description, setDescription] = useState<string>("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitting = async (value: form) => {
    try {
      const payload = { ...value, description, coverImage };
      const fd = jsonToFormData(payload);
      const { data } = await http.post("/blog", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log({ data });
    } catch (error) {
      if (error instanceof AxiosError) {
        const theError = error.response?.data;
        if ("errors" in theError) {
          theError.errors.map((item: { messages: string[] }) => {
            item.messages.forEach((error) => console.log(error));
          });
        }
      }
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const validateLogo = async (file: File): Promise<string | null> => {
    const validTypes = ["image/png", "image/jpeg", "image/webp"];
    const maxSizeMB = 4.5;
    // const minWidth = 100;

    if (!validTypes.includes(file.type)) {
      return "Unsupported file format. Only PNG, JPG, WEBP are allowed.";
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      return "File size exceeds 4.5MB.";
    }

    const image = new Image();
    const imageURL = URL.createObjectURL(file);

    return new Promise((resolve) => {
      image.onload = () => {
        resolve(null);
        URL.revokeObjectURL(imageURL);
      };
      image.onerror = () => {
        resolve("Unable to read the image file.");
        URL.revokeObjectURL(imageURL);
      };
      image.src = imageURL;
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setLoading(true);
      const error = await validateLogo(file);
      if (error) {
        console.log(error);
      } else {
        setCoverImage(file);
      }
      console.log({ coverImage });
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] py-5 px-2 rounded-[20px]">
      <Formik
        initialValues={initialValue}
        validationSchema={blogSchema}
        onSubmit={(values) => {
          handleSubmitting(values);
        }}
      >
        {() => (
          <Form className="space-y-5">
            <FormInput
              label="Blog title"
              type="text"
              name="title"
              placeholder="Enter Blog title"
            />

            <div>
              <label
                onDragEnter={handleDrag}
                onDragOver={handleDrop}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                htmlFor="coverImage"
                className={`bg-[#FFFFFF0D] border border-dashed flex flex-col justify-center items-center h-44 rounded-2xl ${
                  dragActive ? "border-[#0C8CE0]" : "border-[#0C8CE0]"
                } space-y-4`}
              >
                {loading ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-12 w-12 border-4 border-dashed border-gray-300 dark:border-white/20 rounded-full animate-spin"></div>
                    <p className="text-sm mt-2 text-black dark:text-white">
                      Processing image...
                    </p>
                  </div>
                ) : (
                  <div>
                    {coverImage ? (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={URL.createObjectURL(coverImage)}
                          alt="Selected Logo"
                          className="max-h-32 object-contain rounded-lg"
                        />
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-[#3BC3DB] font-semibold truncate max-w-[180px]">
                            {coverImage.name}
                          </p>
                          <button
                            type="button"
                            onClick={() => setCoverImage(null)}
                            className="text-red-400 hover:text-red-500 "
                            aria-label="Remove selected logo"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="items-center flex flex-col">
                        <div className="bg-[#54545499] h-[38px] w-[38px] rounded-[12px] flex justify-center items-center">
                          <IoMdCloudUpload size={21} color="#E3E3E3" />
                        </div>
                        <p>
                          Click to upload{" "}
                          <span className="text-[#0C8CE0]">
                            or drag and drop
                          </span>
                        </p>

                        <p className="text-sm dark:text-white/60 text-black mt-1">
                          PNG, JPG, WEBP • Max 4.5MB • Min 100x100px
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </label>
              <FileInput
                name="coverImage"
                id="coverImage"
                className="hidden"
                setFileValue={setCoverImage}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="text-base block mb-2 ms-3 text-[#2222222] font-semibold"
              >
                Blog description
              </label>
              <Editor
                className="h-66"
                onHtmlChange={(html) => {
                  setDescription(html);
                }}
                classNames="bg-[#D9D9D9]"
              />
            </div>

            <FormSelect
              label="Blog Status"
              name="status"
              option={[
                { value: "draft", label: "Draft" },
                { value: "schedule", label: "Schedule" },
                { value: "published", label: "Published" },
              ]}
            />

            <FormInput
              name="scheduleDate"
              label="Schedule Date"
              type="datetime-local"
            />

            <PrimaryButton
              type="submit"
              name="Create Event"
              className="w-full rounded-[10px]!"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
