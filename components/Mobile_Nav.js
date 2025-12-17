import React from "react";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ navLinks , closeMenu , loginSession}) => {
    const pathname = usePathname();
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)]grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden text-primary"
      )}
    >
      <div className="relative z-20 grid gap-4 rounded-md bg-popover bg-white p-4 text-popover-foreground shadow-md border">
        <nav className="grid grid-flow-row auto-rows-auto text-sm">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.disable ? "#" : item.href}
              className={cn("flex w-full items-center rounded-md p-1 text-sm hover:underline",
                item.disable && "cursor-not-allowed opacity-60"
              )}
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {!loginSession && (
          <div className="items-center gap-3 flex lg:hidden">
        <Link
                  href="/login"
                  className={`${pathname === "/login" ? "font-bold" : "border-2 border-primary bg-primary text-white rounded-full p-1.5 text-xs flex items-center"}`}
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  href="/register/student"
                  className={`${pathname === "/register/student" ? "font-bold" : "border-2 border-primary bg-primary text-white rounded-full p-1.5 text-xs flex items-center"}`}
                  onClick={closeMenu}
                >
                  Register
                </Link>
        </div>
        )}
        
      </div>
    </div>
  );
};

export default MobileNav;
