import { useEffect, useState  } from 'react';
import Card from '../Card/Card';



const CardHolder = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.articles)
      setData(data.articles)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <section className="card-holder">
      {data.map((post, item) => (
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
