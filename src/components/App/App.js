import CardHolder from '../CardHolder/CardHolder';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Info from '../Info/Info';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Info/>
      <CardHolder/>
      <Footer/>
    </div>
  );
}

export default App;
