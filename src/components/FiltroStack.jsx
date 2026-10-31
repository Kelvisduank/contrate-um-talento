function FiltroStack({ stacks, valor, aoMudar }) {
  return (
    <label className="filtro">
      Filtrar por stack:
      <select value={valor} onChange={(e) => aoMudar(e.target.value)}>
        <option value="">Todas</option>
        {stacks.map((stack) => (
          <option key={stack} value={stack}>
            {stack}
          </option>
        ))}
      </select>
    </label>
  )
}

export default FiltroStack
