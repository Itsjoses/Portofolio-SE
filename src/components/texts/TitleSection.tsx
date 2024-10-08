import DynamicLayout from "../layouts/DynamicLayout";
import { FaGear } from "react-icons/fa6";
export default function TitleSection({ title }: { title: string }) {
  return (
    <DynamicLayout border={false}>
      <div className="pt-28 my-4 ">
        <div className="flex justify-center font-bold relative ">
          <div className="absolute text-4xl md:text-5xl lg:text-6xl text-neutral-950/10 dark:text-neutral-50/10 bottom-0 delay-150 transition-all ease-in">
            {title}
          </div>
          <div className="z-10 relative text-xl md:text-3xl lg:text-4xl flex items-center text-neutral-950 dark:text-neutral-50 delay-150 transition-all ease-in bottom-0 lg:bottom-1">
            <FaGear className="absolute text-xs md:text-sm lg:text-base -left-4 lg:-left-5 animate-spin text-neutral-950 dark:text-neutral-50" />
            {title}
          </div>
        </div>
      </div>
    </DynamicLayout>
  );
}
