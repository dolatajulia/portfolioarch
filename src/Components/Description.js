import styles from "./Styling/Description.module.scss";

const Description = () => {
  return (
    <div className={styles.container}>
      <h2>Hello, I'm Julia</h2>
      <h1>welcome to my<br/>portfolio</h1>
      <div className={styles.contact}>
        <h3>Contact me</h3>
        <p>Julia Dolata</p>
        <p>julia.rozalia.dolata@gmail.com</p>
        <p>+48 511 710 107</p>
      </div>
    </div>
  );
};

export default Description;
