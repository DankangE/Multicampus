import './App.css'
import React, { useState, createContext, useRef } from 'react'
import Form from './components/Form'
import Footer from './components/Footer'
import FongControlbox from './components/FontControlBox'
import Modal from './components/Modal'

const initialFormDate = {
    id: '',
    pw: '',
    confirmPw: '',
}
export const FormContext = createContext({
    formDate: initialFormDate,
    setFormDate: () => {},
})

function App() {
    const [formData, setFormData] = useState(initialFormDate)
    const modalRef = useRef(null)
    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            <section className="form-wrapper">
                <Form modalref={modalRef} />
                <Footer />
            </section>
            <FongControlbox />
            <Modal ref={modalRef} />
        </FormContext.Provider>
    )
}

export default App
