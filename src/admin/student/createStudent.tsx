import PrimaryButton from "@/components/ui/buttons";
import { FormInput, FormSelect } from "@/components/ui/form";
import { handleInputNumber } from "@/components/utils";
import { Form, Formik } from "formik";
import { careerSchema, initialValue } from "./student-validate";

interface form {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  course: string;
}

export default function CreateStudent() {
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
              placeholder="Enter student first name"
            />

            <FormInput
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter student last name"
            />

            <FormInput
              label="Email Address"
              type="email"
              inputMode="email"
              name="email"
              placeholder="Enter student email address"
            />

            <FormInput
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              onInput={handleInputNumber}
              placeholder="Enter student phone number"
            />

            <FormSelect
              label="Select Course"
              name="course"
              option={[
                { value: "First Aid CPR", label: "First Aid CPR" },
                {
                  value: "Basic Life Support (BLS)",
                  label: "⁠Basic Life Support (BLS)",
                },
                {
                  value: "⁠Advanced Cardiovascular Life Support (ACLS)",
                  label: "⁠Advanced Cardiovascular Life Support (ACLS)",
                },
                {
                  value: "Paediatrics Advanced Life Support (PALS)",
                  label: "Paediatrics Advanced Life Support (PALS)",
                },
                {
                  value: "⁠Essential Clinical Techniques Workshop",
                  label: "⁠Essential Clinical Techniques Workshop",
                },
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
