import styled from 'styled-components';

export const Default = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid #BABACA;
  transition: all .2s ease-in-out;
  text-align: center;
  
  width: ${({ full }) => full ? '100%' : 'fit-content'};
  padding: ${({ small }) => small ? '3px 15px' : '5px 20px'};
  font-size: ${({ small }) => small ? '16px' : '18px'};

  &:hover {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
  }
`;
