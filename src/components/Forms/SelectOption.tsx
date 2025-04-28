"use client";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOption = {
  label: string;
  value: string;
};
type SelectFormValues = {
  name: string;
  options: SelectOption[];
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOption;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectFormOption = ({
  name,
  options,
  size,
  // value,
  placeholder,
  label,
  defaultValue,
}: SelectFormValues) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            defaultValue={defaultValue}
            size={size}
            onChange={onChange}
            options={options}
            value={value}
            style={{width:'100%'}}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default SelectFormOption;
