/*
 * Funcion principal, nos crea la estructura base con la cual funciona
 * Fetch, manejamos los errores internamente con tryCatch
 */

export async function fetchApi(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ErrorfetchApi" + error.message());
  }
}

//Creamos una funcion para obtener datos, esta funcion nos sirve para
//obtener todos los datos o un dato en especifico
/**
 *
 * @param {*} endpoint // Url a la cuala puntamos para obtner datos
 * @param {*} options // Solo si deseamos, para obtener un id
 * @returns
 */
export async function fetchGet(endpoint, options = {}) {
  return await fetchApi(endpoint, options);
}

/**
 *
 * @param {*} endpoint // url del servidor donde esta la informacion
 * @param {*} data //la informacionque deseamos enviarle al servidor para guardar
 * @returns
 */
export async function fetchPost(endpoint, data) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return await fetchApi(endpoint, options);
}

export async function fetchPut(endpoint, data) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return await fetchApi(endpoint, options);
}

export async function fetchDelete(endpoint, id) {
  const options = {
    method: "DELETE",
  };
  return fetchApi(endpoint+id, options);
}
