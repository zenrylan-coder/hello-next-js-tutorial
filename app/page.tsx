"use client";

import Image from "next/image";
import useSWR from "swr";

type HelloResponse = { message: string };

const fetcher = async (url: string): Promise<HelloResponse> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`请求失败：${res.status}`);
  }
  return res.json();
};

export default function Home() {
  const { data, error, isLoading } = useSWR<HelloResponse>(
    "/api/hello",
    fetcher
  );

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-10 py-24 px-16 bg-white dark:bg-black">
        <Image
          className="dark:invert"
          src="/imagesnext.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
          {isLoading
            ? "加载中..."
            : error
              ? "请求出错"
              : data?.message}
        </h1>
      </main>
    </div>
  );
}
