"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  secretName: z.string().min(2).max(200),
  secretEmail: z.string().email(),
  secretMessage: z.string().min(10).max(1000),
});



export default function SecretForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      secretName: "",
      secretEmail: "",
      secretMessage: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        {/* Secret Name Field */}
        <FormField
          control={form.control}
          name="secretName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secret Name</FormLabel>
              <FormControl>
                <Input placeholder="Secret Name" {...field} />
              </FormControl>
              <FormDescription>This will be your public name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Secret Email Field */}
        <FormField
          control={form.control}
          name="secretEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secret Email</FormLabel>
              <FormControl>
                <Input placeholder="secret@gmail.com" {...field} />
              </FormControl>
              <FormDescription>I'll use this to contact you.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Secret Message Field */}
        <FormField
          control={form.control}
          name="secretMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secret Message</FormLabel>
              <FormControl>
                <Textarea placeholder="What's your secret message?" {...field} />
              </FormControl>
              <FormDescription>
                Share your thoughts or inquiries with us.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
              <FormDescription>This doesn't work yet!</FormDescription>
      </form>
    </Form>
  );
}
