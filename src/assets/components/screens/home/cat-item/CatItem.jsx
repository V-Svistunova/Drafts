import { Link } from 'react-router-dom'
import styles from './CatItem.module.css'

function CatItem({catItem}) {
  return (
    <li key={catItem.id} className={styles.item} >
      <div className={styles.imgWrap}>
        <Link to={`/car/${catItem.id}`}>
          <div 
            style={{
              backgroundImage: `url(${catItem.image})`
            }}
            className={styles.img}
          />
        </Link>
      </div>
      <div className={styles.content}>
        <Link to={`/car/${catItem.id}`}>
          <span>{catItem.name}</span>
        </Link>
        <span>
          {catItem.price ? new Intl.NumberFormat('ru-RU', {
          style: 'currency',
          currency: 'USD',
          }).format(catItem.price) : 'нет в наличии'}
        </span>
      </div>
      {catItem.price ? 
      <Link to={`/`}>Купить</Link> : 
      <Link to={`/`}>Сообщить о поступлении</Link> 
      }
    </li>
  )
}
export default CatItem