import React, { Component } from "react";

class REventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  //*** 이벤트 함수 */
  // 값 변경 이벤트 함수
  handleChange = (evn) => {
    // 화살표 함수로 메서드를 정의하면 this를 바인딩할 필요가 없다.
    this.setState({
      [evn.target.name]: evn.target.value, //안에 입력한 레퍼런스가 가리키고 있는 실제 값
    });
  };

  // 버튼 클릭 이벤트 함수
  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  // 키보드 입력 이벤트 함수
  handleKeyPress = (evn) => {
    if (evn.key === "Enter") {
      this.handleClick();
    }
  };

  handFocus = (evn) => {
    if (evn.key === "Enter") {
      alert("포커스 이벤트 발생");
    }
  };

  // *** 렌더링 */
  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handFocus}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확 인</button>
      </div>
    );
  }
}

export default REventPractice;