import React,{useState, useEffect} from "react";
import { motion } from "framer-motion"; // For animations
import Service1 from "../assets/service1.jpg"; // Adjust the path as needed for your project
import Service2 from "../assets/service2.jpg"; // Replace with the second image
import Service3 from "../assets/service3.jpg"; // Replace with the second image
import Service4 from "../assets/service4.jpg"; // Replace with the second image
import Service5 from "../assets/service5.jpg"; // Replace with the second image




const ImplantDentistrySection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 transition-all delay-9000"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Content animates from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Added delay for content section
          className="lg:w-1/2 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Implant Dentistry
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            Dental implants are easily the most popular and also the ideal solution for
            replacing your missing tooth/teeth. They have definitely changed the course
            of dentistry in the last quarter of a century or so.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            A dental implant is basically a titanium post which is surgically inserted
            into the jawbone beneath the gum line to work as a tooth root. Post insertion,
            an implantologist will attach a crown on top of the implant to ensure the
            appearance of a natural tooth.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            Tooth Implants not only look and feel like your natural teeth but also
            function like natural teeth.
          </p>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2">
            <span>📞</span> Contact us
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Image animates from right
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Added delay for image section
          className="relative lg:w-1/2 flex justify-center"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: "6rem",
              height: "6rem",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
          <motion.div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: "4rem",
              height: "4rem",
              right: "15%",
              bottom: "15%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>

          {/* Image with higher z-index */}
          <img
            src={Service2}
            alt="Dental service"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};








const CavityProtectionSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Delay the animations once the component is mounted
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true); // Trigger visibility after a delay
    }, 500); // 500ms delay before the animations start
    return () => clearTimeout(timeoutId); // Clean up the timeout if the component unmounts
  }, []);

  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Image section from left
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"
        >
          <img
            src={Service1} // Replace with the actual image path
            alt="Cavity Protection"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
          {/* Interactive Decorative Elements */}
          <motion.div
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: "6rem",
              height: "6rem",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
          <motion.div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: "4rem",
              height: "4rem",
              right: "15%",
              bottom: "15%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }} // Content section from right
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-left order-2 lg:order-1"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Cavity Protection
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            Dental cavities can be prevented with a combination of good oral hygiene and
            regular visits to the dentist. When too many oral bacteria take up residence
            in your mouth, the acids they secrete can eat through the enamel, leading to
            holes known as cavities or dental caries.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            The sooner you have a cavity filled, the better since untreated cavities can
            grow larger and eventually cause serious toothaches and infections. What’s
            even better than treating cavities is preventing them, which requires a
            combination of good at-home dental care, regular professional cleanings, and
            sometimes supplemental treatments like sealants and fluoride treatments.
          </p>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2">
            <span>📞</span> Contact us
          </button>
        </motion.div>
      </div>
    </section>
  );
};
const CosmeticDentistrySection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Delay the animations once the component is mounted
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true); // Trigger visibility after a delay
    }, 500); // 500ms delay before the animations start
    return () => clearTimeout(timeoutId); // Clean up the timeout if the component unmounts
  }, []);

  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Image section animates from left
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 order-1 lg:order-2 flex justify-center"
        >
          <img
            src={Service3} // Replace with the actual image path
            alt="Cosmetic Dentistry"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
          {/* Interactive Decorative Elements */}
          <motion.div
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: "6rem",
              height: "6rem",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
          <motion.div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: "4rem",
              height: "4rem",
              right: "15%",
              bottom: "15%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }} // Content section animates from right
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-left order-2 lg:order-1"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Cosmetic Dentistry
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            Tooth-colored fillings, or ‘white’ fillings, are known as ‘composite’
            fillings and are made from a putty-like resin-based material. These are
            lifelike and long-lasting. Currently, the most popular cosmetic dentistry
            procedure, these types of fillings are a great alternative to black or
            silver amalgam fillings.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            Made from a putty-like resin-based material, the filling can be molded to
            the exact shape of the tooth and set using a visible blue light. White
            fillings are made from a very durable composite material that is bonded to
            your teeth.
          </p>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2">
            <span>📞</span> Contact us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const TeethWhiteningSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }} // Content animates from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Added delay for content animation
          className="w-full lg:w-1/2 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Teeth Whitening
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            Teeth Whitening is a safe and effective way to quickly improve your smile, giving you a brighter, more
            radiant smile in as little as a few days. Whitening is the ideal way to refresh teeth
            that have been stained by smoking, coffee drinking, or certain foods over time.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            The enamel, which reflects the natural color of your tooth, can stain, or dentin, which is the inner
            surface of teeth, stains and yellows the teeth. The causes of tooth discoloration are 
            varied. Though many causes can be prevented, there are some which are not in control.
          </p>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2">
            <span>📞</span> Contact us
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Image animates with scale effect
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Added delay for image animation
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: "6rem",
              height: "6rem",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
          <motion.div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: "4rem",
              height: "4rem",
              right: "15%",
              bottom: "15%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>

          {/* Image with higher z-index */}
          <img
            src={Service4}
            alt="Teeth Whitening"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

const OrthodonticTreatmentSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }} // Content section animates from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Added delay for content section
          className="w-full lg:w-1/2 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            Orthodontic Treatment
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            An orthodontist is a dentist trained to diagnose, prevent, and treat teeth and jaw irregularities.
            They correct existing conditions and are trained to identify problems that may develop in the future.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            Orthodontists work with people of all ages, from children to adults. However, not everyone is born with straight teeth.
            If you have a bad bite or large spaces between your teeth, you may want to consult a dentist specializing in Cosmos Dental Clinic & Orthodontic Centre.
          </p>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2">
            <span>📞</span> Contact us
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Image section animates from right
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} // Added delay for image section
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={Service5} // Replace with the actual image path
            alt="Orthodontic Treatment"
            className="rounded-tl-[3rem] rounded-br-[3rem] shadow-lg w-4/5 sm:w-3/5 mx-auto relative z-10"
          />
          {/* Interactive Decorative Elements */}
          <motion.div
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: "6rem",
              height: "6rem",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
          <motion.div
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: "4rem",
              height: "4rem",
              right: "15%",
              bottom: "15%",
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};
const ServiceSection = () => {
  return (
    <div style={{marginLeft:60, marginRight:60}}>
      <CavityProtectionSection />
      <ImplantDentistrySection />
      <CosmeticDentistrySection />
      <TeethWhiteningSection />
      <OrthodonticTreatmentSection />
    </div>
  );
};

export default ServiceSection;