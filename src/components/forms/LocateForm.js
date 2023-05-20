import React, { useContext, useState } from 'react';
import FormContext from '../../context/FormContext';

export default function LocateForm() {
  const [cep, setCep] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")

  const formContext = useContext(FormContext)

  const handleChange = (event) => {
    let {value} = event.target;
    if (event.target.id === "cep_input" & value.length <= 8) {
      value = value.replace(/\D/g, '');
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
      setCep(value);
    }
    if (event.target.id === "endereço_input") {
      setEndereco(value);
    }
    if (event.target.id === "numero_input") {
      setNumero(value);
    }
    if (event.target.id === "complemento_input") {
      setComplemento(value);
    }

  }

  const handleClick = () => {
    const {formValues, setFormValues } = formContext
    const newValues = {...formValues, localizacao: {cep, estado, cidade, endereco, numero, complemento}, local: false, estabelecimento: true}
    setFormValues(newValues)
  }

  return (
    <section>
      <h2>Onde fica a sua loja?</h2>
      <form>
        <label htmlFor='cep_input' >
          Cep
          <input
            type='text'
            placeholder='00000-00'
            id='cep_input'
            value={cep}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='estado_select'>
          Estado
          <select
            id='estado_select'
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="" disabled hidden>UF</option>
          </select>
        </label>
        <label htmlFor='cidade_select'>
          Cidade
          <select
            id='cidade_select'
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          >
            <option value="" disabled hidden>selecione</option>
          </select>
        </label>
        <label>
          Endereço
          <input
            type='text'
            placeholder='Avenida Maringa'
            id='endereço_input'
            value={endereco}
            onChange={handleChange}
          />
        </label>
        <label>
          Numero
          <input
            type='text'
            placeholder='123'
            id='numero_input'
            value={numero}
            onChange={handleChange}
          />
        </label>
        <label>
          Complemento
          <input
            type='text'
            placeholder='casa, lote'
            id='complemento_input'
            value={complemento}
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="button" onClick={handleClick}>Proximo</button>
        </div>
      </form>
    </section>
  )
}