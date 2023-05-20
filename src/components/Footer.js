import {
  pigzLogo,
  apple,
  google,
  faleConosco,
  facebook,
  instagram,
  linkedin,
  youtube,
  orange
} from '../utilities/utils'

function Footer() {
  return (
    <footer>
      <img src={pigzLogo} alt="pigz logo"/>
      <p>Tudo que você precisa.</p>
      <h4>Baixe o APP</h4>
      <img src={apple} alt="apple selo"/>
      <img src={google} alt="google selo"/>
      <h4>Pigz</h4>
      <p>Sobre o Pigz</p>
      <p>Portal do Parceiro</p>
      <p>Quero ser um Pigz Partner</p>
      <img src={faleConosco} alt="fale conosco" />
      <h4>Fale conosco</h4>
      <p>falecom@pigz.com.br</p>
      <p>(95) 3224-2603</p>
      <h4>Pigz nas redes</h4>
      <div>
        <img src={linkedin} alt="linkedin icon" />
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={youtube} alt="youtube icon" />
      </div>
      <hr/>
      <div>
        <span>Nossos termos</span>
        <span>Privacidade</span>
        <span>Ajuda</span>
      </div>
      <div>
        <p>© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
        <img src={orange} alt="orange logo" />
      </div>
    </footer>
  )
}

export default Footer