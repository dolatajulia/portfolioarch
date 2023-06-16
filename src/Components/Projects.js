import ProjectCard from "./ProjectCard";
import styles from "./Styling/Projects.module.scss";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>explore my projects</h1>
      <div onClick={() => navigate("childrenshouse")}>
        <ProjectCard no={"01."} title={`children's house`} />
      </div>
      <div onClick={() => navigate("socialhousing")}>
        <ProjectCard no={"02."} title={`social housing in Milan`} />
      </div>
      <div onClick={() => navigate("climbingcenter")}>
        <ProjectCard no={"03."} title={`climbing center`} />
      </div>
      <div onClick={() => navigate("coliving")}>
        <ProjectCard no={"04."} title={`co-living for the elderly`} />
      </div>
      <div onClick={() => navigate("rakospatak")}>
        <ProjectCard no={"05."} title={`rakos patak`} />
      </div>
    </div>
  );
};
export default Projects;
