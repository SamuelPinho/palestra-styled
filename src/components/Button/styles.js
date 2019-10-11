import styled from 'styled-components';
import { Text } from '../Text';

export const Default = styled.button`
  cursor: pointer;
  outline: none;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme[props.color]};
  transition: all .2s ease-in-out;
  text-align: center;
  margin: 10px;
  
  width: ${({ full }) => full ? '100%' : 'fit-content'};
  padding: ${({ small }) => small ? '3px 15px' : '5px 20px'};
  font-size: ${({ small }) => small ? '16px' : '18px'};

  background-color: ${(props) => {
    if (props.isOutline) return props.theme.white;
    return props.theme[props.color];
  }};

  color: ${({ isOutline, theme, color }) => {
    if (isOutline) return theme[color];
    if (color === 'white') return theme.black;
    return theme.white;
  }};

  &:hover {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
    background-color: ${({ isOutline, theme, color }) => {
    if (isOutline) return theme[color];
    return 'white';
  }};
  
    ${Text} {
      color: ${({ isOutline, theme, color }) => {
    if (isOutline) return theme.white;
    return theme[color];
  }};
    }
  }
`;
