import rectangle from "../../../../images/rectangle.png";
import rectangle1 from "../../../../images/rectangle1.png";
import rectangle2 from "../../../../images/rectangle2.png";
import rectangle3 from "../../../../images/rectangle3.png";
import rectangle4 from "../../../../images/rectangle4.png";
import rectangle5 from "../../../../images/rectangle5.png";

function Services(props) {
  function handleOpenFeedback() {
    props.onOpenFeedback();
  }
  return (
    <section className="services" id={"services"}>
      <h2 className="services__title">Monuments</h2>
      <p className="services__subtitle">We can help you with any challenge</p>
      <ul className="services__catalog">
        <li className="services__card">
          <img className="services__image" src={rectangle} alt="Vertical"></img>
          <h3 className="services__card-title">Vertical</h3>
          <p className="services__desc">
            the classic version of grave headstones
          </p>
          <p className="services__price-text">
            From <span className="service__price">$850</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Order
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle1}
            alt="Horizontal"
          ></img>
          <h3 className="services__card-title">Horizontal</h3>
          <p className="services__desc">
            Most often set for two, three, or more headstones
          </p>
          <p className="services__price-text">
            From <span className="service__price">$850</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Order
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle2}
            alt="With cross"
          ></img>
          <h3 className="services__card-title">With cross</h3>
          <p className="services__desc">
            Different kinds of crosses are used, which have different meanings
          </p>
          <p className="services__price-text">
            From <span className="service__price">$850</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Order
          </button>
        </li>
        <li className="services__card">
          <img className="services__image" src={rectangle3} alt="Double"></img>
          <h3 className="services__card-title">Double</h3>
          <p className="services__desc">
            Double monument to the tomb - for paired and family burials
          </p>
          <p className="services__price-text">
            From <span className="service__price">$1350</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Order
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle4}
            alt="Combination"
          ></img>
          <h3 className="services__card-title">Combination</h3>
          <p className="services__desc">Made of 2 or more kinds of stone</p>
          <p className="services__price-text">
            From <span className="service__price">$1850</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Order
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle5}
            alt="Vertical"
          ></img>
          <h3 className="services__card-title">Heart-shaped</h3>
          <p className="services__desc">
            A beautiful expression of love and grief
          </p>
          <p className="services__price-text">
            From <span className="service__price">$850</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Order
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Services;
