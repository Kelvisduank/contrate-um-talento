# Decisões

## 2026-10-31 — Esqueleto do catálogo (prompt-esqueleto.md)

- **Campos do card:** o card mostra todos os campos (nome, título, stacks,
  projetos, diferenciais, portfólio e contato), já que a ideia é ser uma
  "ficha técnica". Dá para reduzir depois se o card ficar grande demais.
- **Filtro:** um `<select>` com as stacks de todos os talentos, mais a opção
  "Todas". Filtra por uma stack de cada vez.
- **Lógica separada:** `src/filtro.js` tem `listarStacks` e `filtrarPorStack`,
  funções puras sem React, o que facilita testar e reaproveitar quando os
  dados vierem do Supabase.
- **Restrições extras:** nenhuma além das listadas no prompt.
