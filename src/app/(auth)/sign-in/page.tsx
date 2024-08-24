'use client'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { useEffect, useState } from "react"
import {useDebounceValue, useDebounceCallback} from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation" 
import { signUpSchema } from "@/schemas/signUpSchema"
import axios, {AxiosError} from "axios"
import { ApiResponse } from "@/types/ApiResponse"
import { Form } from "@/components/ui/form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { SignInSchema } from "@/schemas/signInSchema"
import { signIn } from "next-auth/react"

const SignIn = () => {
    const {toast} = useToast();
    const router = useRouter();

    // zod implementation:
    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            identifier: '',
            password: '',
        }
    })

    const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
         const result = await signIn('credentials', {
            redirect: false,
            identifier: data.identifier,
            password: data.password
        })
        if(result?.error){
            toast({
                title: "Login Failed",
                description: "Incorrect username or password",
                variant: "destructive"
            }) 
        } 

        if(result?.url){
            router.replace('/dashboard')
        }
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                    AnonyExpert By PositiveGems
                    </h1>
                    <p className="mb-4"> Hesitant to Discuss Sexual Health? Sign In to get Expert Advice Anonymously.</p>
            </div>
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        <FormField
          name="identifier"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email/Username</FormLabel>
              <FormControl>
                <Input placeholder="email/username" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
            {/* {isSubmitting ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait
                </>
            ) : ('SignUp')
        } */}
        Sign In
        </Button>
                </form>
            </Form>
            <div className="text-center mt-4">
                <p>
                    Dont have an Account?{' '}
                    <Link href="sign-up" className="text-blue-600 hover:text-blue-800">
                    SignUp</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignIn