// TODOS OS DADOS DE CATEGORIAS VIRÃO DAQUI - NISSO CONSISTE A PASTA REPOSITORIES
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAllCategoriesWithVideos() {
  console.log(URL_CATEGORIES);
  return fetch(URL_CATEGORIES)
    // eslint-disable-next-line no-return-await
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados: ()');
    });
}

export default {
  getAllCategoriesWithVideos,
};
