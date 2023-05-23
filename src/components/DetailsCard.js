function DetailsCard(props) {
  return (
    <section class="details-card">
      <h2>{props.title}</h2>
      <h4>{props.subTitle}</h4>
      <div>
      {props.description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      </div>
      <h3>{props.info}</h3>
      <div class="button">
        <button>{props.button}</button>
      </div>
    </section>
  )
}

export default DetailsCard