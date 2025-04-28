"use client";
import React, { useEffect, useState } from "react";
import { Button, Steps } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { getFromLocalstorage, setToLocalstorage } from "@/utils/localstorage";
import { useRouter } from "next/navigation";


interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  handleFormSubmit: (el: any) => void;
  navigateLink?:string;
}

const SteppedForm = ({ steps, handleFormSubmit , navigateLink}: IStepsProps) => {
  const router = useRouter()
  const [current, setCurrent] = useState<number>(
    !!getFromLocalstorage("step")
      ? Number(JSON.parse(getFromLocalstorage("step") as string).step)
      : 0
  );

  useEffect(() => {
    setToLocalstorage("step", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  // const {register,handleSubmit,reset} = useForm();

  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    handleFormSubmit(data);
    reset();
    setToLocalstorage('step',JSON.stringify({step:0}))
    if (navigateLink) router.push(navigateLink);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleStudentOnSubmit)}
          style={{ paddingTop: "15px" }}
        >
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                // onClick={() => message.success("Processing complete!")}
                htmlType="submit"
              >
                Done
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default SteppedForm;
