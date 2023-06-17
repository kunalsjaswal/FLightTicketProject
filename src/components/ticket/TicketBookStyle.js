import { styled } from "styled-components";

export const TicketBookDiv= styled.div`
    position: relative;
    h1{
        background-color: white;
    }

    .ticket-book{
        width: 70%;
        margin-left: 15%;
        margin-top: 2%;
        border-radius: 50px;
        /* border: 2px solid gray; */
        box-shadow: 2px 2px 5px black;
        margin-bottom: 2%;
    }

    .ticket-form{
        position: absolute;
        top: 30%;
        left: 24%;
        width: 50%;

        input{
            font-family: 'Roboto Mono', monospace;
            padding: 0.5%;
            width: 20%;
            margin-right: 2%;
            /* border:1px solid ridge; */
            border-style: dashed;
            border-radius: 3px;
        }

        .f-2{
            margin-top: 11%;
            margin-left: 8%;
            input{
                height: 25px;
                width: 25%;
            }
        }
        button{
            margin-top: 10%;
            margin-left: 30%;
            width: 20%;
            padding: 2%;
            font-weight: bold;
            cursor: pointer;
            background-color: red;
            border: 0;
            color: white;
            border-radius: 5px;
            box-shadow: 2px 2px 1px black;
            transition: 0.1s;
        }
        button:hover{
            box-shadow: -1px -1px 1px black;

        }
        .reflect{
            position: absolute;
            right: -31%;
            top: 25%;
            font-weight: bold;
            color: white;
            width: 40%;
            .r-flight,.r-date{
                margin-top: 18%;
            }
            .r-from{
                margin-top: 10%;
                div{
                    margin: 0;
                }
            }
            
            
        }
    }
   
`