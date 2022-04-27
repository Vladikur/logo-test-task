import { useState, useEffect } from 'react';
import author from '../../images/author.svg';


const Form = ({ postsFilter }) => {

  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  useEffect(() => {
    if (data.author || data.date1 || data.date2) {
      postsFilter(data)
    }
  }, [data])

  return (
    <form className="form" noValidate>
      <div className="form__author-container">
        <input value={data.author || ''} placeholder="Выберите автора" className="form__input-author" onChange={handleChange} type="text" name="author" />
        <img src={author} alt="author" className="form__author"/>
      </div>
      <div className="form__inputs-date">
        <span className="form__input-span">От</span>
        <input value={data.date1 || ''} className="form__input-date" onChange={handleChange} type="date" name="date1"/>
        <span className="form__input-span">~</span>
        <span className="form__input-span">До</span>
        <input value={data.date2 || ''} className="form__input-date" onChange={handleChange} type="date" name="date2"/>
      </div>
    </form>
  );
}

export default Form;
