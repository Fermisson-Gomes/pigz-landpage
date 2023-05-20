import logoSvg from  "../utilities/img/Pigz Gestão - Logo.svg"

function Header() {
  return (
    <header>
      <img src={logoSvg} alt="logo-pigz" />
      <div>
        <p>Já sou parceiro</p>
      </div>
    </header>
  )
}

export default Header