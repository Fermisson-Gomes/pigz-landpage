import React, { useContext } from "react";
import FormContext from "../context/FormContext";
import burger from "../utilities/img/burguer_2.png"
import UserForm from "./forms/UserForm"
import LocateForm from "./forms/LocateForm";
import StoreForm from "./forms/StoreForm";
import "../css/form.css"

function FormContent() {
  const formContext = useContext(FormContext)
  const { current, local, estabelecimento } = formContext.formValues;

  let conteudo = null
  if (current === true) {
    conteudo = <UserForm />
  } else if (local === true) {
    conteudo = <LocateForm />
  } else if (estabelecimento === true) {
    conteudo = <StoreForm />
  }

  return (
    <section class="form-content">
      <div class="form-intro">
        <div class="form-text">
          <h3>Pigz: tudo que você precisa pra vender ainda mais!</h3>
          <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
        </div>
        <div class="form-img">
          <img src={burger} alt="burger_img" />
        </div>
      </div>
      <div>
        {
          conteudo
        }
      </div>
    </section>
  )
}

export default FormContent