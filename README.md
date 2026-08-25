# Portfólio — Evilyn Feitosa

Site pessoal em React + Vite, com CSS puro (sem frameworks de CSS).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/`, pronta para publicar na Netlify.

## Onde editar

- **Informações pessoais, sobre, skills, experiência, educação, idiomas:** `src/data/profile.js`
- **Projetos:** `src/data/projects.js`
- **Cores, fontes, espaçamentos:** `src/index.css` (bloco `:root` no topo)
- **Currículo (CV):** coloque o PDF em `public/` e ajuste o caminho em `src/data/profile.js` (campo `cv`)

Veja mais detalhes na conversa com o Claude ou no comentário de cada arquivo.
