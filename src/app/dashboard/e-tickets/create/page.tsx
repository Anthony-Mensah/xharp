"use client";
import { add, xharpLogo } from "@/assests/images";
import Image from "next/image";
import Link from "next/link";

const CreateEtiketPage = () => {
  return (
    <>
      <section className="flex flex-col h-full space-y-2">
        <section className="border-b border-border flex items-center">
          <header className="hidden md:flex justify-between app-container items-center min-h-[54.25px]">
            <Image
              src={xharpLogo}
              alt="xharp logo"
              sizes="100vw"
              width={94.03}
              height={35.25}
              priority
            />
            {/* cancel */}
            <Link href={"/dashboard/e-tickets"}>
              <i className="ri-close-fill hover-effect min-w-6 min-h-6"></i>
            </Link>
          </header>
        </section>
        {/* main content */}
        <main className="flex-1 app-container flex flex-col space-y-5 overflow-y-auto items-center scrollbar-hide mt-5">
          {/* title */}
          <div className="flex flex-col space-y-1 min-h-[84px] md:w-[425px] mx-auto ">
            <span className="font-instrument text-[32px] leading-8 text-center font-medium">
              Basic Event Details
            </span>
            <p className="text-muted text-center">
              Add the basic information about your event name, description, and
              key highlights.
            </p>
          </div>
          {/* create event form */}
          <form className="md:w-[515px] w-full min-h-[715px] space-y-8">
            {/* event name */}
            <aside className="w-full flex flex-col min-h-16 space-y-1">
              <label htmlFor="name">Event Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Afrochella 2025"
              />
            </aside>
            {/* event category */}
            <aside className="w-full flex flex-col min-h-16 space-y-1">
              <label htmlFor="ticket">Event Category</label>
              <select id="ticket" name="ticket" className="form-input">
                <option>Standard</option>
                <option>VIP</option>
                <option>Student</option>
              </select>
            </aside>
            {/* custom URL */}
            <aside className="w-full flex flex-col min-h-16 space-y-1">
              <label htmlFor="custom-url">Custom URL</label>
              <div className="min-h-10 rounded-[10px] border border-border flex items-center">
                <input
                  type="text"
                  id="custom-url"
                  className="border-transparent rounded-[10px] h-full min-w-[165px] px-3 py-2.5 focus:outline-none "
                  placeholder="usexharp.io/discover/"
                />
                <input
                  type="text"
                  id="custom-url"
                  className="border-border rounded-[10px] border-l h-full w-full px-3 py-2.5 focus:outline-none"
                  placeholder="your custom name"
                />
              </div>
            </aside>
            {/* event description */}
            <aside className="w-full flex flex-col min-h-16 space-y-1">
              <label htmlFor="name">Event Description</label>
              <textarea
                className="form-input h-[218px] p-5"
                rows={5}
              ></textarea>
            </aside>
            {/* event image */}
            <label
              htmlFor="image"
              className="relative w-full border border-dashed border-muted rounded-xl h-[161px] p-8 flex flex-col items-center justify-center space-y-5 text-center cursor-pointer"
            >
              {/* real image element */}
              <input
                type="file"
                name=""
                id="image"
                className="absolute opacity-0 inset-0 w-full h-full"
              />
              {/* icon and text */}
              <Image src={add} alt="add" sizes="100vw" width={50} height={50} />
              <div className="flex flex-col h-[37px]">
                <p>Upload event image</p>
                <p className="text-muted">Recommended : 400x400px</p>
              </div>
            </label>

            {/* advanced settings */}
            <div className="items-center h-8 space-x-2.5 flex w-full">
              {/* first line */}
              <div className="border flex-1 border-[#E1E4EA] "></div>
              <button
                onClick={(e) => e.preventDefault()}
                className="border border-[#E1E4EA] p-1.5 rounded-lg h-8 min-w-[155px] flex items-center justify-center"
              >
                <p>Advanced Settings</p>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              <div className="border flex-1 border-[#E1E4EA]"></div>
            </div>

            {/* buton */}
            <button className="h-10 rounded-[10px] border p-2.5 bg-foreground text-background w-full">
              Continue
            </button>

            {/* steps */}
            <div className="w-full flex justify-center items-center space-x-[7px] pb-5">
              <div className="h-[5px] rounded-[40px] w-10 bg-foreground"></div>
              <div className="h-[5px] rounded-[40px] w-10 bg-[#E1E4EA]"></div>
              <div className="h-[5px] rounded-[40px] w-10 bg-[#E1E4EA]"></div>
            </div>
          </form>
        </main>
      </section>
    </>
  );
};

export default CreateEtiketPage;
