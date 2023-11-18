"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./dark-mode-toggle";

type Menu = {
  label: string;
  url: string;
};

export const Header = () => {
  const pathName = usePathname();

  const getClassText = (url: string): string => {
    if (url === pathName) return "text-white";
    return "";
  };

  const getUnderlineClass = (url: string): string => {
    if (url === pathName) return "w-full";
    return "w-0";
  };

  const leftMenu: Menu[] = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
  ];

  const rightMenu: Menu[] = [
    { label: "Login", url: "/login" },
    { label: "Register", url: "/register" },
  ];
  return (
    <div className="flex font-lato justify-between dark:bg-slate-700 bg-yellow-500 font-bold text-lg relative top-0 px-6 py-5">
      <div className="flex gap-4 text-gray-400">
        {leftMenu.map((el: Menu): React.ReactNode => {
          return (
            <Link href={el.url} key={el.url} className={`hover:text-orange-200 relative group ${getClassText(el.url)}`}>
              <span>{el.label}</span>
              <span className={`absolute -bottom-1 rounded-xl left-0 h-1 bg-green-400 transition-all group-hover:w-full ${getUnderlineClass(el.url)}`}></span>
            </Link>
          );
        })}
        <DarkModeToggle />
      </div>
      <div className="flex gap-4 text-gray-400">
        {rightMenu.map((el: Menu): React.ReactNode => {
          return (
            <Link href={el.url} key={el.url} className={`hover:text-orange-200 relative group ${getClassText(el.url)}`}>
              <span>{el.label}</span>
              <span className={`absolute rounded-xl -bottom-1 left-0 h-1 bg-green-400 transition-all group-hover:w-full ${getUnderlineClass(el.url)}`}></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
