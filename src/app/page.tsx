"use client";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full h-screen rounded-md bg-[#F3F4F6] flex flex-col justify-center items-center">
      <div className="w-[420px] bg-[#FFFFFF] h-auto flex flex-col justify-center items-center rounded-md border shadow-[0_0_12px_0_rgba(0,0,0,0.25)]">
        <p className="font-bold text-[20px] text-black my-10">To-Do List </p>
        <div className="flex gap-2 justify-center items-center mb-10">
          <input
            type="text"
            placeholder="Add a new task..."
            className="input input-secondary"
          />
          <button className="btn btn-secondary hover:scale-[1.05]">Add</button>
        </div>
        <div className="flex justify-center items-center gap-3 mb-10">
          <button className="btn btn-secondary">All</button>
          <button className="btn btn-soft btn-secondary">Active</button>
          <button className="btn btn-soft btn-secondary">Completed</button>
        </div>
        <p className="mb-10 text-black">No tasks yet. Add one above!</p>
        <div className="test-[12px] flex gap-2 mb-10  ">
          <p className="text-black">Powered by</p>
          <a href="https://pinecone.mn/" className="text-pink-400">
            Pinecone academy
          </a>
        </div>
      </div>
    </div>
  );
}
