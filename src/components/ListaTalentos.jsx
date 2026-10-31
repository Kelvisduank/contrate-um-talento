import CardTalento from './CardTalento.jsx'

function ListaTalentos({ talentos }) {
  if (talentos.length === 0) {
    return <p className="aviso">Nenhum talento encontrado com essa stack.</p>
  }

  return (
    <div className="lista">
      {talentos.map((talento) => (
        <CardTalento key={talento.contato} talento={talento} />
      ))}
    </div>
  )
}

export default ListaTalentos
