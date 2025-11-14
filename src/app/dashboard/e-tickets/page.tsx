"use client";
import { calendar } from "@/assests/images";
import EmptyStareCard from "@/components/empty-state-card";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

const ETicketPage = () => {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const router = useRouter();
  const handleCreateEvent = useCallback(
    () => router.push("/dashboard/e-tickets/create"),
    []
  );
  return (
    <>
      <section className="flex flex-col h-full app-container">
        {/* e-ticket page header, ie logo and tabs */}
        <header className="flex items-center justify-between md:py-5">
          <h1>E-tickets</h1>
          {/* upcoming and past tabs */}
          <aside className="tab">
            <button
              onClick={() => setTab("upcoming")}
              className={`flex-1 tab-item ${
                tab === "upcoming" ? " bg-background shadow" : ""
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setTab("past")}
              className={`flex-1 tab-item ${
                tab === "past" ? " bg-background shadow" : ""
              }`}
            >
              Past
            </button>
          </aside>
        </header>
        {/* main content */}
        <main className="flex-1 flex md:overflow-y-auto flex-col justify-center md:justify-start items-center">
          <EmptyStareCard
            image={calendar}
            label="Create new event"
            subtext="Add new event and stay ahead of the curve"
            buttonLabel="Create event"
            onButtonClick={handleCreateEvent}
          />
        </main>
      </section>
    </>
  );
};

export default ETicketPage;
