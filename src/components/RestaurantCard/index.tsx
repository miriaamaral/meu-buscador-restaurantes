// src/components/RestaurantCard/index.tsx
import { Card, InfoSection, Nome, DetalhesTexto, Avaliacao, Foto } from './styles';
import { type Restaurante } from '../../services/mockRestaurantes';

// Contrato: Este card precisa de um objeto 'Restaurante' para nascer
interface RestaurantCardProps {
  restaurante: Restaurante;
}

export function RestaurantCard({ restaurante }: RestaurantCardProps) {
  return (
    <Card>
      <InfoSection>
        <div>
          <Nome>{restaurante.nome}</Nome>
          <DetalhesTexto>{restaurante.categoria.join(' • ')}</DetalhesTexto>
          <DetalhesTexto>{restaurante.endereco}</DetalhesTexto>
        </div>
        
        <Avaliacao>
          ⭐ {restaurante.nota} <span style={{ color: '#999', fontSize: '0.8rem', fontWeight: 'normal' }}>({restaurante.totalAvaliacoes})</span>
        </Avaliacao>
      </InfoSection>

      <Foto src={restaurante.fotoUrl} alt={`Foto de ${restaurante.nome}`} />
    </Card>
  );
}