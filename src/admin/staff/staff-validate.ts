import * as Yup from "yup";

export const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  role: "",
  address: "",
};

export const careerSchema = Yup.object().shape({
  firstName: Yup.string().required("First name Required"),
  lastName: Yup.string().required("Last name required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.number().required("Phone number required"),
  address: Yup.string().required("Address is required"),
  role: Yup.string()
    .oneOf(["Manager", "Marketer", "Tutor"], "Invalid status")
    .required("Role is required"),
});
