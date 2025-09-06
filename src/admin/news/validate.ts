import * as Yup from "yup";

export const initialValue = {
  title: "",
  scheduleDate: "",
  status: "",
};
export const blogSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  scheduleDate: Yup.date(),
  status: Yup.string()
    .oneOf(["draft", "published", "schedule"], "Invalid status")
    .required("Status is required"),
});
