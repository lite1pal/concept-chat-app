import { List, Menu } from "lucide-react";
import Button from "../UI/Button";
import MobileSidebar from "../Layout/MobileSidebar";

function Navbar() {
  return (
    <nav className="flex max-w-[1280px] sm:max-w-[700px] xl:max-w-[1280px] z-[1] text-white mx-auto py-5 px-[20px] xl:px-10 left-0 text-center right-0 w-full items-center absolute top-0 justify-between">
      <a className="text-lg" href="#">
        conference<span className="font-semibold">calling</span>
      </a>
      <MobileSidebar />
      <div className="hidden xl:flex items-center text-sm font-medium gap-6">
        <a href="#">Get a Demo</a>
        <a href="#">Contact</a>
        <div className="h-10 w-1 border-opacity-30 border-l border-white"></div>
        <a href="#">Log in</a>
        <div className="ml-5">
          <Button variant="ghost" className="text-sm font-medium px-10">
            Pricing & Free Trial
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
