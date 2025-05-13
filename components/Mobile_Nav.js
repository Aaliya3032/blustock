import React from "react";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
      <div className="relative z-20 grid gap-6 rounded-md bg-popover bg-white p-4 text-popover-foreground shadow-md border">
        <nav className="grid grid-flow-row auto-rows-auto text-sm">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.disable ? "#" : item.href}
              className={cn("flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
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
                  className={`${pathname === "/login" ? "font-bold" : ""}`}
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <div
                  className={`${pathname === "/signup" ? "font-bold" : ""}`}
                >
                  Register
                </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end' className='w-56 mt-4 bg-white text-primary'>
                    <DropdownMenuItem className="cursor-pointer">
                         <Link href='/register/student' onClick={closeMenu}>Student</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                         <Link href='/register/instructor' onClick={closeMenu}>Instructor</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
        </div>
        )}
        
      </div>
    </div>
  );
};

export default MobileNav;
