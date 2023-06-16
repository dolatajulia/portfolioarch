import styles from "./Styling/ProjectCard.module.scss";

const ProjectCard = (props) => {
    return (
        <div className={styles.container}>
            <p>{props.no}</p>
            <h1 className={styles.title}>{props.title}</h1>
        </div>
    )
}

export default ProjectCard;