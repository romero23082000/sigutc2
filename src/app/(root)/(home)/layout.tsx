"use client";
import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <div className="w-full">
        <section className="flex min-h-screen flex-col px-6 pb-6 pt-6 max-md:pb-6 sm:px-6">
          <div className="w-full ">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
