import bless from "../../../../images/bless.png";
import graveyard from "../../../../images/graveyard.png";
import location from "../../../../images/location.png";

function Competence() {
  return (
    <section className="competence">
      <ul className="competence__content">
        <li className="competence__card">
          <img
            className="competence__icon"
            src={bless}
            alt="Full range of services"
          />
          <div className="competence__desc">
            <h3 className="competence__title">Full range of services</h3>
            <p className="compentence__text">
              We take care of all the delivery, installation, and landscaping
            </p>
          </div>
        </li>
        <li className="competence__card">
          <img
            className="competence__icon"
            src={graveyard}
            alt="Free design layout"
          />
          <div className="competence__desc">
            <h3 className="competence__title">Free design layout</h3>
            <p className="compentence__text">
              We create a layout of the monument with the location of the
              portrait on the stone, select fonts, inscriptions, design
            </p>
          </div>
        </li>
        <li className="competence__card">
          <img
            className="competence__icon"
            src={location}
            alt="Multiple locations"
          />
          <div className="competence__desc">
            <h3 className="competence__title">Multipe locations</h3>
            <p className="compentence__text">
              We service all local and regional locations
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Competence;
