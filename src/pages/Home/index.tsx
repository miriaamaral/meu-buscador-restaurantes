// src/pages/Home/index.tsx
import { useState, useEffect } from 'react';
import { Container, BarraLateral, AreaDoMapa, ListaDeCards } from './styles';
import { Map } from '../../components/Map';
import { SearchBar } from '../../components/SearchBar';
import { RestaurantCard } from '../../components/RestaurantCard';
import { RESTAURANTES_MOCK, type Restaurante } from '../../services/mockRestaurantes';

export function Home() {
  const [textoInput, setTextoInput] = useState('');
  const [termoPesquisado, setTermoPesquisado] = useState('');
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>(RESTAURANTES_MOCK);

  const lidarComPesquisa = (termo: string) => {
    setTermoPesquisado(termo);
  };

  const limparBusca = () => {
    setTextoInput('');
    setTermoPesquisado('');
    setRestaurantes(RESTAURANTES_MOCK);
  };

  useEffect(() => {
    if (!termoPesquisado) {
      setRestaurantes(RESTAURANTES_MOCK);
      return;
    }

    const termo = termoPesquisado.toLowerCase();
    const resultadosFiltrados = RESTAURANTES_MOCK.filter((rest) => {
      const nomeBate = rest.nome.toLowerCase().includes(termo);
      const categoriaBate = rest.categoria.some((cat) => cat.toLowerCase().includes(termo));
      return nomeBate || categoriaBate;
    });

    setRestaurantes(resultadosFiltrados);
  }, [termoPesquisado]);

  return (
    <Container>
      <BarraLateral>
        <SearchBar 
          valor={textoInput} 
          onChange={setTextoInput} 
          onSearch={lidarComPesquisa} 
        />
        
        <ListaDeCards>
          {restaurantes.map((restaurante) => (
            <RestaurantCard 
              key={restaurante.id} 
              restaurante={restaurante} 
            />
          ))}

          {restaurantes.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
              <p style={{ color: '#666', marginBottom: '16px' }}>
                Poxa, não encontramos nada com "{termoPesquisado}" 😕
              </p>
              <button 
                onClick={limparBusca}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#E63946',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Voltar para opções disponíveis
              </button>
            </div>
          )}
        </ListaDeCards>
      </BarraLateral>

      <AreaDoMapa>
        {/* Passamos o estado de restaurantes para o mapa desenhar os Marcadores */}
        <Map restaurantes={restaurantes} />
      </AreaDoMapa>
    </Container>
  );
}