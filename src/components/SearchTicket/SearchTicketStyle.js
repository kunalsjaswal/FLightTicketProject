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
            width: 70%;
            margin-left: 5%;
            background-color: white;

            

            .button-search{
                margin-left: 40%;
                margin-top: 2%;
            }

        }

        .user-tickets{
            margin: auto;
            margin-top: 2%;
            width: 90%;
            h2{
                color:  white;
                padding: 1%;
                margin-top: 0;
            }
            .tickets{
                padding: 1%;
                text-align: center;
                display: flex;
                flex-wrap: wrap;

                .no-ticket-card{
                    width: 20%;
                    background-color: #e0dede;
                    padding:2% 2% 4% 2%;
                    border-radius: 5px;
                    position: relative;
                    text-align: left;

                    .circle{
                        padding: 4%;
                        background-color: #161616;
                        position: absolute;
                        top: 10%;
                        right: 5%;
                        border-radius: 50%;
                    }

                }
                
                .ticket-card{
                   
                    width:25%;
                    border-radius: 5px;
                    background-color: white;
                    margin-bottom:1%;
                    box-shadow: 1px 1px 4px gray;
                    padding: 1%;
                    position: relative;
                    margin-right: 4%;
                    margin-bottom: 4%;
                    .circle{
                        padding: 4%;
                        background-color: #161616;
                        position: absolute;
                        top: 5%;
                        right: 5%;
                        border-radius: 50%;
                    }
                    .dest{
                        border-radius: 10px;
                        padding: 1%;
                        h2{
                            color:black;
                        }
                        
                    }
                    .rest{
                        background-color: #e0dede;
                        margin-bottom:1%;;
                        text-align: left;
                        color: #373636;
                        padding: 1%;
                        border-top-right-radius: 5px;
                        border-top-left-radius: 5px;
                        padding-left: 15%;
                    }
                    button{
                        border: 0;
                        border-radius: 4px;
                        padding: 3% 5%;
                        margin-top: 2%;
                        background-color: #ca3838;
                        color: #f3f3f3;
                        cursor: pointer;
                        font-weight: bold;
                    }
                   
                }
            }
        }
       

    }
`