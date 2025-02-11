"use client";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInputProps  {
    name:string;
    type?:string;
  
    size?:"large" | "small";
    value?:string | string[] | undefined;
    id?:string;
    placeholder?:string;
    validation?:object;
    label?:string;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormInput:React.FC<IInputProps> = ({name,type,size,value,id,placeholder,validation,label})  => {
  const {control} = useFormContext()
  return (
    <>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                type === 'password' ?
                <Input.Password
                    id={id}
                    type ={type}
                    size={size} 
                    placeholder={placeholder}
                    {...field}
                    value={value ?? field.value} // Use "??" to avoid empty string issues
                />:
                <Input
                    id={id}
                    type ={type}
                    size={size} 
                    placeholder={placeholder}
                    {...field}
                    value={value ?? field.value} // Use "??" to avoid empty string issues
                />
            )}
        />
    </>
   
  );
};

export default FormInput
