import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          I engage in coding new pages and website elements with utmost dedication, ensuring their seamless integration into projects. I meticulously test these new website elements across multiple search engines and devices, leaving no room for discrepancies, and ensuring a flawless user experience across various platforms. By upholding the highest standards of quality and functionality
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
          I meticulously handle databases, implementing robust back-end logic and well-designed APIs to facilitate seamless data exchange between the front-end and back-end. My expertise in crafting scalable architecture ensures the website's adaptability to evolving requirements and growth. Additionally, I manage and maintain servers, prioritizing efficiency and security to deliver a seamless user experience.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box dis"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX Design</h2>
          <p>
          I create user personas with comprehensive demographic data, preferences, habits, and connections to trends. Understanding the target audience. My goal is to develop sleek, modern designs that offer personalized recommendations, easy navigation, and social integration for meaningful interactions. Staying updated with the latest trends ensures the interfaces I craft are relevant and appealing to users..
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
