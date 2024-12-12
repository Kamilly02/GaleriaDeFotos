
import React, { useState } from 'react';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ]);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://i.pinimg.com/enabled/564x/97/3e/75/973e75124f87f1421dafe0e537d11a80.jpg']);
  };

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
    </div>
  );
}

export default GaleriaDeImagens;
