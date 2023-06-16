import { motion } from "framer-motion";

const animationSettings = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      delay: 0.1,
      duration: 1.2,
      when: "beforeChildren",
    },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut", duration: 1 },
    opacity: 0,
  },
};

const ProjectPage = (props) => {
  return (
    <motion.div
      variants={animationSettings}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
};
export default ProjectPage;
