import { styled } from "styled-components";

export const LoginStyleDiv = styled.div`
    margin-top: 5%;
    /* background-color: green; */
    padding: 1%;
    h1{
        text-align: center;
    }
    h3{
        text-align: center;
        font-weight: normal;
    }

    .form-login{
        
        width: 20%;
        margin: auto;
        margin-bottom: 5%;
        animation: signup-anim 0.5s linear 0s 1 normal;

        label{
            margin-top: 4%;
            display: block;
            font-weight: bold;
        }
        input{
            display: block;
            width: 100%;
            padding: 4%;
            font-family: 'Roboto Mono', monospace;
            border: 1px solid gray;
            border-radius: 2px;
            margin-top: 1%;
        }
        button{
            width: 108%;
            background-color: black;
            color: white;
            font-weight: bold;
            padding: 5%;
            margin-top: 5%;
            border: 0;
            border-radius: 2px;
            cursor: pointer;
            transition: 0.2s;
        }
        button:hover{
            opacity: 0.8;
        }

        h4{
            text-align: center;
            span{
                font-weight: normal;
            }
            b{
                cursor: pointer;
            }
        }
        .alert{
            color: #ff0000;
            text-align: center;
            margin: 1%;
        }
    }

    .form-signup{
        display: none;
        transition: 0.3s;
        animation: signup-anim 0.5s linear 0s 1 normal;
    }
    .admin-login{
        display: none;
        transition: 0.3s;
        animation: signup-anim 0.5s linear 0s 1 normal;
    }
    @keyframes signup-anim {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`