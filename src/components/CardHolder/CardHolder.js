import Card from '../Card/Card';



const CardHolder = ({cards}) => {

  return (
    <main className="card-holder">
      {cards.map((post, item) => (
        <Card
          key={item}
          title={post.title}
          text={post.description}
          author={post.author}
          date={post.publishedAt}
        />
      ))}
    </main>
  );
}

export default CardHolder;
