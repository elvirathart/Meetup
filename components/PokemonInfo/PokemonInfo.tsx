import React, { useState } from 'react';
import axios from 'axios';

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonResponse {
  types: Type[];
  weight: number;
}

const PikachuComponent: React.FC = () => {
  const [typeName, setTypeName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPikachuData = async () => {
    setLoading(true);
    setError('');
    setTypeName('');
    try {
      const response = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/pikachu');
      const types = response.data.types;
      const typeName = types.map(typeInfo => typeInfo.type.name).join(', ');
      setTypeName(typeName);
    } catch (error) {
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={'click-counter-container'} >
      <button onClick={fetchPikachuData} className={'storybook-button'} disabled={loading}>
        {loading ? 'Loading...' : 'Pikachu'}
      </button>
      {typeName && <p>Type: {typeName}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PikachuComponent;
