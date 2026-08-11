// src/components/RestaurantCard/styles.ts
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 16px;
  margin: 0 20px 16px 20px;
  border-radius: 8px;
  border-left: 5px solid transparent;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    border-left: 5px solid #E63946;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
`;

export const Nome = styled.h3`
  margin: 0 0 4px 0;
  font-size: 1.2rem;
  color: #333;
`;

export const DetalhesTexto = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
`;

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-weight: bold;
  color: #f5a623;
`;

export const Foto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;