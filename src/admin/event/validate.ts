import * as Yup from "yup";

export const initialValue = {
  title: "",
  starting_date: "",
  ending_date: "",
  eventType: "",
  eventLink: "",
  eventAddress: "",
  schedule: "",
  status: "",
};
export const eventSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  starting_date: Yup.date().required("Starting date is required"),
  ending_date: Yup.date()
    .required("Ending date is required")
    .min(Yup.ref("starting_date"), "End date must be after start date"),
  eventType: Yup.string().required("Event type is required"),
  eventLink: Yup.string().url("Must be a valid URL"),
  eventAddress: Yup.string(),
  schedule: Yup.string(),
  status: Yup.string()
    .oneOf(["draft", "published", "schedule"], "Invalid status")
    .required("Status is required"),
});
