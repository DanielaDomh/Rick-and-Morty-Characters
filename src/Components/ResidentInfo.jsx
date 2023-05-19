import axios from "axios";
import { useState, useEffect } from "react";

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => setResident(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>

      <div className="Residents-Card">
        <div className="Residents-Card--status">
          <img className="ProfilePicture" src={resident.image} alt="" />
          <div className="Status">{resident.status}</div>
        </div>
        <p className="Title"> {resident.name}</p>
        <p>Specie:</p>
        <div>{resident.species}</div>
        <p>Origin:</p>
        <div>{resident.origin?.name}</div>
        <p>Episode appearances: {resident.episode?.length}</p>
      </div>
    </>
  );
};

export default ResidentInfo;
