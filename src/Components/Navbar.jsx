import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Style.module.css";

const links = [
    {path:"foods", title: "FOODS"},
    {path:"recipes", title: "RECIPES"},
    {path:"fitness", title: "FITNESS"},
    {path:"comunity", title: "COMUNITY"},
    {path:"countries", title: "COUNTRIES"},
]

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      {
        links.map((link)=> (
            <NavLink key={link.path} to={link.path} className={styles.Navlink}>{link.title}</NavLink>
        ))
      }
    </div>
  )
}

export default Navbar
