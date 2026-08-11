// src/components/SearchBar/index.tsx
import { type KeyboardEvent } from 'react';
import { ContainerBusca, InputBusca, IconeLupa } from './styles';

// Atualizamos nosso contrato! Agora o Pai manda o valor e a função de atualizar
interface SearchBarProps {
  valor: string;
  onChange: (termo: string) => void;
  onSearch: (termo: string) => void;
}

export function SearchBar({ valor, onChange, onSearch }: SearchBarProps) {
  
  const lidarComTecla = (evento: KeyboardEvent<HTMLInputElement>) => {
    if (evento.key === 'Enter') {
      onSearch(valor);
    }
  };

  return (
    <ContainerBusca>
      <IconeLupa>🔍</IconeLupa>
      <InputBusca 
        type="text" 
        placeholder="Pesquisar pizzaria, massas, boteco..." 
        value={valor} // O input reflete exatamente o que o Pai mandar
        onChange={(e) => onChange(e.target.value)} // Avisa o Pai a cada letra
        onKeyDown={lidarComTecla}
      />
    </ContainerBusca>
  );
}