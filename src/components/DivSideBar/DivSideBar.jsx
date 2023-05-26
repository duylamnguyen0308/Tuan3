import React from "react";
import { styled } from "styled-components";

const DivSideBarStyled = styled.div`
            display: flex;
            margin-bottom: 30px;
            align-items: center;
            .icon{
                margin-right: 20px;
            }
    `
export const DivSideBar = ({ img, text, }) => {
    return <DivSideBarStyled>
        <img className="icon" src={img} alt="img" />
        <div className="text">{text}</div>
    </DivSideBarStyled>
}