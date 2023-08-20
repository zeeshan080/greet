"use client";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { UserForm } from "./components/userform";
import CardDesign from "./components/carddesign";
import { useState } from "react";
import { UserType } from "./types/common";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [cardData, setCardData] = useState<UserType>();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleCardData = (data: UserType) => {
    console.log("in page", data);
    setCardData(data)
  };
  return (
    <main className="flex flex-col items-center justify-centers">
      {cardData && <CardDesign open={toggle} handleToggle={handleToggle} cardData = {cardData} />}
      <div className="flex w-full  justify-center mt-24">
        <h1 className="text-[28px] font-bold tracking-widest">
          WELCOME TO GREETER
        </h1>
      </div>
      {/* <div className="mt-8">
        <Button className="bg-gray-100 text-slate-900 rounded-full py-3 px-5 active:translate-y-1 hover:bg-gray-300">
          CREATE CARD
        </Button>
      </div> */}

      <div className="m-8 w-full">
        <Card className="rounded-[10px] w-full">
          <CardHeader>
            <CardTitle>Infomation Needed for Card Generator</CardTitle>
            <CardDescription>
              Provide Information to Generate card
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="">
              <UserForm
                handleToggle={handleToggle}
                handleCardData={handleCardData}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
