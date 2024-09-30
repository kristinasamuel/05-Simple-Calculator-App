// calculator project
"use client"; // for client side rendering
// import hooks from react
import { useState, ChangeEvent } from "react";
// import card,input,label,button from shadcn library
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// export a default function
export default function Calculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");
  // create a function for handle number in input
  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum1(e.target.value);
  };
  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum2(e.target.value);
  };
  // create functions for arithmetic operations
  const add = (): void => {
    setResult((parseFloat(num1) + parseFloat(num2)).toString());
  };

  const subtract = (): void => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };

  const multiply = (): void => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString());
  };

  const divide = (): void => {
    if (parseFloat(num2) !== 0) {
      setResult((parseFloat(num1) / parseFloat(num2)).toString());
    } else {
      setResult("Error: Division by zero");
    }
  };
  // this function clear all the screen
  const clear = (): void => {
    setNum1("");
    setNum2("");
    setResult("");
  };
  // return the final output
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-rose-300  ">
      {/* Give style to card and show calculator in the center of screen*/}
      <Card className="md:w-full max-w-md p-2 md:p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg b border-2 border-black">
        <CardHeader>
          {/* give style to title */}
          <CardTitle className="text-2xl font-bold uppercase">
            {" "}
            Simple calculator
          </CardTitle>
        </CardHeader>
        {/* airthematic operation  */}
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className=" flex flex-col space-y-2">
              <Label htmlFor="num1">Number 1</Label>
              <Input
                id="num1"
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter a number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2">Number 2</Label>
              <Input
                id="num2"
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter a number"
               
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {/* buttons for airthematic operation */}
            <Button
              variant={"outline"}
              className="text-2xl font-bold bg-teal-400 text-gray-700 dark:text-gray-500"
              onClick={add}
            >
              +
            </Button>
            <Button
              variant={"outline"}
              className="text-2xl font-bold bg-yellow-400 text-gray-700 dark:text-gray-300"
              onClick={subtract}
            >
              -
            </Button>
            <Button
              variant={"outline"}
              className="text-2xl font-bold bg-green-400 text-gray-700 dark:text-gray-300"
              onClick={multiply}
            >
              *
            </Button>
            <Button
              variant={"outline"}
              className="text-2xl font-bold bg-indigo-400 text-gray-700 dark:text-gray-300"
              onClick={divide}
            >
            /
            </Button>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="result">Result</Label>
              <Input
                id="result"
                type="text"
                value={result}
                placeholder="Result"
                readOnly
              />
            </div>
          </div>
          {/* button clear all the screen */}
          <Button
            variant="outline"
            className="w-full text-xl uppercase bg-teal-700"
            onClick={clear}
          >
            clear
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
