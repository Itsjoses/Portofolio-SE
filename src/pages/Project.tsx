import Header from "../components/layouts/Header";
import DynamicLayout from "../components/layouts/DynamicLayout";
import Footer from "../components/layouts/Footer";
import TitleSection from "../components/texts/TitleSection";
import ProjectCard from "../components/cards/ProjectCard";
import { PROJECT } from "../misc/Value";
import { motion } from "framer-motion";
export default function Project() {
  const projectData: any = PROJECT;
  console.log(projectData);

  return (
    <div className="bg-white dark:bg-neutral-950 delay-150 transition-colors ease-in min-h-screen">
      <Header section="project" />
      <TitleSection title="Projects" />
      <DynamicLayout border={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-20 gap-x-6 mx-4 my-12 z-20 relative">
          {projectData.data.map((data: any) => (
            <motion.div
              initial={{ y: "3vw", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }} // Tambahkan sekali lagi untuk memastikan
              transition={{ duration: 0.6 }}
              exit={{ y: "3vw", opacity: 0 }}
            >
              <ProjectCard projectData={data} />
            </motion.div>
          ))}
        </div>
      </DynamicLayout>
      <Footer />
    </div>
  );
}
