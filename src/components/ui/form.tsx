import { Field, useField, type FieldProps, type FormikHelpers } from "formik";
import type {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import { cn } from "../utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const FormInput = ({ label, ...inputProps }: FormInputProps) => (
  <div>
    {label && (
      <label
        htmlFor={inputProps.id || inputProps.name}
        className="text-sm text-[#248] font-semibold"
      >
        {label}
      </label>
    )}

    <Field name={inputProps.name}>
      {({ field, meta }: FieldProps) => (
        <div>
          <input
            {...inputProps}
            {...field}
            className={cn(
              "py-4.5 px-5.5 bg-[#D9D9D9] rounded-[60px] w-full placeholder:text-[#22222294] placeholder:text-base placeholder:font-medium border-none outline-none pr-28",
              inputProps.className
            )}
          />
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  </div>
);

interface fileUpload extends FormInputProps {
  fileRef?: React.RefObject<HTMLInputElement>;
  multiple?: boolean;
  accept?: string;
  children?: React.ReactNode;
  setFieldValue?: FormikHelpers<unknown>["setFieldValue"];
  setFileValue: Dispatch<SetStateAction<File | null>>;
  allow?: boolean;
}
export const FileInput = ({ label, setFileValue, ...props }: fileUpload) => {
  const [, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      if (props.allow) setValue(file);
      setFileValue(file);
    }
  };

  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="text-sm text-[#248] font-semibold"
      >
        {label}
      </label>
      <div className="focus:outline-none focus:ring-0 appearance-none">
        <input
          type="file"
          onChange={handleChange}
          {...props}
          className={cn(
            "bg-[#D9D9D9] rounded-[60px] placeholder:text-[#22222294] placeholder:text-base placeholder:font-medium border-none outline-none pr-28 block w-full text-sm text-slate-500 file:mr-4 file:py-4.5 file:px-5.5 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#D9D9D9] file:text-[#A91210] hover:file:bg-pink-100",
            props.className
          )}
        />
      </div>
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};
