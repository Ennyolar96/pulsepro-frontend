import * as Yup from "yup";

export const initialValue = {
  title: "",
  status: "",
};

export const careerSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  status: Yup.string()
    .oneOf(["draft", "published", "schedule"], "Invalid status")
    .required("Status is required"),
});
