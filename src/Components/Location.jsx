import axios from "axios";
import { useState, useEffect } from "react";
import ResidentInfo from "./ResidentInfo";

const Location = () => {
  const [LocationInfo, setLocation] = useState({});
  const [residentList, setResidents] = useState([]);

  const RandomID = Math.floor(Math.random() * 20) + 1;

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${RandomID}`)
      .then((resp) => {
        setLocation(resp.data);
        setResidents(resp.data.residents);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="Father">
        <div className="FirstContainer">
          <div className="Name">
            Nombre:
            <br />
            {LocationInfo.name}
          </div>
          <div className="Type">
            Tipo:
            <br />
            {LocationInfo.type}
          </div>
          <div className="Dimension">
            Dimensión:
            <br />
            {LocationInfo.dimension}
          </div>
          <div className="Poblation">
            Población:
            <br />
            {LocationInfo.residents?.length}
          </div>
        </div>
        <h1 className="header">RESIDENTES REGISTRADOS EN ESTA DIMENSIÓN</h1>
        <div>
        <input
        type="text"
        placeholder="Type an ID"
        className="Input"
        />
        <button className="button">
          Buscar
        </button>
        </div>
      </div>
      {residentList.map((resident) => (
        <ResidentInfo key={resident} url={resident} />
      ))}

      {residentList.length > 0 ? (
        <ul />
      ) : (
        <p className="error">
          No parece haber rastros de vida inteligente aquí.
        </p>
      )}
    </>
  );
};

export default Location;
