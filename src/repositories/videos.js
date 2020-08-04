import config from '../config';

const URL_VIDEO = `${config.URL}/videos`;

function create(object) {
  return fetch(`${URL_VIDEO}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  }).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error('Não foi possível cadastrar os dados :(');
  });
}

export default {
  create,
};
