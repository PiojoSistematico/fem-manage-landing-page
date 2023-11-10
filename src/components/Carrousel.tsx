import { Button } from "react-aria-components";
import data from "../assets/data/cards.json";
import Card from "./Card";

const Carrousel: React.FunctionComponent = () => {
  return (
    <section
      title="testimonials"
      className="flex flex-col gap-8 items-center p-8"
    >
      <h2 className="text-2xl text-primary-2 font-bold">What they’ve said</h2>
      <div>
        {data.map((elem, index) => (
          <Card key={index} info={elem}></Card>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Button className="border-solid border-primary-1 border rounded-full w-4 h-4"></Button>
        <Button className="border-solid border-primary-1 border rounded-full w-4 h-4"></Button>
        <Button className="border-solid border-primary-1 border rounded-full w-4 h-4"></Button>
        <Button className="border-solid border-primary-1 border rounded-full w-4 h-4"></Button>
      </div>

      <Button className="bg-primary-1 text-neutral-4 rounded-3xl px-8 py-2">
        Get Started
      </Button>
    </section>
  );
};

export default Carrousel;
