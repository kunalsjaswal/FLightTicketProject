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
        h2{
            margin-top: 0;
        }

        .tickets{
            display: flex;
            flex-wrap: wrap;

            .no-ticket-card{
                width: 20%;
                background-color: #161616;
                padding:2% 2% 4% 2%;
                border-radius: 5px;
                position: relative;
                text-align: left;
                color: #e0dede;

                .circle{
                    padding: 4%;
                    background-color: #fefefe;
                    position: absolute;
                    top: 10%;
                    right: 5%;
                    border-radius: 50%;
                }

            }

            .ticket-card{
                width: 300px;
                position: relative;
                color: #ececec;
                box-shadow: 0px 0px 2px black;
                background-color: #161616;
                border-radius: 5px;
                text-align: center;
                margin-right: 20px;
                margin-bottom: 20px;
                transition: 0.3s;
                padding:3% 2% 2% 2%;
                .info-icon{
                    position: absolute;
                    top: 10%;
                    left: 5%;
                    transition: 0.3s;
                    cursor: pointer;
                }
                .info-icon:hover{
                    scale: 1.1;
                }

                .info-section{
                    display: none;
                    position: absolute;
                    top: 10%;
                    left: 12%;
                    background-color: #fefefe;
                    padding: 4%;
                    border-radius: 5px;
                    box-shadow: 0px 0px 1px black;
                    z-index: 6;
                    color: #161616;
                    font-size: 0.8vw;
                    text-align: left;
                    
                }
                h2{
                    margin-top: 10%;
                    color: #fd4c4c;
                }
            }
        }
        
    }

`