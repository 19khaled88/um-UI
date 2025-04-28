// "use client"
// import React, { ReactElement, ReactNode } from 'react'
// import { useForm, FormProvider, SubmitHandler } from "react-hook-form"

// type FormConfig = {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     defaultValues?:Record<string, any>
//     resolver?:any
// }

// type FormProps = {
//     children?:ReactElement | ReactNode;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     submitHandler:SubmitHandler<any>;
// } & FormConfig

// function Form({children, submitHandler, defaultValues,resolver}:FormProps) {

//     const formConfig:FormConfig = {}
//     if(!!formConfig) formConfig["defaultValues"] = defaultValues;
//     if(!!resolver) formConfig["resolver"] = resolver;
//     const methods = useForm<FormProps>(formConfig);

//     const {handleSubmit,
//       // reset
//     } = methods
    
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const onSubmit = (data:any) => {
//         submitHandler(data);
//         // reset()
//     }
   
  
//     return (
//       <FormProvider {...methods}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {children}
//         </form>
//       </FormProvider>
//     )
// }

// export default Form











import { FormProvider, useForm, UseFormProps, FieldValues } from "react-hook-form";

type FormProps<T extends FieldValues> = {
  children: React.ReactNode;
  submitHandler: (data: T) => void;
  resolver?: UseFormProps<T>['resolver'];
};

const Form = <T extends FieldValues>({ children, submitHandler, resolver }: FormProps<T>) => {
  const methods = useForm<T>({
    resolver,
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;

