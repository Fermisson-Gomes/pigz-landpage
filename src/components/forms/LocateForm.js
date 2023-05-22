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
    let { value } = event.target;
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
    const { formValues, setFormValues } = formContext
    const newValues = { ...formValues, localizacao: { cep, estado, cidade, endereco, numero, complemento }, local: false, estabelecimento: true }
    setFormValues(newValues)
  }

  return (
    <section class="form">
      <div class="form-title">
        <h3 id='title'>Onde fica a sua loja?</h3>
      </div>
      <form>
        <div class="input">

          <label htmlFor='cep_input' >
            Cep
          </label>
          <input
            type='text'
            placeholder='00000-00'
            id='cep_input'
            value={cep}
            onChange={handleChange}
          />
        </div>
        <div class="pair-input">
          <div class="input small">
            <label htmlFor='estado_select'>
              Estado
            </label>
            <select
              id='estado_select'
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="" disabled hidden>UF</option>
            </select>
          </div>
          <div class="input great">

            <label htmlFor='cidade_select'>
              Cidade
            </label>
            <select
              id='cidade_select'
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            >
              <option value="" disabled hidden>selecione</option>
            </select>
          </div>
        </div>
        <div class="input">
          <label>
            Endereço
          </label>
          <input
            type='text'
            placeholder='Avenida Maringa'
            id='endereço_input'
            value={endereco}
            onChange={handleChange}
          />
        </div>
        <div class="pair-input">

          <div class="input small">
            <label>
              Numero
            </label>
            <input
              type='text'
              placeholder='123'
              id='numero_input'
              value={numero}
              onChange={handleChange}
            />
          </div>
          <div class="input great">

            <label>
              Complemento
            </label>
            <input
              type='text'
              placeholder='casa, lote'
              id='complemento_input'
              value={complemento}
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="form-button" id="button">
          <button type="button" onClick={handleClick}>Proximo</button>
        </div>
      </form>
    </section>
  )
}