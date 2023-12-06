import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;

display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin-top: -5rem;

`
interface SummaryCardProps {
    variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
background-color: ${({theme}) => theme["gray-600"]};
border-radius: 6px;
padding: 2rem;

> header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme["green-300"]};

}
> strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: bold;


}
${props => props.variant === 'green' && css `
background: ${({theme}) => theme["green-700"]}
`}

`