import { styled } from "styled-components";

export const HomePageDiv = styled.div`

.runway{
    display: grid;
    grid-template-columns: 15% 55% 30%;
    background-color: #66bb6a;
    h1{
        margin-left: 2%;
        display: flex;
        height: 15%;
        border-radius: 5px;
        background-color: #ffffff;
        align-items: center;
        img{
            width: 30%;
        }
        span{
            margin-left: 2%;
            font-family: 'Lobster', cursive;
            font-weight: normal;
            color: #313131;
            /* font-family: 'Permanent Marker', cursive; */
            /* font-size: 2vw; */
        }
    }
    img{width: 100%;}
    .right-part{
        img{
            width: 100%;
            margin-top: 5%;
            margin-left: -5%;
        }
        a{
            text-decoration: none;
        }

        .buttons{
            position: relative;
            border: 4px solid black;
            width: 40%;
            margin-left: -3.5%;
            /* padding: 2%; */
            margin-top: 8%;
            cursor: pointer;
            color: transparent;
            transition: 0.3s;
        }
        .buttons::before{
            position: absolute;
            content: "Search Tickets";
            top: -40%;
            left: -5.5%;
            width: 100%;
            height: 100%;
            border: 4px solid black;
            color: black;
            padding-top: 2%;
            text-align: center;
            background-color: white;
            font-weight: bold;
            transition: 0.3s;
        }
        .login-signup::before{
            content: 'Login / Signup';
        }
        .explore::before{
            content: 'Explore';
        }
        .logout::before{
            content: 'logout';
        }

        .buttons:hover::before{
            left: -2.5%;
            top: -25%;
        }
    }
}

@media (max-width:1280px) {
    .runway{
        .right-part{
            .buttons{
                width: 50%;
            }
        }
    }
}

@media (max-width:1080px) {
    .runway{
        .right-part{
            .buttons{
                width: 60%;
            }
        }
    }
}

@media (max-width:820px) {
    
    .runway{
        h1{
            padding-left: 50%;
            margin-left: 5%;
            position: relative;
            z-index: 4;
            width: 120%;
            img{
                width: 30%;
            }
            span{
                font-size: 3vw;
            }
        }
        img{
            position: relative;
            z-index: 0;
            margin-left: -40%;
            width: 200%;
        }


        .right-part{
            img{
                width: 120%;
                margin-left: -25%;
            }
            .buttons{
                width: 70%;
                padding: 0%;
                margin-left: -22%;
            }
            
        }
    }
}
@media (max-width:520px) {
    
    .runway{
        h1{
            padding-left: 80%;
            margin-left: 20%;
            width: 120%;
            img{
                width: 35%;
            }
            span{
                font-size: 5vw;
            }
        }

        img{
            margin-left: -60%;
            width: 300%;
        }


        .right-part{
            img{
                width: 200%;
                margin-left: -105%;
                margin-top: 20%;
            }
            .buttons{
                width: 120%;
                margin-top: 20%;
                margin-left: -103%;
            }
            
        }
    }
}

`