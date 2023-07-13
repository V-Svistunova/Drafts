import { useState } from 'react'
import styles from './CreateCarForm.module.css'

const CreateCarForm = ({setCat}) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const createCat = (e) => {
    e.preventDefault()
    setCat(prev => [...prev, { id: prev.lenght + 1, name, price, image}])
  }

  return <form className={styles.form}>
    <input 
      placeholder="Введите модель"
      onChange={e => setName(e.target.value)}
      value={name}
    />
    <input 
      placeholder='Ссылка на изображение'
      onChange={e => setImage(e.target.value)}
      value={image}
    />
    <div>
      <label htmlFor="filterPrice">Цена {price ? `- ${price}` : ''}</label>
      <input 
        type="range" 
        name="Цена" 
        id="filterPrice" 
        min={0}
        max={2000}
        onChange={e => setPrice(e.target.value)}
        value={price}
       />
    </div>

    <button 
      className={styles.buttom}
      onClick={e => createCat(e)}
      >
      ВЫБРАТЬ
      </button>
  </form>
}

export default CreateCarForm