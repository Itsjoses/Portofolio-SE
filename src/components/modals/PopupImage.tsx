import { RxCross2 } from "react-icons/rx";

export default function PopupImage({
  image,
  popup,
  handleZoom,
}: {
  image: string;
  popup: boolean;
  handleZoom: () => void;
}) {
  return (
    <div
      className={`z-50 bg-black/80 ${
        popup ? "fixed" : "hidden"
      } top-0 left-0 min-w-screen min-h-screen flex justify-center items-center`}
    >
      <div
        className="absolute top-6 right-6 sm:top-6 sm:right-12 lg:top-12 lg:right-24 text-4xl text-neutral-50 cursor-pointer"
        onClick={handleZoom}
      >
        <RxCross2 />
      </div>
      <div className="m-auto w-2/3 h-2/3  flex items-center ">
        <img src={image} alt="" className="object-contain" />
      </div>
    </div>
  );
}
