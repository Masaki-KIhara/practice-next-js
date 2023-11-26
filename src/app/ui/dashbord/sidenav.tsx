import { Header } from "@/app/components/layouts/header";
import Link from "next/link";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";

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
  return (
    <>
      <Link href="/">
        <Header width={"w-[90%]"} />
      </Link>
      {linkList.map((item) => {
        return (
          <Link key={item.title} href={item.link}>
            <div className="bg-[#f8f9fb] block mx-auto flex w-[90%] h-10 rounded mt-[10px] hover:bg-[#2e6ee9] hover:text-white">
              {item.icon}
              <p className="ml-[2px] mt-[9px]">{item.title}</p>
            </div>
          </Link>
        );
      })}
      <div className="bg-[#f8f9fb] block mx-auto flex w-[90%] h-[45vh] rounded mt-[10px]"></div>
      <Link href={"/"}>
        <div className="bg-[#f8f9fb] block mx-auto flex w-[90%] h-10 rounded mt-[10px] hover:bg-[#2e6ee9] hover:text-white">
          <PowerIcon className="w-6" />
          <p className="ml-[2px] mt-[9px]">Sign Out</p>
        </div>
      </Link>
    </>
  );
}
