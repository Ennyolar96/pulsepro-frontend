import * as Yup from "yup";

export const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  course: "",
};

export const careerSchema = Yup.object().shape({
  firstName: Yup.string().required("First name Required"),
  lastName: Yup.string().required("Last name required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.number().required("Phone number required"),
  course: Yup.string().required("Course is required"),
});
