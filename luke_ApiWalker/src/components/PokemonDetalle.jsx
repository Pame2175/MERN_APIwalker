import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PersonajeDetalle = () => {
  const { resource, id } = useParams();
  const [detalle, setDetalle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetalle = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
        setDetalle(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError("Hubo un problema al cargar el detalle. Inténtalo de nuevo.");
      }
    };

    fetchDetalle();
  }, [resource, id]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        detalle && (
          <>
            <h2>Detalle del {resource.charAt(0).toUpperCase() + resource.slice(1)} {id}</h2>
            <ul>
              {Object.entries(detalle).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}: </strong>{value}
                </li>
              ))}
            </ul>
          </>
        )
      )}
    </div>
  );
};

export default PersonajeDetalle;
