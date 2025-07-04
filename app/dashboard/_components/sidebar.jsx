import { SidebarRoutes } from "./sidebar-routes";
import logo from "../../../assets/logo2.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex-shrink-0">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="sm:h-28 h-24 sm:w-28 w-24 py-2"
          />
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
