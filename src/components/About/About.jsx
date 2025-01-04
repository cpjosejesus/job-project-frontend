import profileImg from "../../images/josejesus.png";

function About() {
  return (
    <section className="about">
      <img src={profileImg} alt="Jose Jesus" className="about__img" />
      <div className="about__info">
        <h1>Jose Jesus CP</h1>
        <h2>Desarrollador</h2>
        <p>
          Profesional en robótica y desarrollo de software con más de 5 años de
          experiencia en la dirección de proyectos académicos y profesionales,
          combinando habilidades en mecatrónica, inteligencia artificial y
          programación web. Lideré iniciativas destacadas como el diseño y
          simulación de un robot antropomórfico de bajo costo y la integración
          de sistemas robóticos avanzados. Con una sólida formación en enseñanza
          y mentoría, capacitando a estudiantes en algoritmos, programación
          competitiva y tecnologías emergentes. Busco aportar mi experiencia en
          desarrollo tecnológico, liderazgo académico y soluciones innovadoras
          para potenciar el crecimiento de la organización.
        </p>
      </div>
    </section>
  );
}

export default About;
