import data from "../assets/data/cards.json";
import Card from "./Card";

const Carrousel: React.FunctionComponent = () => {
  return (
    <section title="testimonials">
      <h2>What they’ve said</h2>
      <div>
        {data.map((elem, index) => (
          <Card key={index} info={elem}></Card>
        ))}
      </div>
    </section>
  );
};

export default Carrousel;
