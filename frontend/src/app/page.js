"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/health");
        const data = await res.json();
        setStatus(data.status);
        console.log(data)
      } catch (err) {
        setStatus("Down");
      }
    };
    fetchStatus()
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Welcome</h1>
        <div>App status: {status}</div>
      </main>
    </div>
  );
}