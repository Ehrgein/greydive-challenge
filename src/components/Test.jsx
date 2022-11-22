import React from "react";
import db from "../db.json";
import { useParams } from "react-router-dom";

function TestData() {
  let { testid } = useParams();

  const cleantranscript = db[testid].transcripcion.replaceAll("<br>", "\n");

  return (
    <section className="testingcontent">
      <div className="testdata">
        <div className="clientinfo">
          <h1 className="clientname">Cliente: {db[testid].cliente}</h1>
          <span className="clientname">
            Test: Test de usabilidad en el {db[testid].id}
          </span>
          <span className="testername"> Testeador 1 </span>
          <video
            className="video"
            controls="controls autoplay"
            src={db[testid].linkVideo}
            type="video/mp4"
          />
        </div>

        <span className="transcription">Transcripción</span>

        <div className="transcriptiontxt">{cleantranscript}</div>
        <div className="transcription">
          <div className="tareas">Tareas</div>
          <div className="escenario"> Escenario: {db[testid].escenario}</div>
          {/* no estaba seguro si querian los primeros 9 items de la property preguntas, pero asumi que es viejo y quieren que muestre todos los items, si no usaria slice(0, 9) */}

          {db[testid].preguntas.map((item, index) => (
            /*aca usaria un id como key, pero este array no posee un id de como identificar la key, entonces usé el index */
            <div key={index} className="taskcontainer">
              <strong className="infotarea">
                Tarea: {index + 1}
                <br />
                {item.texto.replaceAll("\\n", "\n\n")}
              </strong>

              {/[0-9]/.test(item.respuesta) ? (
                <p className="respuesta"> Respuesta: {item.respuesta}</p>
              ) : null}
              <p className="duraciontarea">
                {" "}
                Duracion de la tarea: {item.tiempo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestData;
