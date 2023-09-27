// 이벤트: DOM 요소에만 이벤트를 설정할 수 있다.
// 일반적: <input type="button" onclick="함수 호출"></input>
// 리액트: <input type="button" onClick={함수 호출}></input>
// 리액트 컴포넌트에는 자체적으로 이벤트를 설정할 수 없다.
// <MyComponent onClick={함수}>
// => MyComponent에서 onClick이벤트를 받아서 사용할 수 있도록 props로 설정해야한다.

import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: "",
    };
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="type" value={this.state.message}
                    onChange={(env) => {
                        // console.log(env);
                        this.setState({
                            message: env.target.value,
                        });
                    }}/>
                {/* 버튼을 이용한 onClick 이벤트 */}
                <button onClick={() => {
                    alert(this.state.message);
                    this.setState({
                        message: "",
                    });
                }}>확인
                </button>
            </div>
        );
    }
}

export default EventPractice;