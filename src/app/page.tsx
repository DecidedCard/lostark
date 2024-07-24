"use client";

import Input from "@/components/homeComponents/Input";
import SideNavigationBar from "@/components/homeComponents/SideNavigationBar";

export default function Home() {
  return (
    <div className="flex">
      <SideNavigationBar />
      <main className="w-full">
        <Input />
      </main>
    </div>
  );
}
