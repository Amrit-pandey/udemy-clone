"use client";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
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

    signIn('credentials', {
      ...data,
      redirect: false
    })
    .then((callback) => {
      setIsLoading(false)

      if(callback?.ok){
        toast.success('Successfully logged in.')
        router.refresh()
        router.push('/')
      }

      if(callback?.error){
        toast.error(callback.error)
      }
    })
  };
  
  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto block">
        <Heading title="Login to your Udemy account" />
        <div className="flex flex-col gap-3 mt-5">
          <Button variant="outline" size="lg" className="p-7">
            Continue with Google
          </Button>
          <Button variant="outline" size="lg" className="p-7">
            Continue with Github
          </Button>
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
          <Button variant="secondary" size='lg' className="p-8">Log in</Button>
        </div>
      </form>
      <div className="my-6 text-center text-sm">
        <span className="text-lg">or</span>{" "}
        <Link href={""} className="text-xl font-bold text-blue-800 hover:text-blue-900 underline">
          Forgot Password
        </Link>
      </div>
      <hr className="mx-auto max-w-lg" />
      <div className="text-center mt-8">
        <span className="text-md">
          Don't have an account?{" "}
          <Link
            href={"/register"}
            className="text-blue-800 font-bold underline"
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
