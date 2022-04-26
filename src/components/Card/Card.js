import { useState } from "react";
import { useEffect } from "react";
import { vievDate } from "../../utils/vievDate";

const Card = ({ title, text, author, date }) => {

  const [cardDate, setCardDate] = useState('')

  useEffect(() => {
    setCardDate(vievDate(date))
  }, [date])

  return (
    <div className="card">
      <h2 className="card__hrader">{title}</h2>
      <div className="card__content-container">
        <p className="card__text">{text}</p>
        <div className="card__info-container">
          <span className="card__autor">{author}</span>
          <span className="card__date">{cardDate}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
