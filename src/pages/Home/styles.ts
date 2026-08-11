import styled from 'styled-components';

// Este será o <main> que engloba a tela toda
export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;

// Este será o nosso <aside> (barra lateral semântica)
export const BarraLateral = styled.aside`
  width: 360px;
  background-color: #ffffff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 10; // Para a sombra ficar por cima do mapa
  overflow-y: auto; // Se tiver muitos restaurantes, essa barra rola
`;

// Este será o <div> onde o Google Maps vai nascer
export const AreaDoMapa = styled.div`
  flex: 1; // Pega todo o espaço restante da tela
  background-color: #e0e0e0; // Uma cor provisória até o mapa carregar
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListaDeCards = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 10px;

  /* Scrollbar customizada e moderna */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;