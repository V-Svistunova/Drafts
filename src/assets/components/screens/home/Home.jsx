import { useEffect, useMemo, useState } from 'react'
import styles from './Home.module.css'
import CatItem from './cat-item/CatItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import axios from 'axios'
import {CatService} from './../../../services/cat.service'


function Home() {

  // const filteredCat = useMemo(() => catItems.filter(catItem => catItem.price > 700), [])

  const [catItems, setCat] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const data = await CatService.getAll()
      setCat(data)
    }

    fetchData()
  }, [])
  
  return (
    <main className={styles.main}>
      <h1>
        Гидроциклы
      </h1>
      <div className={styles.box}>
        <CreateCarForm setCat={setCat} />
        <ul className={styles.list}>
          {catItems.length ? catItems.map(catItem => (
            <CatItem key={catItem.id} catItem={catItem} />
          )) : (
            <p>Нет данных</p>
            )}
        </ul>
      </div>
    </main>
  )
}

export default Home