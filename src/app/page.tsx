"use client";

import Input from "@/components/homeComponents/Input";
import Notice from "@/components/homeComponents/Notice";
import Popularity from "@/components/homeComponents/Popularity";
import Schedule from "@/components/homeComponents/Schedule";
import SideNavigationBar from "@/components/homeComponents/SideNavigationBar";

export default function Home() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full">
        <Input />
      </section>
      <section className="flex">
        <div className="flex w-3/4 border-r border-solid border-primary-200">
          <Schedule />
          <Notice />
        </div>
        <Popularity />
      </section>
    </main>
  );
}
