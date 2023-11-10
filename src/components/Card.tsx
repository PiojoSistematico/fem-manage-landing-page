type CardProps = {
  info: { name: string; surname: string; testimonial: string };
};

const Card: React.FunctionComponent<CardProps> = ({ info }) => {
  return (
    <article className="relative bg-neutral-4 flex flex-col gap-4 items-center text-center p-8">
      <picture className="h-16 w-16">
        <img
          src={`src/assets/images/avatar-${info.name.toLocaleLowerCase()}.png`}
          alt={`avatar of ${info.name}`}
        />
      </picture>
      <h4 className="text-primary-2 text-md font-medium">
        {info.name} {info.surname}
      </h4>
      <p>{info.testimonial}</p>
    </article>
  );
};

export default Card;
