"use client";
// import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-100">
    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 bg-gray-800/80 backdrop-blur-sm shadow-xl z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-heading"
        >
          Azka.dev
        </motion.div>
          {/* <div className="flex space-x-6">
            {["About", "Experience", "Education", "Portfolio"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
              >
                {item}
              </Link>
            ))}
          </div> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center pt-20 pb-10"
        style={{ scrollMarginTop: "6rem" }}
      >
        <motion.div
          className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-heading tracking-tight">
              Creative Full-Stack Developer
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-sans">
              Building digital experiences that combine innovation with elegant
              design. Passionate about creating solutions that make an impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition-colors duration-300 font-heading"
            >
              Explore My Work
            </motion.button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-blue-400/30 overflow-hidden"
              whileHover={{ rotate: 2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/pp.jpeg"
                alt="Azkal Alghani"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-blue-400/10 backdrop-blur-sm" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mx-24" />

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center font-heading">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed font-sans">
            <p>
              My name is Azkal Alghani, and I&apos;m a passionate developer with a focus on 
              creating meaningful digital experiences. Currently pursuing my degree in 
              Informatics Engineering, I enjoy working on cutting-edge projects that 
              bridge technology and creativity.
            </p>
            <p>
              My expertise spans modern web technologies, including HTML, CSS, 
              JavaScript, React.js, and Next.js, along with a strong understanding of 
              UI/UX design principles and cloud-based solutions.
            </p>
            <p>
              Beyond technical skills, I excel in problem-solving, teamwork, and 
              adaptability. When I&apos;m not coding, you&apos;ll find me exploring new 
              design trends or contributing to open-source projects.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="py-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center font-heading">
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/30 hover:border-purple-400/30 transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-2 font-heading">
                Informatics Engineering
              </h3>
              <p className="text-gray-400 mb-4 font-sans">
                University of Muhammadiyah Surakarta • 2022-Present
              </p>
              <p className="text-gray-300 font-sans">
                Focused on software architecture, machine learning fundamentals,
                and human-computer interaction.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 bg-gray-800/30 backdrop-blur-lg"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center font-heading">
            Experience
          </h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/30 hover:border-blue-400/30 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2 font-heading">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 mb-4 font-sans">{exp.subtitle}</p>
                    <p className="text-gray-300 mb-4 font-sans">{exp.description}</p>
                    {exp.certification && (
                      <a
                        href={exp.certification}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors font-sans"
                      >
                        View Certification →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-20 bg-gray-800/30 backdrop-blur-lg"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center font-heading">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-700/30 hover:border-blue-400/30 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative h-64 bg-gray-700/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gray-900/50">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-sans">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-sm transition-colors font-sans"
                    >
                      View
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {["GitHub", "LinkedIn", "Email"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-sans"
                whileHover={{ scale: 1.1 }}
              >
                {platform}
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 font-sans">
            © 2024 Azkal Alghani. Crafted with passion and Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}

const experiences = [
  {
    title: "Content Creator",
    subtitle: "International Cultural Competition • 2024",
    description:
      "Spearheaded social media strategy and visual design, increasing engagement by 150%. (@icac.ums)",
    image: "/images/icac.jpg",
    certification: "/certs/icac.png",
  },
  {
    title: "Content Creator",
    subtitle: "Kontes Robot Indonesia • 2024",
    description:
      "Created contents for social media, increasing engagement by 200%. (@kri.ums)",
    image: "/images/kri.jpeg",
    certification: "/certs/kri.pdf",
  },
  {
    title: "Liaison Officer",
    subtitle: "International Student Summit • 2024",
    description:
      " Managed communication between international delegates and local partners.",
    image: "/images/iss2.jpg",
    certification: "/certs/iss.pdf",
  },
];

const projects = [
  {
    title: "Restaurant Website",
    description:
      "Modern restaurant website with menu management and reservation system",
    image: "/images/restaurant.png",
    demo: "https://my-restaurant-liart.vercel.app/",
  },
  {
    title: "SustainLeaf UI Design",
    description:
      "Simple and Minimalist website for a fictional eco-friendly company",
    image: "/images/sustainleaf.png",
    demo: "https://www.figma.com/proto/b6jMdVgqRHtSOE2EakHbhU/SustainaLeaf?node-id=78-1135&t=lklCr19yFc6XRmI4-1",
  },
  {
    title: "Calculator UI Design",
    description:
      "Modern calculator design with colorful colors and simple layout",
    image: "/images/calc.png",
    demo: "https://www.figma.com/proto/7ydRNZDDqhN5SXEjyryczY/calour-prof?page-id=0%3A1&node-id=1-4&p=f&viewport=1102%2C437%2C0.93&t=c7wnRlleTiPnfH4w-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    title: "Weather App",
    description:
      "Weather app that displays current weather and forecast for the next 7 days",
    image: "/images/weather.png",
    demo: "https://github.com/ArkanPangestu/WeatherAPP.git",
  },
];
