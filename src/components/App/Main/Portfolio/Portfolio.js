import PortfolioImage from "./PortfolioImage/PortfolioImage";

function Portfolio(props) {
  return (
    <section className="portfolio" id={"portfolio"}>
      <h2 className="portfolio__title">Portfolio</h2>
      <ul className="portfolio__items">
        {props.portfolioImages.map((portfolioImage, index) => {
          return (
            <PortfolioImage
              portfolioImage={portfolioImage}
              onImageClick={props.onImageClick}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Portfolio;
