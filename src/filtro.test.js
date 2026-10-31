import { describe, it, expect } from 'vitest'
import { filtrarPorStack } from './filtro.js'

const talentos = [
  { nome: 'Ana', stacks: ['JavaScript', 'React'] },
  { nome: 'Bruno', stacks: ['Node.js', 'PostgreSQL'] },
  { nome: 'Carla', stacks: ['React', 'Node.js'] },
]

describe('filtrarPorStack', () => {
  it('retorna só os talentos que têm a stack escolhida', () => {
    const resultado = filtrarPorStack(talentos, 'React')
    expect(resultado.map((t) => t.nome)).toEqual(['Ana', 'Carla'])
  })
})
