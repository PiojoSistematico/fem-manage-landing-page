import { Button } from "react-aria-components";
import data from "../assets/data/cards.json";
import Card from "./Card";
import { useState } from "react";

const CustomCarrousel: React.FunctionComponent = () => {
  const [index, setIndex] = useState(0);

  return (
    <section
      title="testimonials"
      className="flex flex-col gap-16 items-center p-8"
    >
      <h2 className="text-2xl text-primary-2 font-bold">What they’ve said</h2>
      <div>
        <Card info={data[index]}></Card>
        {/* {data.map((elem, index) => (
          <Card key={index} info={elem}></Card>
        ))} */}
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Button
          onPress={() => setIndex(0)}
          className={`${
            index == 0 ? "bg-primary-1" : "bg-neutral-5"
          } border-solid border-primary-1 border rounded-full w-4 h-4 outline-none`}
        ></Button>
        <Button
          onPress={() => setIndex(1)}
          className={`${
            index == 1 ? "bg-primary-1" : "bg-neutral-5"
          } border-solid border-primary-1 border rounded-full w-4 h-4 outline-none`}
        ></Button>
        <Button
          onPress={() => setIndex(2)}
          className={`${
            index == 2 ? "bg-primary-1" : "bg-neutral-5"
          } border-solid border-primary-1 border rounded-full w-4 h-4 outline-none`}
        ></Button>
        <Button
          onPress={() => setIndex(3)}
          className={`${
            index == 3 ? "bg-primary-1" : "bg-neutral-5"
          } border-solid border-primary-1 border rounded-full w-4 h-4 outline-none`}
        ></Button>
      </div>

      <Button className="bg-primary-1 text-neutral-4 rounded-3xl px-8 py-2">
        Get Started
      </Button>
    </section>
  );
};

export default CustomCarrousel;
