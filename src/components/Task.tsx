"use client";
import { useState } from "react";
import { DeletButton } from "./DeleteButton";
import { EditButton } from "./EditButton";

type TaskProps = {
  newTaskValue: string;
};
export function Task({ newTaskValue }: TaskProps) {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <div className="w-[345px] h-[62px] border-2 border-gray-300 bg-[#F9FAFB] flex  items-center text-[14px] gap-3 py-3 px-2 rounded-md justify-between">
        <>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-secondary ml-3"
          />
          <p className="text-md">take a nap~{newTaskValue}</p>
        </>

        <div className="mr-3 flex gap-1">
          <EditButton />
          <DeletButton />
        </div>
      </div>
    </>
  );
}
