"use client";

import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Get a Demo", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Sign in", href: "#" },
];

function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const sidebarButtonRef = useRef(null);

  const handleOpenSidebar = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (event: any) => {
    if (
      sidebarRef.current &&
      sidebarButtonRef.current &&
      !(sidebarButtonRef.current as any).contains(event.target) &&
      !(sidebarRef.current as any).contains(event.target)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="xl:hidden">
      <button ref={sidebarButtonRef} onClick={handleOpenSidebar}>
        <Menu />
      </button>

      <div
        ref={sidebarRef}
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
            {navItems.map((item, i) => (
              <a key={i} href="#">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
