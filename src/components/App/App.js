import { useEffect, useState  } from 'react';
import { handleAutorCheck } from '../../utils/autorCheck';
import { handleFilterCards } from '../../utils/filterCards';
import CardHolder from '../CardHolder/CardHolder';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Header from '../Header/Header'
import Info from '../Info/Info';

const App = () => {

  const [cards, setCards] = useState([])
  const [filterCards, setFilterCards] = useState([])

  useEffect(() => {
    fetch(`https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const posts = handleAutorCheck(data.articles)
      setCards(posts)
      setFilterCards(posts)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const postsFilter = (formParams) => {
    const filtred = handleFilterCards(cards, formParams)
    setFilterCards(filtred)
  }

  return (
    <div className="app">
      <Header/>
      <Info/>
      <Form
        postsFilter={postsFilter}
      />
      <CardHolder
        cards={filterCards}
      />
      <Footer/>
    </div>
  );
}

export default App;
