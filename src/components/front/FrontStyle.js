import { styled } from "styled-components";

export const FrontPageDiv= styled.div`
    
    .anim-circle{
        width: 450px;
        height: 450px;
        margin: auto;
        margin-top: 8%;
        border-radius: 50%;
        position: relative;
        border: 4px solid black;
        overflow: hidden;
        .clouds-1{
            z-index: 2;
            position: absolute;
            width: 200%;
            bottom: -10%;
            animation: cloud-anim 3s linear 0s 1 normal forwards;
    
        }
        .flight-1{
            position: absolute;
            z-index: 3;
            width: 50%;
            animation: plane-anim 3s linear 0s 1 normal forwards;
        }

        @keyframes cloud-anim {
            0%{
                left: 0%;
            }
            100%{
                left: -90%;
            }
        }
        @keyframes plane-anim {
            0%{
                left: 0%;
                top: 45%;
            }
            20%{
                left: 10%;
                top: 45%;
            }
            
            40%{
                left: 15%;
                top: 45%;
            }
            
            60%{
                left: 20%;
                top: 45%;
                transform: rotate(0deg);

            }
            
            80%{
                left: 30%;
                top: 30%;
                transform: rotate(-10deg);
            }

            100%{
                left: 100%;
                top: 20%;
                transform: rotate(-25deg);
            }
        }
    }

    
    
    

`