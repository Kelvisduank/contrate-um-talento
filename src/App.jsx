import { useEffect, useState } from 'react'
import FiltroStack from './components/FiltroStack.jsx'
import ListaTalentos from './components/ListaTalentos.jsx'
import { filtrarPorStack, listarStacks } from './filtro.js'
import './App.css'

function App() {
  const [talentos, setTalentos] = useState([])
  const [stack, setStack] = useState('')
  const [erro, setErro] = useState(null)

  // Por enquanto os dados vêm de um JSON local; depois virão do Supabase.
  useEffect(() => {
    fetch('/talentos.json')
      .then((resposta) => {
        if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
        return resposta.json()
      })
      .then(setTalentos)
      .catch(() => setErro('Não foi possível carregar os talentos.'))
  }, [])

  return (
    <main>
      <header>
        <h1>Contrate um talento</h1>
        <p>Encontre pessoas desenvolvedoras com as habilidades que você precisa.</p>
      </header>

      <FiltroStack stacks={listarStacks(talentos)} valor={stack} aoMudar={setStack} />

      {erro ? (
        <p className="aviso">{erro}</p>
      ) : (
        <ListaTalentos talentos={filtrarPorStack(talentos, stack)} />
      )}
    </main>
  )
}

export default App
