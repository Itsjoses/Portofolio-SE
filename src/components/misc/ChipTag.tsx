export default function ChipTag({ tag }: { tag: string }) {
  return (
    <div className="flex items-center gap-1 bg-blue-300 w-fit h-4 px-2 py-2 lg:px-3 lg:py-2.5 rounded-xl text-blue-700 font-semibold justify-center">
      <div className="text-[0.6rem] lg:text-[0.7rem] h-full w-full items-center flex self-center">
        {tag}
      </div>
    </div>
  );
}
