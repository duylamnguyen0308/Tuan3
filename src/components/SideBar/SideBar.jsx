import { styled } from "styled-components"
import Frame from "assets/Frame.svg"
import category from "assets/category.png"
import shop from "assets/shop.svg"
import { NavLink } from "react-router-dom";
import { DivSideBar } from "components/DivSideBar";
import judge from "assets/judge.png"
import buycrypto from"assets/buy-crypto.png"
import wallet from "assets/wallet-3.png"
import love from "assets/lovely.png"
import clock from "assets/clock.png"
import setting from "assets/setting.png"
import moon from "assets/Icon.png"
import plusIcon from 'assets/plus.svg'
import rightArrow from 'assets/right-arrow.svg'
import { Button } from "components/Button";
const SideBarStyled = styled.div`
    background-color: white ;
  height: 100%;
  width: 250px;
  padding: 20px;
  .Title{
    display: flex;
    font-size: 13px;
    align-items: center;
    margin-bottom: 30px;
  }
  .Frame{
    width: 68px;
    height: 113px;
  }
  .button-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 13px;
      color: #27262E;
    }
`

export const SideBar = () => {
  return <SideBarStyled>
    <div className="Title">
      <img className="Frame" src={Frame} alt="" srcset="" />
      <div className="Menu">
        <h1>MyNFT</h1>
        <div>NTF Marketplace</div>
      </div>

    </div>
    <div>
        <DivSideBar text="Dashboard" img={category}></DivSideBar>
      < DivSideBar text="Market" img={shop}></DivSideBar>
        <DivSideBar text="Active Bids" img={judge}></DivSideBar>
      <div>Profile</div>
        <DivSideBar text="My Portfolio" img={buycrypto}></DivSideBar>
        <DivSideBar text="Wallet" img={wallet}></DivSideBar>
        <DivSideBar text="Favourites" img={love}></DivSideBar>
        <DivSideBar text="History" img={clock}></DivSideBar>
        <DivSideBar text="Settings" img={setting}></DivSideBar>
      <div>Other</div>
        <DivSideBar text="Light Mode" img={moon}></DivSideBar>
    </div>
    <Button style={{
                width: 196,
                height: 49,
                textColor: "black",
                borderRadius: "12px",
                backgroundColor: "white"
            }}>
                <div className="button-content">
                    <img src={plusIcon} alt="plus-icon"></img>
                    Top Up Balance
                    <img src={rightArrow} alt="arrow-icon"></img>
                </div>
            </Button>
  </SideBarStyled>
}