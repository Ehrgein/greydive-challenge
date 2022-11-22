import React from 'react'
import {Link} from 'react-router-dom'
import db from '../db.json'

console.log(db)

function Home() {
  return (
    <div className='homepagediv'>
        <div className='homepagecontainer'>        
            <div className='homenav'>
                <div>
                    <img  className='homeimage' src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png"/>
                </div>
                <div className='navitems'>
                    <div className='itemcontainer'>
                        <a className='link' href="https://www.greydive.com/sobre-nosotros">
                         <h1 className='navitem'> Sobre nosotros </h1>
                        </a>
                    </div>
                    <div className='itemcontainer'>
                        <a className='link' href="https://www.greydive.com/blog">
                            <h1 className='navitem'> Blog </h1>
                        </a>
                    </div>
                    <div className='conversemoscontainer'>
                        <a className='link' href="https://www.greydive.com/#contactoHome">
                            <h1 className='conversemosbutton'> Conversemos </h1>
                        </a>
                    </div>
                </div>
            </div>
            <div className='testingmessage'>
                <h1>Tests disponibles</h1>
            </div>
            <div className='testcontainer'>
                {
                db.map((item, index) =>

                        <div className='testlist'>
                            <h1 className='testclient'>
                                {item.cliente}
                            </h1>
                            <h1 className='testclient'>
                                Testeador 1 
                            </h1>
                            <Link to={`${index}/${item.cliente}/${item.idVideo}/testeador1`} >
                                <button className='gototest'>Ir al test</button>
                            </Link>
                        </div>
                )}
            </div>    
        </div>
    </div>
  )
}

export default Home