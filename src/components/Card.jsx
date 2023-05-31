export default function Card(props) {
  return (
    <div className='card'>
      <h4>Hola {props.nombre} !</h4>
      <h4>Sabemos que tu color favorito es {props.color}</h4>
    </div>
  )
}
