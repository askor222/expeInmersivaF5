import React, { useState, useEffect } from 'react';

function FetchLink({ pageNumber }) {
  const [link, setLink] = useState(null);

  useEffect(() => {
    // Construye la URL con el número de página proporcionado
    const apiUrl = `https://factoriaei.coderf5.es/api/pages_links/${pageNumber}`;

    // Realiza la solicitud GET al API y guarda el enlace en el estado
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLink(data.link);
      })
      .catch((error) => {
        console.error('Error al obtener el enlace:', error);
      });
  }, [pageNumber]);

  return link;
}

export default FetchLink;
