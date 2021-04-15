/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
// No React, tudo é componente. Até as páginas são componentes!
import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  useEffect(() => {
    categoriasRepository.getAllCategoriesWithVideos()
      .then( =>{
        
      })
  });

  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end?
        Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina
        das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!
        "
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
    </div>

  );
}

export default Home;
