import React from 'react';
import { LoaderStyle, Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <LoaderStyle />
    </Overlay>
  );
};
