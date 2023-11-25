import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./fonts";

export const Acme = () => {
  return (
    <>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] text-slate-100 ml-[10px] mb-[5px]" />
      <p className={`${lusitana.className} text-slate-100 text-4xl mb-[5px]`}>
        Acme
      </p>
    </>
  );
};
