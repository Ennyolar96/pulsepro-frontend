import { Field, useField, type FieldProps, type FormikHelpers } from "formik";
import type {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SelectHTMLAttributes,
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
        className="text-base block mb-2 text-[#2222222] font-semibold"
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
              "py-4.5 px-5.5 bg-[#D9D9D9] rounded-[10px] w-full placeholder:text-[#22222294] placeholder:text-base placeholder:font-medium border-none outline-none",
              inputProps.className
            )}
          />
          {meta.touched && meta.error && (
            <div className="text-red-600">{meta.error}</div>
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

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  option: { value: string; label: string }[];
}
export const FormSelect = ({
  label,
  option,
  ...inputProps
}: FormSelectProps) => (
  <div>
    {label && (
      <label
        htmlFor={inputProps.id || inputProps.name}
        className="text-base block mb-2 ms-3 text-[#222222] font-semibold"
      >
        {label}
      </label>
    )}

    <Field name={inputProps.name}>
      {({ field, meta }: FieldProps) => (
        <div>
          <select
            {...inputProps}
            {...field}
            className={cn(
              "py-4.5 px-5.5 bg-[#D9D9D9] rounded-[10px] w-full placeholder:text-[#22222294] placeholder:text-base placeholder:font-medium border-none outline-none",
              inputProps.className
            )}
          >
            <option value="" defaultChecked>
              -- Select an option --
            </option>
            {option.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </select>
          {meta.touched && meta.error && (
            <div className="text-red-600">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  </div>
);

export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label?: string;
  name?: string;
  className?: string;
  labelClassName?: string;
  svgClassName?: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const CheckInput = (prop: CheckboxProps) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    prop.setChecked(event.target.checked);
  };
  return (
    <div>
      <div className="flex gap-2 items-center relative">
        <input
          type="checkbox"
          id={prop.id}
          name={prop.name}
          disabled={prop.disabled}
          defaultChecked={prop.defaultChecked}
          checked={prop.checked}
          onChange={handleCheckboxChange}
          className={cn(
            "relative peer shrink-0 appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white mt-1 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400",
            prop.className
          )}
        />
        <label htmlFor={prop.id} className={prop.labelClassName}>
          {prop.label}
        </label>
        <svg
          className={cn(
            "absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none",
            prop.svgClassName
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};
