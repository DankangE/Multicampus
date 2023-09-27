import { useEffect, useRef, useContext } from "react";
import { FormContext } from "../Signup";

var ID_REGEX = new RegExp('^[a-z0-9_-]{4,12}$');
var PW_REGEX = new RegExp('^[a-zA-Z0-9]{6,16}$');

const ERROR_MSG = {
  required: '필수 입력 항목입니다.',
  invalidId: '아이디는 4~12자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '비밀번호는 6~16자 영문 대 소문자, 숫자로만 입력해주세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
};

const FormInput = ({ id, label, inputProps, errorData, setErrorData }) => {
  const inputRef = useRef(null);
  const { formData, setFormData } = useContext(FormContext);

  const checkRegex = (inputId) => {
    let result;
    const value = formData[inputId];

    if (value.length === 0) {
      result = 'required';
    } else {
      switch (inputId) {
        case 'id':
          result = ID_REGEX.test(value) ? true : 'invalidId';
          break;
        case 'pw':
          result = PW_REGEX.test(value) ? true : 'invalidPw';
          checkRegex('confirmPw');
          break;
        case 'confirmPw':
          result = value === formData['pw'] ? true : 'invalidConfirmPw';
          break;
        default:
          return
      }
    }
    // react에서는 setState를 비동기적으로 처리하기 때문에 아래와 같이 함수형으로 처리해야 한다.(최신자료 참조)
    setErrorData((prev) => ({ ...prev, [inputId]: result }));
  }

  useEffect(() => {
    if (id === 'id') {
      // console.log(inputRef);
      inputRef.current.focus();
      // input.focus();
    }
  }, []);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        // style={{ color: 'blue' }}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="shadow border rounded w-full py-2 px-3 text-gray-700"
        ref={inputRef}
        value={formData[id]}
        onChange={(e) => {
          // setFormData({ ...formData, [id]: e.target.value });
          setFormData((prev) => ({ ...prev, [id]: e.target.value }));   // 최신자료 참조(Form.jsx의 setFormData의 최신값)
        }}
        // onBlurCapture={() => console.log(checkRegex())} // onBlurCapture: focus가 해제되었을 때 콘솔에 출력
        onBlurCapture={() => checkRegex(id)}
        {...inputProps}
      />
      {/* 에러메시지 출력 */}
      <div className="mt-1 mb-3 text-xs text-red-500">
        {errorData[id] && ERROR_MSG[errorData[id]]}
      </div>
    </div>
  );
};

export default FormInput;