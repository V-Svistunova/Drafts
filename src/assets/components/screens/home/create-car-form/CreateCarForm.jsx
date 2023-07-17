import { useEffect, useState } from 'react'
import styles from './CreateCarForm.module.css'

const clearData = {
  price: '',
  name: '',
  image: '',
}

const CreateCarForm = ({ setCat }) => {
  const [data, setData] = useState(clearData)

  const createCat = (e) => {
    e.preventDefault()

    setCat(prev => [
      { 
        id: prev.lenght + 1, 
        ...data,
      }, 
      ...prev,
    ])

    setData(clearData)
  }

  return <form className={styles.form}>
    <input 
      placeholder="Введите модель"
      onChange={e => setData(prev => ({
        ...prev, name: e.target.value
      }))}
      value={data.name}
    />
    <input 
      placeholder='Ссылка на изображение'
      onChange={e => setData(prev => ({
        ...prev, image: e.target.value
      }))}
      value={data.image}
    />
    <div>
      <label htmlFor="filterPrice">Цена {data.price ? `- ${data.price}` : ''}</label>
      <input 
        type="range" 
        name="Цена" 
        id="filterPrice" 
        min={0}
        max={2000}
        onChange={e => setData(prev => ({
          ...prev, price: e.target.value
        }))}
        value={data.price}
       />
    </div>

    <button 
      className={styles.buttom}
      onClick={e => createCat(e)}
      >
      Добавить
      </button>
  </form>
}

export default CreateCarForm