import React from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const { TextArea } = Input;

// const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   console.log('Change:', e.target.value);
// };

interface MyTextAreaProps {
  placeholder?: string;
  // onChange?:(event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>void;
  value?: string;
  rows?: number;
  label?: string;
  maxLength?: number;
  showCount?: boolean;
  name: string;
}

const FormTextArea = ({
  placeholder,
  // onChange,
  label,
  value,
  rows,
  maxLength,
  showCount,
  name,
}: MyTextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextArea
            showCount={showCount}
            maxLength={maxLength}
            // onChange={onChange}
            placeholder={placeholder}
            // style={{ height: 120, resize: "none" }}
            rows={rows}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
