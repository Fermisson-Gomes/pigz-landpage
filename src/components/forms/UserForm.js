import React, { useContext, useState } from 'react';
import FormContext from "../../context/FormContext"
import { PhoneInput } from 'react-contact-number-input';

function UserForm() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  const formContext = useContext(FormContext)

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const emailAndNameChange = ({target: { value, name}}) => {
    if (name === "name_input") {
      setNome(value)
    }
    else if (name === "email_input") {
      setEmail(value)
    }
  }

  const telChange = (event) => {
    setTelefone(event.phoneNumber)
  }

  const handleClick = () => {
    const {formValues, setFormValues } = formContext
    if (validateEmail(email)) {
      const newValues = {...formValues, user: {nome, email, telefone}, current: false, local: true}
      setFormValues(newValues)
    } else {
      alert("formato de email invalido")
    }
  }

  return (
    <section>
      <div>
        <h2>Quero vender no Pigz</h2>
        <p>Dê o primeiro passo para aumentar suas vendas</p>
      </div>
      <form>
        <div>
          <label htmlFor="name_input">
            Nome
            <input
              type="text"
              name="name_input"
              id="name_input"
              onChange={emailAndNameChange}
              placeholder="manuel gomes"
              value={nome}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email_input">
            E-mail
            <input
              type="email"
              name="email_input"
              id="email_input"
              placeholder="manuel@gmail.com"
              value={email}
              onChange={emailAndNameChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="tel_input">
            telefone
            <PhoneInput
              countryCode="br"
              onChange={telChange}
              placeholder="(63) 92354-6789"
              value={telefone}
            />
          </label>
        </div>
        <span>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</span>
        <div>
          <button type="button" onClick={handleClick}>continuar</button>
        </div>
      </form>
    </section>
  )
}

export default UserForm