import styled from 'styled-components';

export const ContainerBusca = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 20px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;

export const InputBusca = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 1rem;
  color: #333;
  margin-left: 8px;

  &::placeholder {
    color: #999;
  }
`;

export const IconeLupa = styled.span`
  font-size: 1.2rem;
  color: #666;
`;