import { useMemo, useState } from 'react'
import styles from './Home.module.css'
import CatItem from './cat-item/CatItem'
import {catItems as catData} from './cat.data'
import CreateCarForm from './create-car-form/CreateCarForm'


function Home() {

  // const filteredCat = useMemo(() => catItems.filter(catItem => catItem.price > 700), [])

  const [catItems, setCat] = useState(catData)
  
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