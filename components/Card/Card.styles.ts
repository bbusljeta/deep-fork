import { css } from '@emotion/react';

const card = css`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
    cursor: pointer;

    &:hover,
    &:active,
    &focus {
        color: #0070f3;
        border-color: #0070f3;
    }
`;

const cardDescription = css`
    font-size: 20px;
    line-height: 1.5;
`;

export const cardStyles = {
    card,
    cardDescription
}