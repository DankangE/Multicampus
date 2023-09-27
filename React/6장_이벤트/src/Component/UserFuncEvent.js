// 1. 함수형 컴포넌트에서 이벤트 사용하기
// 2. useState를 사용하여 input 상태 관리하기

import React, { useState } from "react";

const EventPractice = () => {
  // useState를 사용하여 input 상태 관리하기
  // useState의 인자에는 상태의 초깃값을 넣어준다.
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  // 이벤트 함수
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  );
};

export default EventPractice;