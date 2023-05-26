import { styled } from "styled-components"
import { TopCreator } from "./TopCreator"
import monkey1 from "assets/Rectangle 8.png"
import monkey2 from "assets/Rectangle 9.png"
import { MonKy } from "components/MonKy/MonKy"
import Hinh1 from "assets/Ellipse 20.png"
import Hinh2 from "assets/Ellipse 21.png"

const Main2Styled = styled.div`
    display: flex;
    .Tong{
        width: 900px;
    }
    .trending{
    display: flex;
    width: 1500px;
    position: relative;
    }
    .Auction{
        margin-right:235px;
        margin-left: 50px;
        font-size: 24px;
    }
    .Click{
        margin-top: 23px;
    }
    .Art{
        border-radius:30px;
        padding: 5px 12px;
        margin-right: 35px;
        border: 1px solid  transparent;
        color: #6c00d1;
        background-color: #f6edff;
        font-size: 15px;
    }
    .music{
        border-radius:30px;
        padding: 5px 12px;
        margin-right: 35px;
        border: 1px solid  transparent;
        font-size: 15px;
    }
    .collec{
        border-radius:30px;
        padding: 5px 12px;
        margin-right: 35px;
        border: 1px solid  transparent;
        font-size: 15px;
    }
    .unity{
        border-radius:30px;
        padding: 5px 12px;
        border: 1px solid  transparent;
        font-size: 15px;
        margin-right: 50px;
    }
    .title{
        display: flex;
        align-items: center;
    }
    .Creator{
        background-color: white;
        border-radius: 16px;  
        padding: 30px 30px;
    }  
    .Top{
        font-size: 24px;
        margin-right: 200px;
    }
    .top-creator{
        display: flex;
        align-items: center;
        margin-bottom: 50px;
    }
    .id{
        margin-right:15px;
        width: 10%;
    }
    .img{
        margin-right:15px;
        width: 20%;
    }
    .infor{
        margin-right:120px;
        width: 55%;

    }
    .flw{
        border-radius: 20px;
        background-color: #ebd6ff;
        padding: 8px 12px;
        width: 120px;
        height: 37px;
        font-size: 12px;
        border: 1px solid  transparent;
        color: #5b00af
    }
    .Ape{
        position: relative;
    }
    .monkey{
        display: flex;
    }
`
export const Main2 = () => {
    return <Main2Styled>
        <div className="Tong">
            <div className="trending">
                <h1 className="Auction">Trending Auctions</h1>
                <div className="Click">
                    <button className="Art">Art</button>
                    <button className="music">Music</button>
                    <button className="collec">Collectibles</button>
                    <button className="unity">Utility</button>
                </div>
            </div>
            <div className="monkey">
                <MonKy img={monkey1} h1={"Ape In Love"} logo={Hinh1} tex1={"21,5K Likes"} text2={"@johnti60"} text3={"Current Bid"}></MonKy>
                <MonKy img={monkey2} h1={"Smilling Ape"} logo={Hinh2}></MonKy>
            </div>
        </div>
        <div className="Creator">
            <div className="title">
                <h1 className="Top">Top Creator</h1>
                <div>See All</div>
            </div>
            {TopCreator.map((valname) =>
                <div className="top-creator">
                    <div className="id">{valname.id}</div>
                    <div className="img">
                        <img src={valname.img} alt="" />
                    </div>
                    <div className="infor">
                        <div>{valname.namee}</div>
                        <div>{valname.mail}</div>
                    </div>
                    <button className="flw"> {valname.flw}</button>
                </div>
            )}
        </div>

    </Main2Styled>
}