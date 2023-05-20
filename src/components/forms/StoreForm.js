import React, { useContext, useState } from 'react';
import FormContext from '../../context/FormContext';

export default function StoreForm() {
  const [nome, setNome] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [tipo, setTipo] = useState("")

  const formContext = useContext(FormContext)


  const handleChange = (event) => {
    let {value} = event.target;
    if (event.target.id === "nome_input") {
      setNome(value)
    }
    if (event.target.id === "cnpj_input") {
      setCnpj(value)
    } 
  }

  const handleClick = () => {
    const {formValues, setFormValues } = formContext
    const newValues = {...formValues, loja: {nome, cnpj, tipo}}
    setFormValues(newValues)
  }

  return (
    <section>
      <h2>Me conta um pouco sobre a sua loja</h2>
      <form>
      <label>
        Nome da loja
          <input
            type='text'
            placeholder='padaria do josé'
            id='nome_input'
            value={nome}
            onChange={handleChange}
          />
        </label>
        <label>
        CNPJ da loja
          <input
            type='text'
            placeholder='12.345.678/0001-99'
            id='cnpj_input'
            value={cnpj}
            onChange={handleChange}
          />
        </label>
        <label>
        Tipo de loja
          <select
            id='tipo_select'
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="" disabled hidden>selecione</option>
          </select>
        </label>
        <div>
          <button type="button" onClick={handleClick}>Confirmar</button>
        </div>
      </form>
    </section>
  )
}