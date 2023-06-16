import Description from "./Description";
import Projects from "./Projects";

import styles from "./Styling/Homepage.module.scss";

import { motion } from "framer-motion";

const animationSettings = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.1, duration: 1 },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut", duration: 1 },
    opacity: 0,
  },
};

const Homepage = () => {
  return (
    <motion.div
      className={styles.container}
      variants={animationSettings}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles.left}>
        <Description />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
    </motion.div>
  );
};
export default Homepage;
