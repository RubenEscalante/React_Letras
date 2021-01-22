import React from "react";

const Infomarcion = ({ informacion }) => {
  if (Object.keys(informacion).length === 0) return null;
  const { strArtistThumb, strGenre, strBiographyEN } = informacion;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" />
        <p className="card-text">Genero: {strGenre}</p>
        <h2 className="card-text">Biografia:</h2>
        <p className="card-text">{strBiographyEN}</p>
        <p className="card-text">
          <a
            href={`https://${informacion.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${informacion.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Infomarcion;
