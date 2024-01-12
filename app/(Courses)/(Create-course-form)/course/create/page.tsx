"use client";

import axios from "axios";
import { Circle, Text, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import BoxType from "../../_components/box";
import { Button } from "@/components/ui/button";
import Input from "../../_components/input";
import { UploadButton } from "@/lib/uploadthing";
import ImageUpload from "../../_components/imageUpload";
import toast from "react-hot-toast";

export const categories = [
  {
    label: "Course",
    icon: <VideoIcon />,
    description:
      "Create rich learning experiences with the help of video lectures, quizzes, coding exercises, etc.",
  },
  {
    label: "Practise Test",
    icon: <Text />,
    description:
      "Help students prepare for certification exams by providing practice questions.",
  },
];

export const dropdownItems = [
  {
    label: "Design",
  },
  {
    label: "Marketing",
  },
  {
    label: "Development",
  },
  {
    label: "Finance",
  },
  {
    label: "Film Making",
  },
  {
    label: "Health",
  },
];

enum STEPS {
  OPTION = 1,
  TITLE = 2,
  DESCRIPTION = 3,
  CATEGORY = 4,
  CONTENT = 5,
}

const links = [
  {
    name: "Course Type",
    step: STEPS.OPTION,
  },
  {
    name: "Course Title",
    step: STEPS.TITLE,
  },
  {
    name: "Course Description",
    step: STEPS.DESCRIPTION,
  },
  {
    name: "Course Category",
    step: STEPS.CATEGORY,
  },
  {
    name: "Course Content",
    step: STEPS.CONTENT,
  },
];

const CourseContainer = () => {
  const router = useRouter();
  const [steps, setSteps] = useState(STEPS.OPTION);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      option: "",
      title: "",
      description: "",
      imageSrc: "",
      category: "",
      author: "",
      price: 1,
    },
  });

  const option = watch("option");
  const category = watch("category");
  const imageSrc = watch("imageSrc")

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setSteps((value) => value - 1);
  };

  const onNext = () => {
    setSteps((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data, e: any) => {
    e.preventDefault();
    setIsLoading(false);
    router.push(`/course/create/${steps}`)
    
    if (steps !== STEPS.CONTENT) {
      return onNext();
    }



    setIsLoading(true);

    axios.post('/api/create-course', data) 
    .then(() => {
      toast.success('Course created')
      router.refresh()
      reset()
      setSteps(STEPS.OPTION)
      router.push('/')
    })
    .catch((err) => {
      toast.error('Something went wrong')
    })
    .finally(() => {
      setIsLoading(false)
    })

  };

  return (
    <>
      <div className="flex items-center space-x-4 w-full py-4 text-black uppercase text-md font-bold justify-center">
        {links.map((item) => (
          <span
            key={item.name}
            className={`flex w-[200px] items-center gap-2 cursor-pointer`}
          >
            <span
              className={` text-[12px]`}
              onClick={() => setSteps(item.step)}
            >
              {item.name}
            </span>
            <Circle
              color="#fff"
              strokeWidth={2}
              className={`rounded-full ${
                steps === item.step ? "bg-green-400" : ""
              }`}
            />
          </span>
        ))}
      </div>

      {steps === STEPS.OPTION && (
        <div className="my-16">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">
              First, let's find out what type of course you're making.
            </h2>
            <div className="flex items-center gap-4 mt-16">
              {categories.map(({ label, description, icon }) => (
                <BoxType
                  label={label}
                  description={description}
                  icon={icon}
                  onClick={(option) => setCustomValue("option", option)}
                  selected={option === label}
                />
              ))}
            </div>
            <div>
              <Button onClick={handleSubmit(onSubmit)} className="mt-6">
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}

      {steps === STEPS.TITLE && (
        <div className="mt-16">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">How about a working title?</h2>
            <p className="mt-8 text-lg ">
              It's ok if you can't think of a good title now. You can change it
              later.
            </p>
            <Input
              id="title"
              disabled={isLoading}
              placeholder="e.g Learn Photoshop from Scratch"
              type="title"
              register={register}
              required
              errors={errors}
            />
            <div className=" mt-8 w-1/2 ">
              <div className="flex items-center justify-between p-4">
                <Button onClick={onBack} variant="outline">
                  previous
                </Button>
                <Button onClick={handleSubmit(onSubmit)}>continue</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {steps === STEPS.DESCRIPTION && (
        <div className="mt-16">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">
              How about a working Description?
            </h2>
            <p className="mt-8 text-lg ">
              It's ok if you can't think of a good description now. You can
              change it later.
            </p>
            <Input
              id="description"
              disabled={isLoading}
              placeholder="Enter your Course Description"
              type="description"
              register={register}
              required
              errors={errors}
            />
            <div className=" mt-8 w-1/2 ">
              <div className="flex items-center justify-between p-4">
                <Button onClick={onBack} variant="outline">
                  previous
                </Button>
                <Button onClick={handleSubmit(onSubmit)}>continue</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {steps === STEPS.CATEGORY && (
        <div className="mt-16">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">
              What category best fits the knowledge you'll share?
            </h2>
            <p className="mt-8 text-lg ">
              If you're not sure about the right category, you can change it
              later. Course category
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {dropdownItems.map(({ label }) => (
                <BoxType
                  label={label}
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === label}
                />
              ))}
            </div>
            <div className=" mt-8 w-1/2 ">
              <div className="flex items-center justify-between p-4">
                <Button onClick={onBack} variant="outline">
                  previous
                </Button>
                <Button onClick={handleSubmit(onSubmit)}>continue</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {steps === STEPS.CONTENT && (
        <div className="mt-16">
          <div className="flex flex-col justify-center items-center">
            <ImageUpload 
            onChange={(value) => setCustomValue('imageSrc', value)}
            value={imageSrc}
            />
            <Input 
            placeholder="Author name"
            id="content"
            type="content"
            register={register}
            disabled={isLoading}
            errors={errors}
            required
            />
             <div className=" mt-8 w-1/2 ">
              <div className="flex items-center justify-between p-4">
                <Button onClick={onBack} variant="outline">
                  previous
                </Button>
                <Button onClick={handleSubmit(onSubmit)}>Create</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseContainer;
