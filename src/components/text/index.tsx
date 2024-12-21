import React from 'react';

interface TextProps {
  children?: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return <span>{children}</span>;
};
