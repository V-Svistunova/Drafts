import { useState } from 'react'
import styles from './CreateCarForm.module.css'

const CreateCarForm = () => {
  const [name, setName] = useState('')
  const [power, setPower] = useState('')
  const [price, setPrice] = useState('')

  const createCat = (e) => {
    e.preventDefault()
    console.log({name, power, price});
  }

  return <form className={styles.form}>
    <input 
      type="text" 
      placeholder="Введите модель"
      onChange={e => setName(e.target.value)}
      value={name}
    />
    <input 
      type="text"
      placeholder='Мощность, л.с.'
      onChange={e => setPower(e.target.value)}
      value={power}
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