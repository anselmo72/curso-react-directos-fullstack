import { useRef } from 'react'

const FormNoControlado = () => {
  const formulario = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const datos = new FormData(formulario.current)

    // console.log(...datos.entries())

    const objectoDatos = Object.fromEntries([...datos.entries()])
    console.log(objectoDatos)

    const { todoDescripcion, todoName } = objectoDatos
    if (!todoDescripcion.trim() || !todoName.trim()) {
      console.log('nooopooo está vacio')
      return
    }

    console.log('pasó validaciones')
  }

  return (
    <>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingrese Todo'
          name='todoName'
          className='form-control mb-2'
          defaultValue='Tarea #01'
        />
        <textarea
          name='todoDescripcion'
          className='form-control mb-2'
          placeholder='ingrese descripcion del todo'
          defaultValue='Descripcion Tarea #01'
        ></textarea>
        <select
          name='todoEstado'
          className='form-control mb-2'
          defaultValue='pendiente'
        >
          <option value='pendiente'>Pendiente</option>
          <option value='completada'>Completada</option>
        </select>
        <button className='btn btn-primary'>Agregar</button>
      </form>
    </>
  )
}
export default FormNoControlado
