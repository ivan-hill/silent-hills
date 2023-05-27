import counseling from "../../../../images/counseling.png";
import cemetery from "../../../../images/cemetery.png";
import church from "../../../../images/church.png";
import angel from "../../../../images/angel.png";

function Working() {
  return (
    <section className="working" id={"working"}>
      <h1 className="working__title">How we do business</h1>
      <ul className="working__content">
        <li className="working__item">
          <img className="working__icon" src={counseling} alt="Request"></img>
          <h3 className="working__item-title">STEP 1</h3>
          <p className="working__item-subtitle">Send your request</p>
          <p className="working__item-desc">
            Specialist visit for measurements if necessary
          </p>
        </li>
        <li className="working__item">
          <img className="working__icon" src={cemetery} alt="Request"></img>
          <h3 className="working__item-title">STEP 2</h3>
          <p className="working__item-subtitle">Select a Monument</p>
          <p className="working__item-desc">Make a deposit</p>
        </li>
        <li className="working__item">
          <img className="working__icon" src={church} alt="Request"></img>
          <h3 className="working__item-title">STEP 3</h3>
          <p className="working__item-subtitle">Manufacture</p>
          <p className="working__item-desc">
            Installation within the agreed time frame
          </p>
        </li>
        <li className="working__item">
          <img className="working__icon" src={angel} alt="Request"></img>
          <h3 className="working__item-title">STEP 4</h3>
          <p className="working__item-subtitle">Product acceptance</p>
          <p className="working__item-desc">Finalize Payment</p>
        </li>
      </ul>
    </section>
  );
}

export default Working;
