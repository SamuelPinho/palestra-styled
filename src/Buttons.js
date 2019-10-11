import styled from 'styled-components';
import React from 'react';
import { Button } from './components/Button';

const Linha = styled.div`
  display: flex;
  width: 100%;
`;

export const Buttons = () => {
  return (
    <>
      <Linha>
        <Button color="blue">Botão Azul</Button>
        <Button color="red">Botão Vermelho</Button>
        <Button color="yellow">Botão Amarelo</Button>
        <Button color="grey">Botão Cinza</Button>
      </Linha>
      <Linha>
        <Button color="blue" isOutline>Botão Azul</Button>
        <Button color="red" isOutline>Botão Vermelho</Button>
        <Button color="yellow" isOutline>Botão Amarelo</Button>
        <Button color="grey" isOutline>Botão Cinza</Button>
      </Linha>
    </>
  );
};
