<div align="center">

# 🚲 Bicicletaria do Grau 5.0

**Site institucional moderno para bicicletaria especializada em manutenção de bikes em São Paulo.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5511965504747)

[🌐 Ver Site ao Vivo](#) · [📋 Reportar Bug](https://github.com/Wagnerzcordeiro/bicicletariaa/issues) · [💡 Solicitar Feature](https://github.com/Wagnerzcordeiro/bicicletariaa/issues)

</div>

---

## 📋 Sobre o Projeto

O site da **Bicicletaria do Grau 5.0** é uma landing page institucional completa, desenvolvida como uma **One Page** com foco em:

- ✅ Apresentação profissional da marca
- ✅ Divulgação de serviços de manutenção
- ✅ Captação de clientes via formulário integrado com WhatsApp
- ✅ SEO local (São Paulo - SP)
- ✅ Design moderno, responsivo e acessível

---

## ✨ Funcionalidades

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação principal com CTAs de alto impacto |
| **Sobre** | Apresentação da bicicletaria e seus diferenciais |
| **Serviços** | 6 categorias de manutenção com botão direto para WhatsApp |
| **Diferenciais** | Proposta de valor visual com ícones |
| **Depoimentos** | Espaço preparado para avaliações reais |
| **Orçamento** | Formulário funcional que monta a mensagem e abre o WhatsApp |
| **FAQ** | 8 perguntas frequentes com acordeão interativo |
| **Localização** | Endereço com mapa incorporado do Google Maps |
| **Rodapé** | Navegação, contatos e copyright |
| **Flutuantes** | Botão WhatsApp fixo + Botão "Voltar ao Topo" |

---

## 🎨 Identidade Visual

| Token | Valor | Uso |
|---|---|---|
| Verde-água | `#35D6C4` | Cor primária, destaques |
| Azul-marinho | `#16324F` | Textos, títulos, fundos escuros |
| Verde-lima | `#B7F34A` | Botão principal, CTAs |
| Branco | `#FFFFFF` | Fundos principais |
| Cinza-claro | `#F3F6F7` | Fundos alternativos |
| Cinza-texto | `#5B6670` | Textos secundários |

**Tipografia:** [Outfit](https://fonts.google.com/specimen/Outfit) (títulos) + [Inter](https://fonts.google.com/specimen/Inter) (corpo)

---

## 🛠️ Stack Tecnológica

- **HTML5** — Estrutura semântica e acessível
- **CSS3 Puro** — Design system com variáveis CSS, animações, responsividade
- **JavaScript Vanilla** — Animações de scroll, FAQ, validação de formulário e integração WhatsApp
- ❌ **Sem React, Vue, Angular, Node.js ou Backend**
- ✅ **100% estático** — compatível com qualquer hospedagem estática

---

## 📁 Estrutura do Projeto

```
bicicletariaa/
│
├── index.html              # Página principal (One Page)
│
├── css/
│   └── styles.css          # Design system completo
│
├── js/
│   └── main.js             # Lógica de interação e integração WhatsApp
│
└── assets/
    ├── logo/
    │   ├── logo.jpg         # Logotipo principal
    │   └── favicon.svg      # Ícone da aba do navegador
    └── images/
        ├── hero-bicicletaria.jpg   # Imagem principal (Hero)
        ├── sobre-oficina.jpg       # Imagem da seção Sobre
        ├── servico-manutencao.jpg  # Imagem de serviço
        └── servico-rodas.jpg       # Imagem de serviço
```

---

## 🚀 Como Executar Localmente

Este projeto é 100% estático — **não precisa de servidor ou build**!

### Opção 1: Abrir diretamente
Clique duas vezes no arquivo `index.html` para abrir no navegador.

### Opção 2: Via Live Server (recomendado)
Se usar o **VS Code**, instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) e clique em **"Go Live"** na barra de status.

### Opção 3: Via Python (qualquer terminal)
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

---

## ☁️ Deploy — Hospedagem Gratuita

O site pode ser publicado em qualquer hospedagem estática:

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Acesse [netlify.com](https://www.netlify.com)
2. Arraste a pasta do projeto para o painel de deploy
3. Pronto! URL gerada automaticamente.

### GitHub Pages
1. Vá em `Settings > Pages` no repositório
2. Selecione a branch `main` e a pasta `/root`
3. Salve — o site estará disponível em `https://Wagnerzcordeiro.github.io/bicicletariaa`

---

## ⚙️ Configuração do WhatsApp

O número do WhatsApp está centralizado em **um único local** no arquivo `js/main.js`:

```javascript
// js/main.js — linha 7
const CONFIG = {
  whatsappNumber: '5511965504747', // ← Altere aqui se necessário
  businessName: 'Bicicletaria do Grau 5.0',
  address: 'R. Serra dos Dois Irmãos, 475 - Jardim Amalia, São Paulo - SP'
};
```

Para alterar o número, edite **apenas essa linha**. Todos os botões e links do site serão atualizados automaticamente.

---

## 🔒 Segurança

- ✅ Nenhuma API key ou segredo sensível no código
- ✅ Nenhum dado de usuário é armazenado (formulário envia direto ao WhatsApp)
- ✅ `rel="noopener noreferrer"` em todos os links externos
- ✅ Pasta `.docs` (briefing interno) excluída do repositório via `.gitignore`

---

## 📈 SEO Implementado

- `<title>` descritivo com palavras-chave locais
- `<meta name="description">` com 155 caracteres
- Open Graph para compartilhamento em redes sociais
- HTML semântico com hierarquia correta de `<h1>` → `<h6>`
- `alt` em todas as imagens
- Dados de endereço local (São Paulo - SP) nos textos

---

## ♿ Acessibilidade

- Contraste de cores WCAG AA
- Navegação por teclado funcional
- `aria-label` em botões e links
- `aria-expanded` nos acordeões do FAQ
- `focus-visible` com estilo visível
- Suporte a `prefers-reduced-motion`

---

## 📞 Informações Comerciais

| | |
|---|---|
| **Nome** | Bicicletaria do Grau 5.0 |
| **Endereço** | R. Serra dos Dois Irmãos, 475 — Jardim Amalia, São Paulo - SP, CEP 05890-300 |
| **WhatsApp** | [(11) 96550-4747](https://wa.me/5511965504747) |
| **Região** | Zona Sul de São Paulo |

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feature/minha-melhoria`
3. Commit: `git commit -m 'feat: adiciona minha melhoria'`
4. Push: `git push origin feature/minha-melhoria`
5. Abra um **Pull Request**

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja `LICENSE` para mais informações.

---

<div align="center">

Desenvolvido com ❤️ para a **Bicicletaria do Grau 5.0** — São Paulo, SP

[⬆️ Voltar ao topo](#-bicicletaria-do-grau-50)

</div>
