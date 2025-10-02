"use client";
import { useState } from "react";
import { Task } from "./Task";
import { ThemeController } from "./ThemeController";
export function HomePage() {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState("");
  const inputValue = "";

  return (
    <div className="w-full h-screen rounded-md bg-[#F3F4F6] flex flex-col justify-center items-center gap-10">
      <div className="w-[420px] bg-[#FFFFFF] h-auto flex flex-col justify-center items-center rounded-md border shadow-[0_0_27px_0_rgba(0,0,0,0.10)]">
        <p className="font-bold text-[30px] text-black my-10">To-Do List </p>
        <div className="flex gap-2 justify-center items-center mb-10">
          <input
            type="text"
            placeholder="Add a new task..."
            className="input input-secondary"
          />
          <button className="btn btn-secondary hover:scale-[1.05] rounded-md">
            Add
          </button>
        </div>
        <div className="flex justify-center items-center gap-3 mb-10">
          <button className="btn btn-secondary rounded-md hover:scale-[1.05]">
            All
          </button>
          <button className="btn btn-soft btn-secondary rounded-md hover:scale-[1.05]">
            Active
          </button>
          <button className="btn btn-soft btn-secondary rounded-md hover:scale-[1.05]">
            Completed
          </button>
        </div>
        {inputValue === "" && (
          <p className="mb-10 text-[#363636]">No tasks yet. Add one above!</p>
        )}

        <div className="test-[12px] flex gap-2 mb-10  ">
          <p className="text-[#363636]">Powered by</p>
          <a
            href="https://pinecone.mn/"
            className="text-pink-400 hover:scale-[1.05] text-6"
          >
            Pinecone academy
          </a>
        </div>
      </div>
      <Task newTaskValue={`${newTask}`} />
    </div>
  );
}
