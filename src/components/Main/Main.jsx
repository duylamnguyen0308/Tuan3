import { styled } from "styled-components"
import { Page } from "components/Page"
import ImgBackground from "assets/Rectangle 13.png"

const MainStyled = styled.div`
    background-color: #E0FFFF;
    margin-top: 120px;
    display: flex;
    .BangTin{
        width:900px;
        height: 487px;
        background-image: url{ImgBackground};
    }
    .imgs{
        height: 480px;
        width: 825px;
        border-radius: 12px;
        position: relative;
        background-size: cover;
        margin-left: 50px;
    }
    .TuaDe{
        position: absolute;
        transform: translate(145px , -410px);
        color: white;
        font-size: 25px;
        width: 35%;
    }
    .Discover{
        border-radius: 40px;
        flex-direction: row;
        align-items: flex-start;
        padding: 12px 30px;
        gap: 10px;
        width: 128px;
        height: 46px;
        background: #FFFFFF;
        margin-right: 10px;
        color: blueviolet;
        font-weight: 600px;
    };
    .Create{
        width: 100px;
        height: 46px;
        padding: 12px 30px;
        border-radius: 40px;
        background-color: transparent;
        border: 1px solid  white;
        gap: 10px;
        color: white;
    };
    .BangDo{
    display: flex;
    align-items: center;
    
    width: 736px;
    height: 424px;

    }
    .top{
        margin-right: 50px;
        
    }
`
export const Main = () => {
    return <MainStyled>
<div className="BangTin">
            <img className="imgs" src={ImgBackground} alt="" />
            <div className="TuaDe">
                <h1>Discover, Create and Sell Your Own NFT.</h1>
                <button className="Discover">Discover</button>
                <button className="Create">Create</button>
            </div>
        </div>
        <div className="BangDo">
            <div className="top">
            <Page title={"Revenue"} amount="5.00" percent={12.3}></Page>
            <Page title={"ROI"} amount=" 14.2" percent={-14.02}></Page>
            </div>
            <div>
            <Page title={"Spending"} amount="2.00" percent={8.1}></Page>
            <Page title={"Estimated"} amount="" percent={3.2}></Page>
            </div>
        </div>              
    </MainStyled>
}