function CardTalento({ talento }) {
  return (
    <article className="card">
      <h2>{talento.nome}</h2>
      <p className="card-titulo">{talento.titulo}</p>

      <ul className="stacks">
        {talento.stacks.map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>

      <h3>Projetos</h3>
      <ul className="projetos">
        {talento.projetos.map((projeto) => (
          <li key={projeto.nome}>
            <a href={projeto.link} target="_blank" rel="noreferrer">
              {projeto.nome}
            </a>
            : {projeto.descricao}
          </li>
        ))}
      </ul>

      {talento.diferenciais.length > 0 && (
        <>
          <h3>Diferenciais</h3>
          <p>{talento.diferenciais.join(' · ')}</p>
        </>
      )}

      <div className="card-links">
        <a href={talento.portfolio} target="_blank" rel="noreferrer">
          Portfólio
        </a>
        <a href={`mailto:${talento.contato}`}>{talento.contato}</a>
      </div>
    </article>
  )
}

export default CardTalento
