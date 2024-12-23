import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Become a part of our family - get high on life and our shit!",
            1000,
            "Don't hesitate to reach out to us!",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={70}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      
    </motion.div>
  );
};

export default Speech;
