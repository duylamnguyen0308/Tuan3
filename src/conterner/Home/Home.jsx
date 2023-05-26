import { Button } from 'components/Button'
import { Page } from 'components/Page'
import plusIcon from 'assets/plus.svg'
import rightArrow from 'assets/right-arrow.svg'
import React from 'react'
import { styled } from 'styled-components'
import { SideBar } from 'components/SideBar'
const AppWrapper = styled.div`
    text-align: center;
    background-color: red;
     /* width: 1920px;
    height: 1080px;  */
`;                                                              
const Home = () => {
    return (
        <div>
        <AppWrapper>
         <Page title={"Revenue"} amount="5.00" percent={12.3}></Page>
            <Page title={"ROI"} amount=" 14.2" percent={-14.02}></Page>
            <Page title={"Spending"} amount="2.00" percent={8.1}></Page>
            <Page title={"Estimated"} amount="" percent={3.2}></Page>                         
        </AppWrapper>
        </div>
    )
}

export default Home