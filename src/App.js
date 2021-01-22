import React, { Fragment, useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Infomarcion from "./components/Infomarcion";
import axios from "axios";

function App() {
  // definir el state
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [informacion, guardarInformacion] = useState("");
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;
    guardarCargando(true);
    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([axios(url), axios(url2)]);

      guardarLetra(letra.data.lyrics);
      guardarInformacion(informacion.data.artists[0]);
      guardarCargando(false);
    };
    consultarApiLetra();
  }, [busquedaletra]);
  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          {cargando ? (
            <p>Cargando...</p>
          ) : (
            <Fragment>
              <div className="col-md-6">
                <Infomarcion informacion={informacion} />
              </div>
              <div className="col-md-6">
                <Cancion letra={letra} />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
