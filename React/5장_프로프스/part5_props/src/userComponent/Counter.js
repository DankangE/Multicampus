import React, { Component } from "react";

class MyCounter extends Component {
    constructor(props) {
        super(props);
        // state : 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
        this.state = {
            number: 0,
        };
    }

    render() {
        const {number} = this.state;
        return (
            <div>
                <h1>Count: {number}</h1>
                <button 
                    onClick={() => {
                        this.setState(prevState => ({
                            number: number + 1
                        }));
                        this.setState(prevState => ({
                            number: this.state.number + 1
                        }));
                    }} 
                >
                    +1
                </button>
            </div>
        );
    }
};

export default MyCounter;