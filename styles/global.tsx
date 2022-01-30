import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const global = (
  <Global
    styles={css`
      ${emotionNormalize}
      html,
      body {
          padding: 0;
          margin: 0;
          font-family: Roboto;
      }

      * {
          box-sizing: border-box;
      }
    `}
  />
);

const container = css`
  padding: 0 2rem;
`;

const grid = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

const main = css`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const title = css`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

const description = css`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const logo = css`
  height: 1em;
  margin-left: 0.5rem;
`;

const footer = css`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

const footerLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const form = css`
  display: flex;
  flex-direction: column;
`;

const input = css`
 padding: 16px;
 margin: 8px;
`;
const textarea = css`
  padding: 20px;
  margin: 16px 8px;
`;

const button = css`
  padding: 8px 12px;
  margin: 16px 8px;
  cursor: pointer;
`;

export const globalStyles = {
  global,
  main,
  container,
  grid,
  title,
  description,
  logo,
  footer,
  footerLink,
  form,
  textarea,
  input,
  button
};