import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import DynamicLayout from "./DynamicLayout";
import { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { PiCertificateBold } from "react-icons/pi";
import { motion } from "framer-motion";
export default function Header({ section }: { section: string }) {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true); // Menyimpan apakah header terlihat atau tidak
  const [lastScrollY, setLastScrollY] = useState(0); // Menyimpan posisi scroll terakhir

  const changeThemeHandle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("test");
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640); // Deteksi awal
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // toggle state antara true/false
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Jika scroll ke bawah dan lebih dari 50px, sembunyikan header
        setIsVisible(false);
      } else {
        // Jika scroll ke atas, tampilkan header
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY); // Update posisi scroll terakhir
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Update status saat resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Bersihkan event listener saat komponen unmount
    };
  }, []);

  return (
    <div
      className={`fixed w-full bg-white/85 z-40 dark:bg-neutral-950/85 delay-150 transition-all ease-in ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-all ${isOpen && isSmallScreen ? "translate-y-0" : ""}`} // kasih border-b kalau tidak dipaling atas navbarnya
    >
      <div className="sm:border-0 border-b border-neutral-400 ">
        <DynamicLayout border={false}>
          <div className="flex justify-between items-center dark:text-neutral-50 sm:py-0 py-2 ">
            <div className="text-4xl font-bold delay-200 transition-all">
              J.
            </div>
            <div className="gap-4 items-center h-full flex">
              <div className="gap-4 sm:flex hidden">
                <Link to={"/"}>
                  <div className=" h-full  py-6 font-medium text-sm delay-200 transition-all">
                    Home
                  </div>
                </Link>
                <Link to={"/project"}>
                  <div className=" h-full  py-6 font-medium text-sm delay-200 transition-all">
                    Project
                  </div>
                </Link>
                <Link to={"/certificate"}>
                  <div className=" h-full  py-6 font-medium text-sm delay-200 transition-all">
                    Certificate
                  </div>
                </Link>
              </div>

              <div className=" h-full py-6 font-medium sm:flex hidden">
                <div className="w-[1px] h-5 bg-neutral-950 dark:bg-neutral-50 text-neutral-50 delay-200 transition-all "></div>
              </div>
              <div className="flex gap-4 items-center ">
                <button
                  className="sun p-1.5 md:p-2 rounded-xl border border-neutral-950 dark:border-neutral-50 active:scale-100 duration-200 hover:bg-neutral-100 dark:bg-neutral-950 dark:hover:bg-neutral-900 dark:shadow-[inset_0_0_1px_0_white,0_0_1px_0_white] transition-all outline-none"
                  aria-label="toggletheme"
                  style={{ opacity: 1, transform: "none" }}
                  onClick={changeThemeHandle}
                >
                  {theme === "dark" ? (
                    <svg
                      className="transition-transform duration-1000 ease-in-out transform rotate-0 opacity-100 h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="transition-transform duration-1000 ease-in-out transform rotate-0 opacity-100 h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
                    </svg>
                  )}
                </button>
                <button onClick={handleToggle} className="relative sm:hidden">
                  <motion.div
                    layout
                    animate={{ opacity: 1 }}
                    className="transition-transform duration-300"
                  >
                    {isOpen ? (
                      <RxCross1 className="text-2xl transition-transform duration-300 rotate-180" />
                    ) : (
                      <RxHamburgerMenu className="text-2xl transition-transform duration-300 rotate-0" />
                    )}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </DynamicLayout>
      </div>

      <div
        className={`bg-white z-40 dark:bg-neutral-950 delay-150 transition-all ease-in w-full h-screen  sm:hidden sm:opacity-0 opacity-100 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <DynamicLayout border={false}>
          <div className="flex flex-col gap-2 mt-4  dark:text-neutral-50 delay-150 transition-all ease-in">
            <Link to={"/"}>
              <div
                className={`py-1.5 px-2 rounded-md hover:bg-neutral-200 hover:dark:bg-neutral-700 delay-150 transition-all ease-in text-sm flex gap-1.5 items-center cursor-pointer ${
                  section === "home"
                    ? "bg-neutral-200 dark:bg-neutral-700 "
                    : ""
                } font-medium`}
              >
                <AiOutlineHome className="text-xl w-6" /> Home
              </div>
            </Link>
            <Link to={"/project"}>
              <div
                className={`py-1.5 px-2 rounded-md hover:bg-neutral-200 hover:dark:bg-neutral-700 delay-150 transition-all ease-in text-sm flex gap-1.5 items-center cursor-pointer ${
                  section === "project"
                    ? "bg-neutral-200 dark:bg-neutral-700"
                    : ""
                } font-medium`}
              >
                <PiProjectorScreenChartBold className="text-xl w-6" />
                Project
              </div>
            </Link>
            <Link to={"/certificate"}>
              <div
                className={`py-1.5 px-2 rounded-md hover:bg-neutral-200 hover:dark:bg-neutral-700 delay-150 transition-all ease-in text-sm flex gap-1.5 items-center cursor-pointer ${
                  section === "certificate"
                    ? "bg-neutral-200 dark:bg-neutral-700"
                    : ""
                } font-medium`}
              >
                <PiCertificateBold className="text-xl w-6" />
                Certificate
              </div>
            </Link>
          </div>
        </DynamicLayout>
      </div>
    </div>
  );
}
