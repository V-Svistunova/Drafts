import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CatItem from "../home/cat-item/CatItem"
import {CatService} from './../../../services/cat.service'

const CatDetail = () => {
  const { id } = useParams()
  const [catItem, setCat] = useState({})

  useEffect(() => {
    if(!id) return

    const fetchData = async() => {
      const data = await CatService.getById(id)

      setCat(data)
    }

    fetchData()
  }, [id])

  if(!catItem?.name) return <p>Loading...</p>

  console.log(catItem)

  return (
    <div>
      <div>Карточка деталей</div>
      <Link to='/'>Back</Link>
      <CatItem catItem={catItem} />
    </div>
  )
}

export default CatDetail