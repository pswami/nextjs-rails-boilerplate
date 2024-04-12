'use client';
import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useLogin, useGoogleLogin } from '@/services/users';

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const login = useLogin();
  const googleLogin = useGoogleLogin();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    try {
      const res = await login.mutateAsync(data).then((res) => {
        toast({
          title: 'Login successful',
          description: 'You have been logged in successfully',
        })
        redirect('/home');
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while logging in',
        variant: 'destructive',
      })
    }
  };

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            {...register('email')}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required {...register('password')} />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>

      <Button variant="outline" className="w-full" onClick={() => { googleLogin.mutate(); }}>
        <Image src="https://www.svgrepo.com/download/475656/google-color.svg" alt="Google" width={20} height={20} className="mr-2" />
        Login with Google
      </Button>

      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  )
}


export default LoginForm;
