import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import cardDesign from "@/images/cardDesign.jpg";
import { UserType } from "../types/common";
import { Dancing_Script } from "next/font/google";
import { GreetTitle, Honorifics } from "../db";

const dancing = Dancing_Script({ subsets: ["latin"] });
type Props = {
  open: boolean;
  handleToggle: () => void;
  cardData: UserType;
};

export default function CardDesign({ open, handleToggle, cardData }: Props) {
  const greetTitle = GreetTitle.map((item) => {
    if (Object.keys(item)[0] == cardData.greetTitle) {
      return Object.values(item)[0];
    }
  });
  const fromHonor = Honorifics.map((item) => {
    if (Object.keys(item)[0] == cardData.honorificsFrom) {
      return Object.values(item)[0];
    }
  });
  const toHonor = Honorifics.map((item) => {
    if (Object.keys(item)[0] == cardData.honorificsTo) {
      return Object.values(item)[0];
    }
  });
  return (
    <div>
      <Dialog open={open} onOpenChange={handleToggle}>
        <DialogTrigger asChild>
          {/* <Button variant="outline">Edit Profile</Button> */}
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Here is Your Card</DialogTitle>
            <DialogDescription>
              Hope Send this to your dear ones show them your Gratitude.
            </DialogDescription>
          </DialogHeader>
          <div className="w-full h-full relative">
            <Image src={cardDesign} className="w-full" height={200} alt={""} />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
              {/* title */}
              <div>
                <p
                  className={`text-slate-900 text-[38px] font-bold ${dancing.className}`}
                >
                  {greetTitle}
                </p>
              </div>
              {/* messasge */}
              <div className="p-3">
                <p className="text-slate-800 text-sm">
                  {cardData.greetMessage}
                </p>
              </div>
              {/* from name */}
              <div className="flex flex-col justify-between gap-2">
                <div className="flex items-center">
                  <span className="text-slate-800 text-sm">
                    From: {fromHonor}.
                  </span>
                  <span className="text-slate-800 text-sm">
                    {cardData.nameFrom}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-800 text-sm">To: {toHonor}.</span>
                  <span className="text-slate-800 text-sm">
                    {cardData.nameTo}
                  </span>
                </div>
              </div>
              {/* <div className="flex items-center">
                <span className="text-slate-800 text-sm">Date:</span>
                <span className="text-slate-800 text-sm">
                  {cardData.dateCreate.toDateString()}
                </span>
              </div> */}
            </div>
          </div>
          {/* <DialogFooter>
            <Button type="submit">Print</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
