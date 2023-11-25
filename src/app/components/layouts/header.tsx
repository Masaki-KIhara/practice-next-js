import { Acme } from "@/app/ui/acme-logo";

type Props = {
  width: string;
};

export const Header = ({ width }: Props) => {
  return (
    <div className="flex justify-center">
      <div
        className={`bg-[#2e6ee9] mt-[10px] ${width} rounded pt-12 flex pt-[100px] items-end`}
      >
        <Acme />
      </div>
    </div>
  );
};
