import React, { useState, createContext, useRef } from 'react'
import Form from './signup_page/Form'
import Footer from './signup_page/Footer'
import FongControlbox from './signup_page/FontControlbox'
import Modal from './signup_page/Modal'

const initialFormDate = {
  id: '',
  pw: '',
  confirmPw: '',
}
export const FormContext = createContext({
  formDate: initialFormDate,
  setFormDate: () => { },
})


const Signup = () => {
  const [formData, setFormData] = useState(initialFormDate);
  const modalRef = useRef(null);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <section className="form-wrapper">
        <Form modalref={modalRef} />
        <Footer />
      </section>
      <FongControlbox />
      <Modal ref={modalRef} />
    </FormContext.Provider>
  );

};

export default Signup;