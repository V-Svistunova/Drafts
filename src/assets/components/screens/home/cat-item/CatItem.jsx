import styles from './CatItem.module.css'

function CatItem({catItem}) {
  return (
    <li key={catItem.id} className={styles.item} >
      <div className={styles.imgWrap}>
        <a href="#">
          <div 
            style={{
              backgroundImage: `url(${catItem.image})`
            }}
            className={styles.img}
          />
        </a>
      </div>
      <div className={styles.content}>
        <a href="#">
          <span>{catItem.name}</span>
        </a>
        <span>
          {catItem.price ? new Intl.NumberFormat('ru-RU', {
          style: 'currency',
          currency: 'USD',
          }).format(catItem.price) : 'нет в наличии'}
        </span>
      </div>
      <a href="#">Read more</a>
    </li>
  )
}
export default CatItem