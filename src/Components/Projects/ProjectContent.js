import styles from "../Styling/ProjectContent.module.scss";

const ProjectContent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.baner}></div>
      <h1>{props.title}</h1>
      <img src={props.banerimg} alt="baner picture" />
    </div>
  );
};

export default ProjectContent;
