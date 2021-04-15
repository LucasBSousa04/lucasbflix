// TODOS OS DADOS DE CATEGORIAS VIRÃO DAQUI - NISSO CONSISTE A PASTA REPOSITORIES
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllCategoriesWithVideos() {
  return fetch(URL_CATEGORIES)
    // eslint-disable-next-line no-return-await
    .then(async (respostaDoServidor) => await respostaDoServidor.json());
}

export default {
  getAllCategoriesWithVideos,
};
