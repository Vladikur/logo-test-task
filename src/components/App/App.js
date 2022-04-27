import { useEffect, useState  } from 'react';
import CardHolder from '../CardHolder/CardHolder';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Header from '../Header/Header'
import Info from '../Info/Info';

const App = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(`https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.articles)
      setCards(data.articles)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const postsFilter = (formParams) => {
    console.log(formParams)
  }

  return (
    <div className="app">
      <Header/>
      <Info/>
      <Form
        postsFilter={postsFilter}
      />
      <CardHolder
        cards={cards}
      />
      <Footer/>
    </div>
  );
}

export default App;
