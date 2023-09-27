// 클래스형 컴포넌트 및 props 사용하기
// Path: src/userComponent/ClassComponent.js

import React, { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
    render() {
        const { name, age, children } = this.props;
        return (
            <>
                나의 이름은 "{name}" 이며, 나이는 "{age}" 입니다.
                <br/>
                children 값은 "{children}" 입니다.
            </>
        );
    }
};


class MyClassComponent extends Component {
    static defaultProps = {name: "미등록자", age:"--"};
    static propTypes = {name: PropTypes.string.isRequired };

    render() {
        const { name, age, children } = this.props;
        return (
            <>
                나의 이름은 "{name}" 이며, 나이는 "{age}" 입니다.
                <br/>
                children 값은 "{children}" 입니다.
            </>
        );
    }
};

ClassComponent.defaultProps = {
    name: "미등록자",
    age: "--",
};

export { ClassComponent, MyClassComponent };