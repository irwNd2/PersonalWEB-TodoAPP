"use client";

import FormTodo from "@/components/formTodo";
import { useState } from "react";
import Card from "@/components/card";

type FormData = {
  title: string;
  todo: string;
  date: string;
  hour: string;
};

export default function Home() {
  const [form, setForm] = useState<FormData>({
    title: "",
    todo: "",
    date: "",
    hour: "",
  });

  const [todos, setTodos] = useState<FormData[]>([]);

  const submitTodo = (e: any) => {
    e.preventDefault();
    setTodos([...todos, form]);
  };

  return (
    <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4 lg:gap-8 max-h-screen font-lato">
      <div className="h-[22rem] rounded-lg bg-gray-200 p-4">
        <FormTodo onSubmit={submitTodo} form={form} setForm={setForm} />
      </div>
      <div className="h-screen rounded-lg p-4 bg-gray-200 md:col-span-3 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {todos.length > 0 &&
            todos.map((el: FormData, index) => (
              <Card key={index}>
                <p>{el.title}</p>
                <p>{el.todo}</p>
                <p>{el.date}</p>
                <p>{el.hour}</p>
              </Card>
            ))}
        </div>
      </div>
    </main>
  );
}
