import styled, { ThemeColors } from 'styled-components';
import { darken } from 'polished'

import { TButtonSize } from './types';

interface IContainerProps {
  backgroundColor: ThemeColors;
  textColor: ThemeColors;
  borderColor?: ThemeColors;
  size: TButtonSize;
  applyDarkenInBackground?: boolean;
}

const getHeight: Record<TButtonSize, string> = {
  lg: '48px',
  md: '42px',
  sm: '36px',
};

export const Container = styled.button<IContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme, size }) =>
    size === 'sm' ? theme.spacing.xs : theme.spacing.sm};

  height: ${({ size }) => getHeight[size]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme, backgroundColor, applyDarkenInBackground }) =>  applyDarkenInBackground ? darken(0.4, theme.colors[backgroundColor]) : theme.colors[backgroundColor]};
  border: ${({ theme, backgroundColor, borderColor }) =>
    `1px solid ${theme.colors[borderColor || backgroundColor]}`};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  padding: ${({ theme, size }) =>
    `0 ${size === 'sm' ? theme.spacing.sm : theme.spacing.md}`};

  font-size: ${({ size }) => (size === 'sm' ? '12px' : '14px')};
  letter-spacing: 0.5px;
  font-weight: 600;
  line-height: ${({ size }) => getHeight[size]};

  transition: all 0.3s ease-in;

  svg {
    transition: color 0.3s ease-in;

    stroke-width: 3px;
    width: 12px;
    height: 12px;
    color: ${({ theme, textColor }) => theme.colors[textColor]};
  }

  &:hover:not(:disabled) {
    filter: brightness(0.96);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.disabledBackground};
    background-color: ${({ theme }) => theme.colors.disabledBackground};
    color: ${({ theme }) => theme.colors.onDisabledBackground};

    svg {
      color: ${({ theme }) => theme.colors.onDisabledBackground};
    }
  }
`;
