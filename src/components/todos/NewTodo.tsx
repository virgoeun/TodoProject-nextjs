"use client"
import {useState} from 'react';
import { useRouter } from "next/navigation";

export const NewTodo = () => {

    const [newItem, setNewItem] = useState("");

    const router = useRouter();
    const create = async (e:React.SyntheticEvent) => {
        e.preventDefault();
        await fetch("/api/todo", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newItem,
          }),
        });

router.refresh();
setNewItem("");

    };

    return (
      <div className="mx-8 mt-4 mb-6">
        <form onSubmit={create} className="flex gap-3 items-center">
          <input
            type="text"
            name="title"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="New Todo"
            className="border border-slate-400 rounded-full flex-1 py-1 px-2 outline-none
focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300"
            required
          />
          <button
            type="submit"
            className="bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400
hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
          >
            <p className=" text-center">+</p>
          </button>
        </form>
      </div>
    );
}