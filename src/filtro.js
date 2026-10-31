// Lista todas as stacks dos talentos, sem repetir, em ordem alfabética.
export function listarStacks(talentos) {
  const stacks = new Set(talentos.flatMap((talento) => talento.stacks))
  return [...stacks].sort((a, b) => a.localeCompare(b, 'pt-BR'))
}

// Retorna só os talentos que têm a stack escolhida.
// Stack vazia significa "todas": devolve a lista inteira.
export function filtrarPorStack(talentos, stack) {
  if (!stack) return talentos
  return talentos.filter((talento) => talento.stacks.includes(stack))
}
