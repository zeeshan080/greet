import * as z from "zod";

export const formSchema = z.object({
    greetTitle: z.string(),
    honorificsFrom: z.string(),
    honorificsTo: z.string(),
    nameFrom: z
      .string()
      .max(15, { message: "Name length can not be greater then 25 characters." }),
    greetMessage: z.string().max(120, {
      message: "Message length can not be greater then 120 characters.",
    }),
    nameTo: z
      .string()
      .max(15, { message: "Name length can not be greater then 25 characters." }),
    // dateCreate: z.date(),
  });

export type UserType = z.infer<typeof formSchema>