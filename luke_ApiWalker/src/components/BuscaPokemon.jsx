import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BuscaPokemon = () => {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChangeResource = (e) => {
        setResource(e.target.value);
    };

    const handleChangeId = (e) => {
        setId(e.target.value);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
            setData(response.data);
            setError(null);
            navigate(`/${resource}/${id}`); // Actualizamos la URL con el recurso y el ID
        } catch (error) {
            setError('Hubo un problema al buscar. Inténtalo de nuevo.');
            setData(null); // Limpiamos los datos en caso de error
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <select value={resource} onChange={handleChangeResource}>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <input
                    type="number"
                    value={id}
                    onChange={handleChangeId}
                    placeholder="Enter ID"
                />
                <button type="submit">Submit</button>
            </div>
            {error && <p>{error}</p>}
            {data && (
                <div>
                    {/* Aquí iría el contenido que deseas mostrar */}
                </div>
            )}
        </form>
    );
};

export default BuscaPokemon;
