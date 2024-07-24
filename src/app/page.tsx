"use client";

import Input from "@/components/homeComponents/Input";
import Notice from "@/components/homeComponents/Notice";
import Schedule from "@/components/homeComponents/Schedule";
import SideNavigationBar from "@/components/homeComponents/SideNavigationBar";

export default function Home() {
  return (
    <div className="flex">
      <SideNavigationBar />
      <main className="w-full">
        <Input />
        <div className="flex w-2/3">
          <Schedule />
          <Notice />
        </div>
      </main>
    </div>
  );
}
