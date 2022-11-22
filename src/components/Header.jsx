import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='title'>
      <div className='containermenu '>
        <Link to="/">
          <img className='logoimg' src="
          https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png"/>
        </Link>
      </div>
    </div>
  )
}

export default Header