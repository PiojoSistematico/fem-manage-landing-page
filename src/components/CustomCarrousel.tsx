import { Button } from "react-aria-components";
import data from "../assets/data/cards.json";
import Card from "./Card";
import { useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./Carrousel";
import Autoplay from "embla-carousel-autoplay";

const CustomCarrousel: React.FunctionComponent = () => {
  const [index, setIndex] = useState(0);

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section
      title="testimonials"
      className="flex flex-col gap-16 items-center p-8"
    >
      <h2 className="text-2xl text-primary-2 font-bold">What they’ve said</h2>
      <div className="md:hidden">
        <Card info={data[index]}></Card>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 md:hidden">
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

      <Carousel
        opts={{
          align: "start",
          loop: true,
          active: true,
          direction: "ltr",
        }}
        plugins={[plugin.current]}
        className="hidden md:block"
      >
        <CarouselContent className="h-[500px] lg:h-[400px] items-center">
          {data.map((elem) => (
            <CarouselItem className="basis-1/3">
              <Card info={elem}></Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Button className="bg-primary-1 text-neutral-4 rounded-3xl px-8 py-2 hover:opacity-80 focus-visible:opacity-80">
        Get Started
      </Button>
    </section>
  );
};

export default CustomCarrousel;
