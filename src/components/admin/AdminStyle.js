const { styled } = require("styled-components");

export const AdminStyleDiv=styled.div`

padding: 0% 2%;
.admin-nav{
    position: fixed;
    z-index: 8;
    width: 95%;
    display: grid;
    margin-top: -6%;
    grid-template-columns: 90% 10%;
    align-items:center;

    h2{
        display: flex;
        align-items: center;
        padding: 0.2%;
        margin: 0;
        img{
            width: 4%;
            border-radius: 50%;
            background-color: #292929;
            margin-right: 1%;
        }

    }
    button{
        width: 90%;
        height: 65%;
        border:0;
        background-color: #f02e2e;
        color: white;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0px 0px 1px black;
        transition: 0.3s;
    }
    button:hover{
        background-color: #ff3030;
    }
}

.add-ticket{
    width: 40%;
    margin: auto;
    text-align: center;
    box-shadow: 0px 0px 1px black;
    padding: 1%;
    border-radius: 3px;
    margin-top: 8%;
    background-color: #2e2e2e;
    color: white;
    position: relative;
    
    .circle{
        position: absolute;
        padding:2%;
        background-color: white;
        border-radius: 50%;
        right: 5%;
        top: 6%;
    }
    .others{
        display: grid;
        grid-template-columns: 20% 60%;
        align-items: center;
        margin: auto;
        margin-top: 3%;
        width: 88%;

        label{
            text-align: left;
        }
        .price{
            margin-bottom: 3%;
            width: 60%;
            padding: 3%;
            border: 0;
            border: 1px solid white;
            background-color: #2e2e2e;
            color: #e0dede;
            border-radius: 3px;
            font-size: 1.2vw;
        }
    }
    button{
        margin-top: 5%;
        width: 90%;
        padding: 3%;
        border: 0;
        background-color: #f99a56;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        color: #2e2e2e;
        font-size: 1.3vw;
        transition: 0.3s;
        margin-bottom: 5%;
    }
    button:hover{
        background-color: #f9822d;
    }
}

.avail-tickets,.ticket-buy{
    margin-top: 4%;
    padding: 2%;
    background-color: #292929;
    color: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    h2{
        color: white;
        text-align: center;
        width: 300px;
        margin: auto;
    }
    .map-tickets{
        display: flex;
        flex-wrap: wrap;
        margin-top: 2%;
        .no-ticket-card{
            width: 20%;
            background-color: #e0dede;
            padding:2% 2% 4% 2%;
            border-radius: 5px;
            position: relative;
            color: #161616;
            text-align: left;
            font-weight: bold;

            .circle{
                padding: 4%;
                background-color: #161616;
                position: absolute;
                top: 10%;
                right: 5%;
                border-radius: 50%;
            }

        }
        .card-2{
            background-color: #161616;
            color: #e0dede;
            .circle{
                background-color: #e0dede;
            }
        }

        .ticket-card{
            width: 300px;
            position: relative;
            padding:0.5% 2% 0.5% 0%;
            color: #303030;
            box-shadow: 0px 0px 2px black;
            background-color: #e0dede;
            border-radius: 5px;
            text-align: center;
            margin-right: 20px;
            margin-bottom: 20px;
            transition: 0.3s;
            .dlt-icon{
                cursor: pointer;
                color: #f82525;
                transition:0.3s;
                position: absolute;
                right: 5%;
                top: 10%;
                text-shadow: 1px 1px 2px red;
            }
            .dlt-icon:hover{
                scale: 1.1;
            }
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
                background-color: #2e2e2e;
                padding: 4%;
                border-radius: 5px;
                box-shadow: 0px 0px 1px black;
                z-index: 6;
                color: white;
                font-size: 0.8vw;
                text-align: left;
                
            }

            h4{
                color: #2e2e2e;
                width: 68%;
                font-weight: normal;
                margin-left: 12%;
                margin-bottom: 2%;
                background-color: #e0dede;
                border-radius: 4px;
                padding: 2%;
                padding-left: 15%;
                text-align: left;
            }
        }

    }
}

.ticket-buy{
    background-color: #e0dede;
    margin-top: 0;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: 5%;
    h2{
        width: 600px;
        color: #292929;
    }
    .map-tickets{
        .ticket-card{
            background-color: #292929;
            color: #e0dede;
        }
    }
}
`