import logoSvg from  "../utilities/img/Pigz Gestão - Logo.svg"

function Header() {
  return (
    <header class="header">
      <img class="header-img" src={logoSvg} alt="logo-pigz" />
      <div class="header-div">
        <p>Já sou parceiro</p>
      </div>
    </header> 
  )
}

export default Header