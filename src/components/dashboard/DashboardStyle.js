import { styled } from "styled-components";

export const DashBoardStyleDiv=styled.div`
    width: 90%;
    margin: auto;
    margin-top: 2%;
    h1,h3{
        text-align: center;
        /* background-color: #66BB6A; */
        margin-top: 0;
        margin-bottom: 0;
        
        
    }
    h1{
        padding-top: 2%;
    }
    h3{
        padding-bottom: 1%;
    }

    .user-tickets{
        border: 4px solid black;
        h2{
            background-color: black;
            color:  white;

            padding: 1%;
            margin-top: 0;
            padding-left: 3%;
        }
        .tickets{
            padding: 1%;
            text-align: center;
            
            .ticket-card{
                display: grid;
                grid-template-columns: 30% 40% 30%;
                width: 80%;
                /* border-radius: 5px; */
                margin-bottom:1%;
                box-shadow: 1px 1px 4px gray;
                margin-left: 2%;
                .dest{
                    border-radius: 10px;
                    padding: 1%;
                    h2{
                        background-color: white;
                        color:black;
                    }
                    
                }
                .rest{
                    text-align: left;
                    padding-left: 5%;
                }
                .cost{
                    text-align: left;
                    /* border: 1px solid black; */
                    height: 60%;
                    margin-top: 12%;
                }
            }
        }
    }

`