import React, { useState } from "react";
import Header from "./components/Header";
import FormContent from "./components/FormContent";
import pigz from "./utilities/img/Grupo 3535.png";
import { print, pigzSvg2, smartphone, store, wht } from "./utilities/utils";
import Card from "./components/Card";
import FormContext from "./context/FormContext";
import DetailsCard from "./components/DetailsCard";
import InfoContent from "./components/InfoContent";
import Footer from "./components/Footer";
import "./css/main.css"

function App() {
  const desc1 = [
    "Pigz Marketplace",
    "Página exclusiva",
    'Pigz Gestão Desktop e Mobile',
    'Gestão de entregadores',
    'Vias de impressão personalizáveis'
  ]
  const desc2 = [
    "Aceite Pix e Cartão de Crédito",
    "Antecipação Pix automática",
    "Não dependa de maquininha de cartão",
    "Segurança para receber pedidos",
    "Agilidade para entregar"
  ]
  const [formValues, setFormValues] = useState({
    user: {
      nome: "",
      email: "",
      telefone: ""
    },
    localizacao: {
      cep: "",
      estado: "",
      cidade: "",
      endereco: "",
      numero: "",
      complemento: "",
    },
    loja: {
      nome: "",
      cnpj: "",
      tipo: ""
    },
    current: true,
    local: false,
    estabelecimento: false
  })

  return (
    <div>
      <Header />
      <main class="main">
        <FormContext.Provider value={{ formValues, setFormValues }} >
          <FormContent />
        </FormContext.Provider>
        <img class="pigz-image" src={pigz} alt="pigz pigz" />
        <div class="second">
          <p id="p-second">Você tem um novo Pigzdido!</p>
          <div class="card-content">

          <Card img={store} title="Marketplace" p="Pra sua loja vender mais" />
          <Card img={smartphone} title="É fácil e rápido" p="Fazer um pedido no Pigz" />
          <Card img={pigzSvg2} title="Pigz Gestão" p="Você no controle, sempre" />
          <Card img={print} title="Vias de impressão" p="Personalizáveis" />
          </div>
          <div class="second-plan">
          <h2>Tudo que você precisa por apenas R$199/mês</h2>
          <p>Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.</p>
          </div>
          <InfoContent />
          <div class="third-plan">
          <h2>E mais: suporte que realmente funciona!</h2>
          <p>Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.</p>
          </div>
          <DetailsCard
            title="Pigz"
            subTitle="Tudo o que você precisa"
            description={desc1}
            info="R$199/mês"
            button="Vender no Pigz agora"
          />
          <DetailsCard
            title="Pagamento On-line"
            subTitle="Segurança e agilidade"
            description={desc2}
            info="2,99% por transação"
            button="Saiba mais"
          />
          <div class="wht">
            <span>Fale com a Pigz</span>
            <img src={wht} alt="whatsapp icon" />
            <span><small>95</small>3224-2603</span>
          </div>
        </div>
        <Footer />
        <hr id="last" />
      </main>
    </div>
  );
}

export default App;
