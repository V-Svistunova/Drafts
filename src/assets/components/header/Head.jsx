import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { GlobalService } from "../../services/global.service";

const Head = () => {

  const [headMenu, setHead] = useState([])
  const [settings, setSetting] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const data = await GlobalService.getHeadmenu()
      const data1 = await GlobalService.getAll()

      setHead(data)
      setSetting(data1)
    }

    fetchData()
  }, [])

  

  return (
    <>
      <section className="head">
        <div className="container">
          <ul className="list">
            <li className="item">
              {headMenu.length ? headMenu.map(headItem => (
                <Link key={headItem.id} className="link" to={headItem.Link}>{headItem.name}</Link>
              )) : ""}
            </li>
          </ul>

          <div className="logo">
            {settings.logo ? (
                <img src={`${settings.logo}`} alt="logo" />
              ) : ""}
          </div>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            {settings.address ? (
                <p className="text">{settings.address}</p>
              ) : ""}
          </div>
          <ul className="userMenu">
            <li>
              <span className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <Link className="heart" to={'/'}>
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link className="user" to={'/'}>
                <i className="fa-solid fa-user"></i>
              </Link>
              <Link className="cart" to={'/'}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cartCount">0</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Head