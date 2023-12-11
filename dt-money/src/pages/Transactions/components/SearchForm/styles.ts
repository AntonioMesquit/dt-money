import styled from "styled-components";

export const SearchFormContainer = styled.form`
display: flex;
gap: 1rem;

input{
flex: 1;
border-radius: 6px;
border: 0;
background-color: ${({theme}) => theme["gray-900"]};
color: ${({theme}) => theme["gray-300"]};
padding: 1rem;

&::placeholder{
    color: ${({theme}) => theme["gray-500"]};

}
}
button {
    display: flex;
    border: 0;
    align-items: center;
    cursor: pointer;
    gap: 0.75rem;
    padding: 0 0.75rem;
    background: transparent;
    border: 1px solid ${({theme}) => theme["green-300"]};
    color: ${({theme}) => theme["green-300"]};;
    font-weight: bold;
    border-radius: 6px;

    &:hover{
        background: ${({theme}) => theme["green-500"]};
    border: 1px solid ${({theme}) => theme["green-500"]};
    color: white;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
}
`