"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const handleOpenSidebar = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="xl:hidden">
      <button onClick={handleOpenSidebar}>
        <Menu />
      </button>

      <div
        className={`${open ? "flex" : "hidden"} absolute top-0 left-0 w-full`}
      >
        <div className="flex justify-end bg-white p-[20px] w-full">
          <div className="flex text-foreground gap-3 text-lg font-medium items-start flex-col">
            <button
              onClick={handleOpenSidebar}
              className="flex mb-5 justify-end w-full"
            >
              <Menu />
            </button>
            <a href="#">Get a Demo</a>
            <a href="#">Contact</a>
            <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
