import FlickityCarousel from "../FlickityCarousel/FlickityCarousel";


const Info = () => {

  return (
    <div className="info">
      <FlickityCarousel/>
      <div className="info__text-container">
        <h1 className="info__title">IT-инфраструктура для бизнеса</h1>
        <p className="info__text">Мы предлагаем комплексные решения для всех уровней бизнеса: от индивидуальных предпринимателей до крупных международных компаний. Более 20 000 клиентов по всему миру доверяют нам.</p>
      </div>
    </div>
  );
}

export default Info;
