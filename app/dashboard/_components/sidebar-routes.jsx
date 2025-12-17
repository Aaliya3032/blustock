"use client";

import { BarChart, Users, BookOpen, Radio } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: BarChart,
    label: "Analytics",
    href: "/dashboard",
  },
  {
    icon: Users,
    label: "Users",
    href: "/dashboard/users",
  },
  {
    icon: BookOpen,
    label: "Courses",
    href: "/dashboard/courses",
  },
  {
    icon: BookOpen,
    label: "Add Course",
    href: "/dashboard/courses/add",
  },
  {
    icon: Radio,
    label: "Lives",
    href: "/dashboard/lives",
  },
  // {
  //   icon: BookA,
  //   label: "Quizes",
  //   href: "/dashboard/quiz-sets",
  // },
];

export const SidebarRoutes = () => {
  // const pathname = usePathname();

  // const isTeacherPage = pathname?.includes("/teacher");

  // const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
