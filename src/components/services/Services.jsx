import WeedModelContainer from "./weed/WeedModelContainer";
import MapModelContainer from "./map/MapModelContainer";
import Counter from "./Counter";
import ChocolateModelContainer from "./chocolate/ChocolateModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Fire flavoure cannabis",
    description: "precisely selected quality strains",
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Edibles",
    description: "tasty and potent dark chocolate couch lockers",
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Dead-drop service",
    description: "optionally, get your products delivered anonymously",
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          We offer 
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.description}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          {/* <Counter from={0} to={104} text="" /> */}
          <Counter from={0} to={20} text="Years experience" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <WeedModelContainer />
        ) : currentServiceId === 2 ? (
          <ChocolateModelContainer />
        ) : (
          <MapModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
