import { css } from '@emotion/react';
import styled from '@emotion/styled'

export const GlobalStyles = css`
@import-normalize;

body {
  box-sizing: border-box;
  font-family: Poppins;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
};

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
};

ul,
ol {
  margin: 0;
  padding: 0;
};

img {
  display: block;
  max-width: 100%;
  height: auto;
};
`

export const Container = styled.div`
width: 100%;
padding-left: 15px;
padding-right: 15px;
margin: 0 auto;

@media screen and (min-width: 320px) {
    width: 320px;
};

@media screen and (min-width: 768px) {
    width: 768px;
  };

@media screen and (min-width: 1280px) {
    width: 1280px;
  };
`;