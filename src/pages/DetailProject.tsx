import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import DynamicLayout from "../components/layouts/DynamicLayout";
import ChipTag from "../components/misc/ChipTag";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { DETAIL } from "../misc/Value";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import SwiperButton from "../components/misc/SwiperButton";
import PopupImage from "../components/modals/PopupImage";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

export default function DetailProject() {
  const { name } = useParams<{ name: string }>();

  const [projectData, setProjectData] = useState<any>(null); // Inisialisasi sebagai null
  const [project, setProject] = useState<any>(null);
  const [currIndex, setCurrIndex] = useState(0);

  const [popup, setPopup] = useState<boolean>(false);

  useEffect(() => {
    // Mengambil data dari DETAIL berdasarkan name
    const data = DETAIL[name as keyof typeof DETAIL]; // Ambil data yang sesuai dengan URL
    setProjectData(data);
    if (data) {
      setProject(data.data[0]); // Set project pertama
    }
  }, [name]);

  // Fungsi untuk menangani perubahan slide
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex; // Menggunakan activeIndex
    setProject(projectData?.data[currentIndex]);
    console.log(projectData?.data[currentIndex]);

    setCurrIndex(currentIndex);
  };

  const handleZoom = () => {
    setPopup((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-neutral-950 delay-150 transition-colors ease-in min-h-screen">
      <Header section={"project"} />

      {projectData && (
        <>
          <PopupImage
            image={projectData.image[currIndex]}
            popup={popup}
            handleZoom={handleZoom}
          />
          <DynamicLayout border={false}>
            <div className="lg:h-screen lg:flex lg:items-center lg:pt-0 lg:my-0 pt-28 my-4 sm:pb-0 pb-8">
              <div className="w-full">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 w-full items-center dark:text-neutral-50 delay-100 transition-colors">
                  <div className="lg:col-span-6 xl:col-span-5 w-full gap-4 flex flex-col break-words relative">
                    <Link to={"/project"}>
                      <div className="flex gap-2 items-center hover:gap-4 delay-100 transition-all ease-linear cursor-pointer">
                        <BsArrowLeftCircle className="text-xl" />
                        Back
                      </div>
                    </Link>
                    <p className="text-stroke text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-neutral-950 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] dark:text-neutral-50">
                      0{currIndex}
                    </p>
                    <div className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                      {project.title}
                    </div>
                    <div className="text-[0.8rem] lg:text-xs tracking-wider ">
                      {project.description}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {projectData.tag.map((tag: string, idx: number) => (
                        <ChipTag tag={tag} key={idx} />
                      ))}
                    </div>
                    <div className="w-full h-[1px] bg-neutral-400"></div>
                    {projectData.status === "private" ? (
                      <p className="text-red-500 font-bold">
                        Redistricted Project
                      </p>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          {projectData.github !== "" && (
                            <a href={projectData.github} target="_blank">
                              <FaGithub className="md:w-8 md:h-8 w-6 h-6" />
                            </a>
                          )}
                          {projectData.live != "" && (
                            <a href={projectData.live} target="_blank">
                              <MdOutlineWebAsset className="md:w-9 md:h-9 w-7 h-7" />
                            </a>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="lg:col-span-6 xl:col-span-7 min-w-full h-fit justify-center items-center relative w-full">
                    <Swiper
                      className="h-full w-full"
                      spaceBetween={30}
                      onSlideChange={handleSlideChange} // onSlideChange di sini
                      modules={[Pagination]}
                    >
                      <div className="relative">
                        {projectData.image.map((image: string, idx: number) => (
                          <SwiperSlide key={idx}>
                            <img
                              src={image}
                              className="w-full h-fit object-contain  aspect-[16/9]"
                            />
                            <div className="absolute bottom-4 z-50 left-1/2 bg-white/50 px-3 rounded-lg flex items-center gap-4 transform -translate-x-1/2 text-xs text-neutral-950">
                              <FaArrowLeftLong />
                              Swipe
                              <FaArrowRightLong />
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                      <div className="flex justify-between mt-3">
                        <button
                          className="text-sm md:text-base h-fit px-4 border rounded-md flex items-center gap-1 text-neutral-950 dark:text-neutral-50 py-0.5 border-neutral-950 dark:border-neutral-50 hover:bg-neutral-500 hover:text-neutral-50 delay-75 transition-colors"
                          onClick={handleZoom}
                        >
                          Zoom <GoArrowUpRight className="text-md" />
                        </button>
                        <SwiperButton />
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </DynamicLayout>
        </>
      )}

      <Footer />
    </div>
  );
}
