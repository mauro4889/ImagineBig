import styled from "styled-components";


export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (min-width: 767px){
        text-align: start;
        justify-content: space-between;
    }
    img{
        width: 50%;
        box-shadow: 4px 5px 13px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 4px 5px 13px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 4px 5px 13px 0px rgba(0,0,0,0.75);
        border-radius: 5px;
        @media (min-width: 767px){
            width: 45%;
        }
        @media (min-width: 1023px){
            width: 35%;
        }
    }
    .containerInfo{
        width: 45%;
        margin-left: 5px;
        h3{
            font-size: 12px;
            @media (min-width: 1023px){
                font-size: 18px;
            }
        }
        .id{
        font-size: 10px;
        @media (min-width: 767px){
            font-size: 12px;
        }
    }
        span{
            font-weight: bold;
        }
    }
`