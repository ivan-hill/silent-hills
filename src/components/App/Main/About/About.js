import rectangle125 from "../../../../images/rectangle125.png";

function About() {
  return (
    <section className="about" id={"about"}>
      <h2 className="about__title">About Us</h2>
      <div className="about__content">
        <img className="about__image" src={rectangle125} alt="About Us"></img>
        <div className="about__description">
          <h3 className="about__description-title">Personalize Headstone</h3>
          <p className="about__text">
            Silent Hill has been committed to providing the finest-quality
            custom grave markers so families can honor and remember their loved
            ones in their own special ways.
          </p>
          <h4 className="about__list-title">
            Our talented and knowledgeable laser engravers create beautiful
            grave headstones that reflect families’ wishes and show how
            important their loved ones really were to them.
          </h4>
          <ul className="about__list">
            <li className="about__list-item">Measurements</li>
            <li className="about__list-item">Selection of Materials</li>
            <li className="about__list-item">Artwork</li>
            <li className="about__list-item">Engraving</li>
            <li className="about__list-item">Tombstone Installation</li>
            <li className="about__list-item">3D Modeling</li>
            <li className="about__list-item">Manufacturing</li>
            <li className="about__list-item">Storage</li>
            <li className="about__list-item">Delivery</li>
            <li className="about__list-item">
              As well as the final landscaping of the site, including the laying
              paving, installation of fencing, benches, tables and other
              accessories
            </li>
          </ul>
          <p className="about__text">
            The workshop fulfills orders of any complexity from standard
            monuments to elegant figurative compositions with a cross, an angel
            or to the individual sketch of the customer. In our arsenal of over
            10 species natural granite and marble, modern equipment and in-house
            production
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
