// src/components/Map/index.tsx
import { GoogleMap, useJsApiLoader, Marker, type Libraries } from '@react-google-maps/api';
import { type Restaurante } from '../../services/mockRestaurantes';

const containerStyle = { width: '100%', height: '100%' };
const center = { lat: -23.55052, lng: -46.633309 };
// Voltamos apenas para 'places', garantindo estabilidade
const libraries: Libraries = ['places'];

interface MapProps {
  onMapLoad?: (mapa: google.maps.Map) => void;
  restaurantes: Restaurante[];
}

// 💡 A MÁGICA DOS SVGs AQUI!
// Vamos criar ícones como strings SVG (código puro) e transformá-los em URLs de dados
const criarIconeSVG = (emoji: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="#E63946" stroke="white" stroke-width="2"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20">${emoji}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const obterEmojiPorCategoria = (categorias: string[]) => {
  const cats = categorias.join(' ').toLowerCase();
  if (cats.includes('pizza')) return '🍕';
  if (cats.includes('hambúrguer') || cats.includes('lanches')) return '🍔';
  if (cats.includes('japonesa') || cats.includes('sushi')) return '🍣';
  if (cats.includes('café') || cats.includes('padaria')) return '☕';
  if (cats.includes('sobremesa') || cats.includes('bolo')) return '🍰';
  if (cats.includes('carnes') || cats.includes('churrascaria')) return '🥩';
  if (cats.includes('boteco') || cats.includes('bar')) return '🍻';
  if (cats.includes('árabe')) return '🥙';
  if (cats.includes('mexicana')) return '🌮';
  return '🍽️';
};

export function Map({ onMapLoad, restaurantes }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY as string,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <h2>Carregando o mapa... 🌍</h2>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onMapLoad}
      // Removida a option com o MapId problemático
    >
      {restaurantes.map((restaurante) => (
        <Marker
          key={restaurante.id}
          position={{ lat: restaurante.latitude, lng: restaurante.longitude }}
          title={restaurante.nome}
          // Passamos a URL do nosso SVG gerado dinamicamente!
          icon={{
            url: criarIconeSVG(obterEmojiPorCategoria(restaurante.categoria)),
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      ))}
    </GoogleMap>
  );
}