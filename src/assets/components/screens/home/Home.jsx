import { useMemo } from 'react'
import styles from './Home.module.css'
import CatItem from './cat-item/CatItem'
import {catItems} from './cat.data'
import CreateCarForm from './create-car-form/CreateCarForm'


function Home() {

  
  // const filteredCat = useMemo(() => catItems.filter(catItem => catItem.price > 700), [])

  return (
    <main className={styles.main}>
      <h1>
        Гидроциклы
      </h1>
      <div className={styles.box}>
        <CreateCarForm/>
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