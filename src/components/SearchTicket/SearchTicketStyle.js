import { styled } from 'styled-components'

export const SearchTicketDiv = styled.div`
    /* margin-top: 5%; */

    .box-1{
        margin: auto;
        background-color: #161616;
        padding: 1%;
        padding-bottom: 2%;
        h1,h3{
            color: white;
            padding-left: 5%;
        }

        .box-2{
            padding: 3% 1%;
            border-radius: 5px;
            width: 88%;
            margin: auto;
            background-color: white;

            .selects{
                display: flex;
                align-items: center;
                
                .date-label{
                    margin-left: 5%;
                    font-weight: bold;
                }
                input{
                    width: 15%;
                    padding: 1%;
                    margin-left: 1%;
                    border: 1px solid #b8b8b8;
                }
            }

            .button-search{
                margin-left: 43%;
                margin-top: 2%;
            }

        }

        .user-tickets{
            margin: auto;
            margin-top: 2%;
            background-color: white;
            width: 90%;
            h2{
                background-color: #c42929;
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
       

    }
`