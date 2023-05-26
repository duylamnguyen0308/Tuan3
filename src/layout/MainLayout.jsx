import { SideBar } from "components/SideBar"
import { styled } from "styled-components"
import { Header } from "components/Header"
import { Main } from "components/Main"
import { Main2 } from "components/Main2"
const MainLayoutStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    .Right{
        flex: 1;
        height: 100%;
        background-color: #E0FFFF;
    }
`

const MainLayout = () => {
    return <MainLayoutStyled>
        <SideBar></SideBar>
        <div className="Right" >
            <Header></Header>
            <Main></Main>
            <Main2></Main2>
        </div>
    </MainLayoutStyled>
}
export default MainLayout