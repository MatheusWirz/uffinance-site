# Site Institucional — UFFinance (Liga de Mercado Financeiro da UFF)

Site institucional estático, leve e responsivo desenvolvido para a **UFFinance**, utilizando **HTML5, CSS3 e JavaScript puro (Vanilla JS)** — sem necessidade de banco de dados, servidor dedicado ou etapas complexas de compilação (*build*).

---

## Estrutura de Arquivos

```text
site-uffinance/
├── index.html          # Estrutura completa e textos de todas as seções
├── css/
│   └── styles.css      # Design system, cores institucionais e grades responsivas
├── js/
│   └── main.js         # Menu mobile, filtro de competições por ano (2018-2026) e navegação
├── images/
│   ├── logotipo.png                    # Logotipo oficial da UFFinance
│   ├── niteroi-photo-horizontal.jpg    # Banner principal para computadores/tablets
│   ├── niteroi-photo-vertical.jpg      # Banner principal otimizado para celulares
│   └── elementor-placeholder-image.png # Imagem padrão (placeholder) para fotos e logos
└── README.md           # Guia rápido de manutenção para futuros membros
```

---

## Guia Rápido de Manutenção (Para Futuros Membros)

### 1. Como editar textos ou descrições
Abra o arquivo `index.html` em qualquer editor de texto (como VS Code ou Bloco de Notas). Todas as seções estão claramente identificadas por comentários como:
- `SEÇÃO 1: HISTÓRIA`
- `SEÇÃO 2: ALUMNI`
- `SEÇÃO 3: PRINCIPAIS PARTICIPAÇÕES EM COMPETIÇÕES`
- `SEÇÃO 4: CONTATO CONSTANTE COM O MERCADO FINANCEIRO`
- `SEÇÃO 5: RESEARCH E CONTEÚDOS EDUCATIVOS`
- `SEÇÃO 6: QUEM SOMOS?`
- `SEÇÃO 7: PROCESSO SELETIVO`

### 2. Como substituir as imagens de placeholder
1. Coloque a foto nova dentro da pasta `images/` (ex: `images/visita-gestora.jpg`).
2. No `index.html`, localize o trecho `src="images/elementor-placeholder-image.png"` do card correspondente e troque para `src="images/visita-gestora.jpg"`.
3. O CSS ajusta automaticamente o recorte e a proporção (`aspect-ratio` e `object-fit: cover`) sem distorcer a foto.

### 3. Como atualizar o link do Processo Seletivo (Google Forms)
Na **Seção 7 (`#processo-seletivo`)** do `index.html`, localize o comentário `<!-- EDITE AQUI O LINK DO FORMULÁRIO GOOGLE FORMS -->` e altere o atributo `href`:
```html
<a href="https://docs.google.com/forms/d/e/SEU_LINK_AQUI/viewform" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--lg">
```

### 4. Como adicionar ou remover membros ativos / diretoria
Na **Seção 6 (`#quem-somos`)**, dentro de `<ul class="members-grid">`, basta copiar e colar uma linha `<li>`:
```html
<li class="member-pill"><span class="member-pill-dot"></span><span>Nome do Membro</span></li>
```

### 5. Como adicionar uma nova competição ou um novo ano (ex: 2027)
- **Para adicionar uma competição a um ano existente (ex: 2026)**: basta copiar um bloco `<article class="competition-card" data-year="2026">...</article>` dentro de `#competitions-grid`.
- **Para adicionar um novo ano (ex: 2027)**: adicione um botão `<button type="button" class="year-tab" data-year="2027">2027</button>` dentro de `.timeline-bar` e crie os cards com `data-year="2027"`. O script `js/main.js` reconhece novos anos automaticamente.

### 6. Como adicionar uma nova seção mantendo 100% da responsividade
No final do `<main>` no arquivo `index.html`, há um bloco comentado chamado `MODELO PRONTO PARA CRIAR NOVAS SEÇÕES FUTURAMENTE`. Basta copiá-lo e escolher uma das classes de grade automática:
- `.grid-2` (2 colunas no desktop, 1 no celular)
- `.grid-3` (3 colunas no desktop, 2 no tablet, 1 no celular)
- `.grid-4` (4 colunas no desktop, 2 no tablet, 1 no celular)

---

## Hospedagem Gratuita ou de Baixo Custo
Por ser 100% estático, o site pode ser hospedado gratuitamente ou nas faixas mais econômicas de qualquer provedor:
- **GitHub Pages / Cloudflare Pages / Vercel / Netlify** (Gratuitos para sites estáticos)
- **Hospedagem compartilhada tradicional (Hostinger, Locaweb, HostGator)**: basta enviar os arquivos para a pasta `public_html`.
