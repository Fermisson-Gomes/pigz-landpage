function DetailsCard(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <h4>{props.subTitle}</h4>
      <p>{props.description}</p>
      <h3>{props.info}</h3>
      <div>
        <button>{props.button}</button>
      </div>
    </section>
  )
}

export default DetailsCard