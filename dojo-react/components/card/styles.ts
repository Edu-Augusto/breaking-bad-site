import styled from 'styled-components'

interface TextProps{
    hover: boolean
}
export const Container = styled.div`
    width: 30rem;
    height: 30rem;
    box-shadow: 10px 5px 5px #424242d1;
    position: relative;

    &:hover {
        transition: 800ms;
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        box-shadow: 0 0 10em black;
        opacity: 0.8;
    }
`

export const Image = styled.img`
     width: 100%;
     height: 100%;
`

export const ImageModal = styled.img`
     width: 100%;
     height: 35rem;
`

export const Text = styled.p<TextProps>`
    color: white;
    border-top: 1px white solid;
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    display: ${props => props.hover ? "block" : "none"};
    padding: 0.5rem;
    cursor: pointer;
`

export const ContainerModal = styled.div`
    margin: auto;
    width: 40rem;
    height: 40rem;
`