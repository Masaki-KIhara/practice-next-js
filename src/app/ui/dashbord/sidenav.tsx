"use client";

import { Header } from "@/app/components/layouts/header";
import Link from "next/link";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type LnkListType = {
  title: string;
  link: string;
  icon: ReactNode;
}[];

const linkList: LnkListType = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon className="w-6 ml-[12px]" />,
  },
  {
    title: "Invoices",
    link: "/dashboard/invoices",
    icon: <DocumentDuplicateIcon className="w-6 ml-[12px]" />,
  },
  {
    title: "Customers",
    link: "/dashboard/customers",
    icon: <UserGroupIcon className="w-6 ml-[12px]" />,
  },
];

export default function SideNav() {
  const pathname = usePathname();
  return (
    <>
      <Link href="/">
        <Header width={"w-[90%]"} />
      </Link>
      {linkList.map((item) => {
        return (
          <Link
            key={item.title}
            href={item.link}
            className={` block" mx-auto flex w-[90%] gap-2 h-10 rounded mt-[10px] hover:bg-[#2e6ee9] hover:text-white ${
              pathname === item.link
                ? "bg-[#2d6ee9] text-white"
                : "bg-[#f8f9fb] "
            }`}
          >
            {item.icon}
            <p className="ml-[2px] mt-[9px]">{item.title}</p>
          </Link>
        );
      })}
      <div className="bg-[#f8f9fb] block mx-auto flex w-[90%] h-[45vh] rounded mt-[10px]"></div>
      <Link
        href={"/"}
        className="bg-[#f8f9fb] block mx-auto flex w-[90%] gap-2 h-10 rounded mt-[10px] hover:bg-[#2e6ee9] hover:text-white"
      >
        <PowerIcon className="w-6 ml-[12px]" />
        <p className="ml-[2px] mt-[9px]">Sign Out</p>
      </Link>
    </>
  );
}
