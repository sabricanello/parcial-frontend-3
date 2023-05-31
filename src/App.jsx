import './App.css'

import Card from './components/Card'

import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState('')
  const [color, setColor] = useState('')
  const [error, setError] = useState('')

  const onChangeNombre = e => {
    setNombre(e.target.value)
  }

  const onChangeColor = e => {
    setColor(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!/^\S/.test(nombre)) {
      setError('Por favor chequea que la información sea correcta')
    } else if (nombre.length <= 3) {
      setError('Por favor chequea que la información sea correcta')
    } else if (color.length <= 6) {
      setError('Por favor chequea que la información sea correcta')
    } else {
      setError('Correcto')
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <label>ELIGE UN COLOR</label>
        <label htmlFor='nombre-apellido'></label>
        <input
          type='text'
          id='nombre-apellido'
          value={nombre}
          placeholder='Ingrese su nombre y apellido'
          onChange={onChangeNombre}
        />

        <label htmlFor='color'></label>
        <input
          type='text'
          id='color'
          value={color}
          placeholder='Ingrese su color favorito'
          onChange={onChangeColor}
        />
        <button>Enviar</button>

        {error != 'Correcto' && <p>{error}</p>}
      </form>

      {error === 'Correcto' ? <Card nombre={nombre} color={color} /> : undefined}
    </>
  )
}

export default App
