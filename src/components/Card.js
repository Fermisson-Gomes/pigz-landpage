function Card(props) {
  return (
    <div class="card">
      <img src={props.img} alt={props.name}/>
      <h3>{props.title}</h3>
      <p>{props.p}</p>
    </div>
  )
}

export default Card