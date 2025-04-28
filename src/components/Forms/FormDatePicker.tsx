"use client";
import { DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import type { DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";

type DatePickerValues = {
  onChange?: (valOne: Dayjs | null, valTwo: string | string[]) => void;
  name: string;
  value?: Dayjs;
  label?: string;
  size:'large' | 'small'
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormDatePicker = ({ onChange, name, label,size }: DatePickerValues) => {
  const { control,setValue } = useFormContext();

  const handleChange: DatePickerProps["onChange"] = (date, dateString) => {
    if(onChange) {
        onChange(date, dateString)
    } 
    setValue(name, dateString);
  };
  return (
    <div>
      {label ? label : null}
        <br/>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <DatePicker size={size} value={dayjs(field.value) || null} onChange={handleChange} style={{width:'100%'}} />}
      />
    </div>
  );
};

export default FormDatePicker;
