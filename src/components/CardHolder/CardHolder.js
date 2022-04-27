import Card from '../Card/Card';



const CardHolder = ({cards}) => {

  return (
    <section className="card-holder">
      {cards.map((post, item) => (
        <Card
          key={item}
          title={post.title}
          text={post.description}
          author={post.author}
          date={post.publishedAt}
        />
      ))}
    </section>
  );
}

export default CardHolder;
