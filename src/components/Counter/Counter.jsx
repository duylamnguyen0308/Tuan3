import React from "react";
import { styled } from "styled-components";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
    padding: 4em;
    background-color: aqua;
    .chamthan{
        color: blue;
    }
    color: ${props => props.counter > 5 ? "blue": "red"} ;
`;

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        // setTimeout(() => { this.setState({ loading: false }); }, 4000);
        console.log("aaaaa")
    }
    onDecrease = () => {
        this.setState({ counter: this.state.counter - 1 });
    }
    onIncrease = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        console.log('renderrrr')
        return (
            <div>
                {
                    this.state.loading ?
                        <div>loadinggg</div> :
                        <>
                            <Wrapper counter={this.state.counter}>
                                <Title>hello world <span className={"chamthan"}>!!!!</span>
                                </Title>
                                <button onClick={() => this.onDecrease()}>-</button>
                                <span >{this.state.counter}</span>
                                <button onClick={() => this.onIncrease()}>+</button>
                            </Wrapper>

                        </>
                }
            </div>
        )
    }
}
