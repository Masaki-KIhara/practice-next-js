import Image from "next/image";
export const Body = () => {
  return (
    <div className="h-[85vh] flex justify-between mx-auto max-w-[98%]">
      <div className="flex flex-col items-center justify-center mt-[10px] w-[29%] bg-[#f8f9fb] h-full rounded">
        <div>
          <div className="flex gap-[5px]">
            <p className="font-bold text-lg">Welcom to Acme.</p>
            <p className="text-lg">This is the</p>
          </div>
          <div className="flex gap-[3px]">
            <p className="text-lg">example for the</p>
            <p className="text-[#2e6ee9] text-lg">Next.js Learn Course,</p>
          </div>
          <p className="text-lg">brought to you by vercel.</p>
          <button className="border border-[#0070f0] bg-[#0070f0] rounded w-[100px] h-[30px] text-[#fefefe] mt-[10px] text-xs">
            Log in →
          </button>
        </div>
      </div>
      <div className="mx-auto mt-[10vh]">
        <Image
          src="/hero-desktop.png"
          width={750}
          height={450}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </div>
  );
};
