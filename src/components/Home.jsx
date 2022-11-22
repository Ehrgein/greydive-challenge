import React from "react";
import { Link } from "react-router-dom";
import db from "../db.json";

function Home() {
  return (
    <div className="homepagediv">
      <div className="homepagecontainer">
        <div className="homenav">
          <div className="logocontainer">
            <img
              alt="greydive logo"
              className="homeimage"
              src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png"
            />
          </div>
          <div className="navitems">
            <div className="itemcontainer">
              <a
                target="_blank"
                rel="noreferrer"
                className="link"
                href="https://www.greydive.com/sobre-nosotros"
              >
                <span className="navitem"> Sobre nosotros </span>
              </a>
            </div>
            <div className="itemcontainer">
              <a
                target="_blank"
                rel="noreferrer"
                className="link"
                href="https://www.greydive.com/blog"
              >
                <span className="navitem"> Blog </span>
              </a>
            </div>
            <div className="conversemoscontainer">
              <a
                target="_blank"
                rel="noreferrer"
                className="link"
                href="https://www.greydive.com/#contactoHome"
              >
                <button className="conversemosbutton"> Conversemos </button>
              </a>
            </div>
          </div>
        </div>
        <div className="testingmessage">
          <h1>Tests disponibles</h1>
        </div>
        <div className="testcontainer">
          {db.map((item, index) => (
            <div key={index} className="testlist">
              <h1 className="testclient">{item.cliente}</h1>
              <h1 className="testclient">Testeador 1</h1>
              <Link to={`${index}/${item.cliente}/${item.idVideo}/testeador1`}>
                <button className="gototest">Ir al test</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
