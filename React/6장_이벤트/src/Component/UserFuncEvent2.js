// 함수형 컴포넌트에서 useState 사용하기
// event.target.name을 활용하여 input 여러 개를 관리하기

import React, { useState } from "react";

const EventPractice2 = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값으로 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
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
        placeholder="User name"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="type something"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  );
};

export default EventPractice2;