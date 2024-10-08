import { useEffect, useRef } from "react";
import DynamicLayout from "../components/layouts/DynamicLayout";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { motion } from "framer-motion";
// @ts-ignore
import baffle from "baffle";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const b = baffle(textRef.current);
      b.set({
        characters: " █▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
        speed: 100,
      });
      b.start();
      b.reveal(5000, 900); // Reveal after 2 seconds
    }
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950 delay-150 transition-colors ease-in min-h-screen">
      <Header section={"home"} />
      <DynamicLayout border={false}>
        <motion.div
          className="h-screen  flex items-center relative z-20 "
          initial={{ y: "3vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          exit={{ y: "3vw", opacity: 0 }}
        >
          <div className="flex flex-col-reverse justify-center lg:grid lg:grid-cols-12 w-full items-center dark:text-neutral-50 delay-100 transition-colors lg:gap-12 xl:gap-0 gap-14 ">
            <div className="lg:col-span-7 xl:col-span-8 w-full gap-3 md:gap-2 flex flex-col break-words px-6 sm:px-28 lg:px-0 z-20 relative items-start sm:items-center lg:items-start">
              <div className="font-semibold tracking-wide  ">
                Hi Brow <span className="animate-pulse text-lg">🖐</span>, I'm
              </div>
              <div
                className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide"
                ref={textRef}
              >
                JOSE SUSANTO
              </div>
              <div className="font-bold text-lg md:text-2xl lg:text-3xl tracking-wide my-2 sm:my-3 md:my-5">
                <span>I'm </span>
                <span className="text-blue-500">
                  <Typewriter
                    loop
                    words={[
                      "Network Administrator",
                      "DevOps",
                      "Fullstack Developer",
                      "Mobile Developer",
                    ]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={70}
                    delaySpeed={1000}
                  />
                </span>
              </div>
              <div className="tracking-widest xl:text-base sm:text-xs text-[.6rem]">
                Hi, I'm a DevOps engineer, networking administrator, and
                full-stack developer with a passion for coding and
                infrastructure. A graduate of Binus University, I love tackling
                challenges and building efficient, innovative solutions through
                technology.
              </div>
              <a
                href="https://www.linkedin.com/in/jose-susanto-a535a723b/"
                target="_blank"
              >
                <button className="px-10 text-sm sm:text-base mt-5 sm:w-fit rounded-full py-2 sm:py-2.5 w-full sm:px-24 bg-neutral-950 text-neutral-50 dark:text-neutral-950 dark:bg-neutral-50  delay-100 transition-colors">
                  My Resume
                </button>
              </a>
            </div>
            <div className="hidden lg:col-span-5 xl:col-span-4 justify-center sm:flex lg:py-0">
              <img
                src="/profile.jpg"
                alt=""
                className="sm:w-[200px] md:w-[250px] lg:w-[500px] h-auto z-20 relative "
              />
            </div>
          </div>
        </motion.div>
      </DynamicLayout>
      <Footer />
    </div>
  );
}
