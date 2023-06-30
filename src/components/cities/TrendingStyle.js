import { styled } from "styled-components";

export const TrendDiv = styled.div`
    width: 85%;
    margin: auto;
    padding: 2%;
    margin-bottom: 5%;
    .image-items{
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 5%;

        img{
            width: 100%;
            height: 80%;
            border-radius: 5px;
        }
        p{
            width: 100%;
        }
    }
`  