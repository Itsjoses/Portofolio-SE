interface DynamicLayoutProps {
  border: boolean;
  children: React.ReactNode;
}
export default function DynamicLayout({
  border,
  children,
}: DynamicLayoutProps) {
  return (
    <div
      className={`max-w-screen ${
        border ? `border-b border-neutral-400` : ``
      } flex`}
    >
      <div className="w-full px-4 sm:px-0 flex justify-center">
        <div className="w-full sm:w-[640px] md:w-[760px] lg:w-[800px] xl:w-[1000px]  transition-all duration-500">
          {children}
        </div>
      </div>
    </div>
  );
}
