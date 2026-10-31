## Contexto
Estou criando o "Contrate um talento", um catálogo onde cada pessoa
desenvolvedora aparece como um "produto", com ficha técnica. Quem usa o
site é quem quer contratar (RH ou dono de empresa) e precisa achar rápido
alguém com as habilidades certas.
O projeto já foi criado com Vite + React (template padrão, com ESLint).
No futuro os dados virão de um banco PostgreSQL no Supabase; por enquanto
use um JSON local com o mesmo formato.

## Tarefa
Substitua a página padrão do Vite por uma página que lê a lista de talentos
de public/talentos.json, mostra cada talento em um card e tem UM filtro
funcionando: por stack.

## Exemplo de talento (formato do JSON)
{
  "nome": "Ana Souza",
  "titulo": "Desenvolvedora Front-end",
  "stacks": ["JavaScript", "React", "CSS"],
  "projetos": [
    { "nome": "App de receitas", "descricao": "Busca receitas por ingrediente", "link": "https://..." }
  ],
  "portfolio": "https://anasouza.dev",
  "diferenciais": ["inglês avançado"],
  "contato": "ana@email.com"
}
Crie 4 talentos fictícios nesse formato, com stacks variadas.

## Formato de saída
- React com JavaScript (sem TypeScript por enquanto)
- Componentes em src/components/: ListaTalentos, CardTalento, FiltroStack
- A lógica do filtro fica em src/filtro.js, separada dos componentes,
  com 1 teste em Vitest (src/filtro.test.js)
- Adicione o script "test" no package.json
- O código deve passar no `npm run lint` sem erros
- Atualize o README com os comandos: instalar, rodar, testar e lint

## Restrições
- Sem login, sem banco de dados, sem painel de administração
- Sem bibliotecas além de React, Vite, Vitest e ESLint
- 👉 [algo mais que você NÃO quer?]
- 👉 [o card mostra todos os campos ou só nome, título, stacks e contato?]