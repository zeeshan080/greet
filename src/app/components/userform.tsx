"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { UserType, formSchema } from "../types/common";
import { GreetTitle, Honorifics } from "../db";

type Props = {
  handleToggle: () => void;
  handleCardData: (cardData: UserType) => void;
};
export function UserForm({ handleToggle, handleCardData }: Props) {
  // 1. Define your form.
  const form = useForm<UserType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      greetTitle: "",
      honorificsFrom: "Mr/Ms",
      honorificsTo: "Mr/Ms",
      nameFrom: "",
      greetMessage: "",
      nameTo: "",
    //   dateCreate: new Date(),
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: UserType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    handleCardData(values);
    handleToggle();
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* title */}
        <FormField
          control={form.control}
          name="greetTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Greet Title</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Greet Title" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {GreetTitle.map((item, index) => {
                    const key = Object.keys(item)[0]; // Get the key from the object
                    const value = Object.values(item)[0]; // Get the value from the object
                    return (
                      <SelectItem key={key} value={key}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* from honorifics*/}
        <FormField
          control={form.control}
          name="honorificsFrom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Honorifics From</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select their honorifics" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {Honorifics.map((item, index) => {
                    const key = Object.keys(item)[0]; // Get the key from the object
                    const value = Object.values(item)[0]; // Get the value from the object
                    return (
                      <SelectItem key={key} value={key}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* from */}
        <FormField
          control={form.control}
          name="nameFrom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* messaege */}
        <FormField
          control={form.control}
          name="greetMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your thoughts..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Write a short message for them (max length 25 characters).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* from honorifics*/}
        <FormField
          control={form.control}
          name="honorificsTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Honorifics To</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select their honorifics" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {Honorifics.map((item, index) => {
                    const key = Object.keys(item)[0]; // Get the key from the object
                    const value = Object.values(item)[0]; // Get the value from the object
                    return (
                      <SelectItem key={key} value={key}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* to */}
        <FormField
          control={form.control}
          name="nameTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reciever Name</FormLabel>
              <FormControl>
                <Input placeholder="Your There Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* date */}
        {/* <FormField
          control={form.control}
          name="dateCreate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pick A Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  value={field.value.toISOString().split("T")[0]}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Generate</Button>
      </form>
    </Form>
  );
}
