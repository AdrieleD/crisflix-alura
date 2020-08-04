import config from '../config';

const URL_CATEGORIA = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIA}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error('Não foi possível pegar os dados :(');
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIA}`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error('Não foi possível pegar os dados :(');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
