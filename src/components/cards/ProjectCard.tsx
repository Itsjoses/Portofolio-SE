import { Link } from "react-router-dom";
import ChipTag from "../misc/ChipTag";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string; // Array of image paths
  tag: string[]; // Array of tags
}

export default function ProjectCard({
  projectData,
}: {
  projectData: ProjectData;
}) {
  return (
    <Link to={`/project/${projectData.id}`}>
      <div className="project grid-rows-12 rounded-xl hover:scale-105 delay-75 transition-transform ease-linear cursor-pointer">
        <div className="relative row-span-5 aspect-[16/9] rounded-md border shadow-md overflow-hidden bg-neutral-50 dark:bg-neutral-950 z-20">
          <div className="view-content bg-neutral-950/60 absolute left-0 w-full h-2/3 bottom-0">
            <p className="text-neutral-50 font-medium top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%] text-xs">
              {"View Project ->"}
            </p>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            {projectData.image ? (
              <img
                src={projectData.image}
                alt=""
                className="object-contain w-full h-full"
                loading="lazy"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="row-span-7 flex flex-col gap-2 py-1 dark:text-neutral-50 text-neutral-950 delay-150 ease-in transition-colors">
          <div className="text-sm md:text-base font-bold tracking-wider">
            {projectData.title}
          </div>
          <div className="tracking-wider text-[0.5rem] md:text-[0.6rem] font-medium">
            {projectData.description}
          </div>
          <div className="flex gap-2 flex-wrap">
            {projectData.tag.map((tag, index) => (
              <ChipTag key={index} tag={tag} /> // Added the key prop
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
