import PrimaryButton from "@/components/ui/buttons";
import { FormInput, FormSelect } from "@/components/ui/form";
import { handleInputNumber } from "@/components/utils";
import { Form, Formik } from "formik";
import { careerSchema, initialValue } from "./staff-validate";

interface form {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: string;
}

export default function CreateStaff() {
  //   const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitting = (value: form) => {
    console.log(value);
  };

  return (
    <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] p-10 rounded-[20px]">
      <Formik
        initialValues={initialValue}
        validationSchema={careerSchema}
        onSubmit={(values) => {
          handleSubmitting(values);
        }}
      >
        {() => (
          <Form className="space-y-5">
            <FormInput
              label="First Name"
              type="text"
              name="firstName"
              placeholder="Enter staff first name"
            />

            <FormInput
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter staff last name"
            />

            <FormInput
              label="Email Address"
              type="email"
              inputMode="email"
              name="email"
              placeholder="Enter staff email address"
            />

            <FormInput
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              onInput={handleInputNumber}
              placeholder="Enter staff phone number"
            />

            <FormInput
              label="Address"
              type="text"
              name="address"
              placeholder="Enter staff address"
            />

            <FormSelect
              label="Select role"
              name="role"
              option={[
                { value: "Manager", label: "Manager" },
                { value: "Marketer", label: "Marketer" },
                { value: "Tutor", label: "Tutor" },
              ]}
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
