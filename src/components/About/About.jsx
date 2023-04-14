import styles from "./About.module.css";

const About = () => {
  const name = "Juan";
  const age = 28;
  const occupation = "Corredor Inmobiliario";
  const bootcamp = "Soy Henry";
  const course = "Full Stack";
  const gratitude = "agradecido";
  const progress = "avanzando mucho en el Front-End";

  return (
    <div className={styles.container}>
     
      <h1 className={styles.title}>Carta de Presentación</h1>
      <p className={styles.text}>
        Estimados miembros de la Institución,
      </p>
      <p className={styles.text}>
        Mi nombre es {name} y tengo {age} años. Actualmente me desempeño como{" "}
        {occupation} y estoy estudiando en {bootcamp} el curso de {course}.
      </p>
      <p className={styles.text}>
        Me dirijo a ustedes para expresar mi profundo {gratitude} por esta
        oportunidad de aprendizaje. Desde que empecé el bootcamp, he estado{" "}
        {progress} y estoy emocionado por lo que me queda por aprender.
      </p>
      <p className={styles.text}>
        Espero poder seguir colaborando y aprendiendo en esta gran comunidad de
        programadores.
      </p>
      <p className={styles.text}>Muchas gracias por su tiempo y consideración.</p>
      <p className={styles.text}>Saludos cordiales,</p>
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export default About;
