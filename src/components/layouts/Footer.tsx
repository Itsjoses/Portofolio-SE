import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="fixed bottom-0 right-[5%] lg:right-[7%] xl:right-[10%] z-50">
      <div className="flex flex-col justify-center items-center gap-1.5 sm:gap-2.5 dark:text-neutral-50">
        <a href={"https://github.com/Itsjoses"} target="_blank">
          <FaGithubSquare className="text-2xl sm:text-3xl hover:mb-2 transition-all duration-300 cursor-pointer" />
        </a>

        <a
          href={"https://www.linkedin.com/in/jose-susanto-a535a723b/"}
          target="_blank"
        >
          <FaLinkedin className="text-2xl sm:text-3xl hover:mb-2 transition-all duration-300 cursor-pointer" />
        </a>
        <a href={"https://www.instagram.com/itssejo.s/"} target="_blank">
          <FaInstagramSquare className="text-2xl sm:text-3xl hover:mb-2 transition-all duration-300 cursor-pointer" />
        </a>
        <div className="w-[1px] h-12 sm:h-24 bg-neutral-950 dark:bg-neutral-50"></div>
      </div>
    </div>
  );
}
