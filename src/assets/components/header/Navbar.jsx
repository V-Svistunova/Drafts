import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GlobalService } from "../../services/global.service";

const Navbar = () => {

  const [headerMenu, setHead] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const data = await GlobalService.getHeaderMenu()

      setHead(data)
    }

    fetchData()
  }, [])

  return (
    <>
    <nav className="nav">
      <ul className="list">
        <li className="item">
          {headerMenu.length ? headerMenu.map(headerItem => (
            <Link key={headerItem.id} className="link" to={headerItem.Link}>{headerItem.name}</Link>
          )) : ""}
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar