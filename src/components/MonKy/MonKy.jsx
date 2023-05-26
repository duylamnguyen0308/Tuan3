import { styled } from "styled-components"

const MonKyStyled = styled.div`
    background-color: white;
    padding: 10px 10px;
    margin-right: 90px;
    margin-left: 50px;
    display: block;
    border-radius:10px ;
`
    

export const MonKy = ({ img, h1, logo, text1,text2,text3,text4 }) => {
    return <MonKyStyled>
        <div><img src={img} alt="" /></div>
        <h1>{h1}</h1>
        <div>{text1}</div>
        <img src={logo} alt="" />
        <div>{text2}</div>
        <div>{text3}</div>
        <div>{text4}</div>
    </MonKyStyled>
}