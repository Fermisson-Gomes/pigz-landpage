import React, { useState } from 'react';
import { grupo1, grupo2, grupo3, grupo4 } from "../utilities/utils"

function InfoContent() {
  const [visibleDiv, setVisibleDiv] = useState(1)

  let conteudo
  if (visibleDiv === 1) {
    conteudo = <div class="info-card">
      <h2>Pigz Marketplace</h2>
      <div class="info">
        <div>
        <p>Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site.<br /> Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.</p>
        </div>
        <div class="info-img">
        <img src={grupo1} alt="grupo de mascaras 1" />
        </div>
      </div>
    </div>
  } else if (visibleDiv === 2) {
    conteudo = <div class="info-card">
      <h2>Pigz Gestão</h2>
      <div class="info">
        <div>
        <p>Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.</p>
        </div>
        <div class="info-img">
        <img src={grupo2} alt="grupo de mascaras 2" />
        </div>
      </div>
    </div>
  } else if (visibleDiv === 3) {
    conteudo = <div class="info-card">
      <h2>Gestão de entregadores</h2>
      <div class="info">
        <div>
        <p>A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.<br /> Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.</p>
        </div>
        <div class="info-img">
        <img src={grupo3} alt="grupo de mascaras 1" />
        </div>
      </div>
    </div>
  } else if (visibleDiv === 4) {
    conteudo = <div class="info-card">
      <h2>Pagamento on-line</h2>
      <div class="info">
        <div>
        <p>Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.</p>
        </div>
        <div class="info-img">
        <img src={grupo4} alt="grupo de mascaras 1" />
        </div>
      </div>
    </div>
  }

  const handleClickChange = () => {
    if (visibleDiv === 4) {
      setVisibleDiv(1)
    } else {
      setVisibleDiv(visibleDiv + 1)
    }
  }

  return (
    <section onClick={handleClickChange}>
      <div class="info-indicator">
        <div style={{ backgroundColor: (visibleDiv === 1) ? "#FA641E" : "#EEEEEE" }}> </div>
        <div style={{ backgroundColor: (visibleDiv === 2) ? "#FA641E" : "#EEEEEE" }}> </div>
        <div style={{ backgroundColor: (visibleDiv === 3) ? "#FA641E" : "#EEEEEE" }}> </div>
        <div style={{ backgroundColor: (visibleDiv === 4) ? "#FA641E" : "#EEEEEE" }}> </div>
      </div>
      {
        conteudo
      }
    </section>
  )
}

export default InfoContent