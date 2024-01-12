"use client";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
    .then(() => {
      router.refresh()
    })
    .then(() => {
      toast.success('Registration Success.')
      router.push('/login')
    })
    .catch((err) => {
      toast.error('Something went wrong!')
      console.log(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  
  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto block">
        <Heading title="Sign up to start learning" />
        <div className="flex flex-col gap-3 mt-5">
          <Input
            label=" Full name"
            id="name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Email"
            id="email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Password"
            id="password"
            type="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Button variant="secondary" size='lg' className="p-8">Sign up</Button>
        </div>
      </form>
      <div className="my-6 text-center text-sm">
        <p>By signing up, you agree to our Terms of Use and Privacy Policy</p>
      </div>
      <hr className="mx-auto max-w-lg" />
      <div className="text-center mt-8">
        <span className="text-md">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-blue-800 font-bold underline"
          >
           Log in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
