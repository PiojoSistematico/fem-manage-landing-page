type CardProps = {
  info: { name: string; surname: string; testimonial: string };
};

const Card: React.FunctionComponent<CardProps> = ({ info }) => {
  return (
    <article>
      <picture>
        <img
          src={`../assets/images/avatar-${info.name.toLocaleLowerCase()}.png`}
          alt={`avatar of ${info.name}`}
        />
      </picture>
      <h4>
        {info.name} {info.surname}
      </h4>
      <p>{info.testimonial}</p>
    </article>
  );
};

export default Card;
