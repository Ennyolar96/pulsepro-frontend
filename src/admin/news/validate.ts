import * as Yup from "yup";

export const initialValue = {
  title: "",
  schedule: "",
  status: "",
};
export const blogSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  schedule: Yup.string(),
  status: Yup.string()
    .oneOf(["draft", "published", "schedule"], "Invalid status")
    .required("Status is required"),
});
