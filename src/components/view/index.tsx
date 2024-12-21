import React from 'react';

interface ViewProps {
  children?: React.ReactNode;
}

export const View = ({ children }: ViewProps) => {
  return <div>{children}</div>;
};
