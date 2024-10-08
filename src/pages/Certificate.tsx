import Header from "../components/layouts/Header";
import Meteor from "../components/misc/Meteor";
import Footer from "../components/layouts/Footer";
import DynamicLayout from "../components/layouts/DynamicLayout";
import TitleSection from "../components/texts/TitleSection";
import { CERTIFICATES } from "../misc/Value";
import { motion } from "framer-motion";

export default function Certificate() {
  return (
    <div className="bg-white dark:bg-neutral-950 delay-150 transition-colors ease-in min-h-screen">
      <Header section={"certificate"} />
      <TitleSection title="Certificates" />
      <DynamicLayout border={false}>
        <div className="flex flex-col sm:grid gap-8 sm:grid-cols-2 relative z-20 pb-10">
          {CERTIFICATES.map((certificate, index) => (
            <motion.img
              className="shadow-lg"
              initial={{ y: "3vw", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }} // Tambahkan sekali lagi untuk memastikan
              key={index}
              transition={{ duration: 0.6 }}
              src={`${certificate}.png`}
            />
          ))}
        </div>
      </DynamicLayout>
      <Meteor />
      <Footer />
    </div>
  );
}
