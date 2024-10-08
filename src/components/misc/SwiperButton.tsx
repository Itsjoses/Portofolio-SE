import { useSwiper } from "swiper/react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
export default function SwiperButton() {
  const swiper = useSwiper();

  return (
    <div className="hidden md:flex justify-end gap-3 text-neutral-950 dark:text-neutral-50">
      <button
        className="p-3 border border-neutral-950 dark:border-neutral-50 hover:bg-neutral-500  hover:text-neutral-50"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>
      <button
        className="p-3 border border-neutral-950 dark:border-neutral-50 hover:bg-neutral-500 hover:text-neutral-50"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
