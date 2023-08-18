import { css } from '@emotion/react';
import styled from '@emotion/styled'
import background from '../../src/Images/background.jpg'

export const GlobalStyles = css`
@import-normalize;

*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: Poppins;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background-image: url(${background});
  // background-size: cover;
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
`;

export const Container = styled.div`
// width: ${p => p.theme.screens.mobWidth};
// margin-left: auto;
// margin-right: auto;

// @media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
//     width: ${p => p.theme.screens.tabWidth};
// };

// @media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
//     width: ${p => p.theme.screens.deskWidth};
// };
`;