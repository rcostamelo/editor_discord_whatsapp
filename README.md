# 💬 Editor de Mensagens Multi-Plataforma

Um editor de texto moderno e elegante para formatar mensagens do WhatsApp e Discord com interface intuitiva, modo escuro e navegação entre plataformas.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)
![React Router](https://img.shields.io/badge/React_Router-6.x-red)

## 🌟 Visão Geral

Uma aplicação web completa que oferece editores especializados para formatar mensagens do WhatsApp e Discord. Com interface moderna, responsiva e suporte a modo escuro, você pode criar mensagens formatadas com facilidade.

## ✨ Features

### 🏠 Tela Inicial
- Cards interativos para escolher a plataforma
- Design moderno com gradientes e animações
- Navegação intuitiva entre editores
- Visual atrativo e responsivo

### 📱 Editor WhatsApp

#### 🎨 Formatação de Texto
- **Negrito** (`*texto*`) - Ctrl/⌘ + B
- **Itálico** (`_texto_`) - Ctrl/⌘ + I
- **Tachado** (`~texto~`) - Ctrl/⌘ + K
- **Monoespaçado** (``` `texto` ```) - Ctrl/⌘ + M

#### 📋 Funcionalidades
- ✅ Preview em tempo real com background do WhatsApp
- ✅ Listas com marcadores e numeradas
- ✅ Seletor de emojis integrado
- ✅ Contador de caracteres, palavras e linhas
- ✅ Copiar texto formatado
- ✅ Download como arquivo .txt
- ✅ Atalhos de teclado
- ✅ Modo escuro/claro

### 💬 Editor Discord

#### 🎨 Formatação Markdown
- **Negrito** (`**texto**`)
- **Itálico** (`*texto*`)
- **Sublinhado** (`__texto__`)
- **Tachado** (`~~texto~~`)
- **Código inline** (`` `código` ``)
- **Bloco de código** (``` ```código``` ```)
- **Spoiler** (`||texto||`)
- **Quote** (`> texto`)

#### 📋 Funcionalidades
- ✅ Preview em tempo real estilo Discord
- ✅ Suporte completo a Markdown
- ✅ Spoilers interativos
- ✅ Blocos de código formatados
- ✅ Citações (quotes)
- ✅ Copiar texto formatado
- ✅ Contador de caracteres
- ✅ Modo escuro/claro
- ✅ Guia rápido de formatação

### 🌓 Interface Moderna
- **Modo Escuro/Claro** - Alternância com um clique
- **Design Responsivo** - Funciona em mobile, tablet e desktop
- **Componentes shadcn/ui** - Interface elegante e consistente
- **Animações Suaves** - Transições polidas
- **Notificações Toast** - Feedback visual elegante
- **Navegação com React Router** - Transições suaves entre páginas

## 🚀 Tecnologias

- **React** 19.1.1 - Framework JavaScript
- **React Router DOM** 6.x - Roteamento
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** 4.x - Estilização utility-first
- **shadcn/ui** - Componentes reutilizáveis
- **Lucide React** - Ícones modernos
- **Sonner** - Sistema de notificações toast
- **Emoji Picker React** - Seletor de emojis

## 📦 Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta do projeto
cd wpp-editor

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 🎯 Como Usar

### Navegação
1. Ao iniciar a aplicação, você verá dois cards na tela inicial
2. Clique no card **"Editor WhatsApp"** para formatar mensagens do WhatsApp
3. Clique no card **"Editor Discord"** para formatar mensagens do Discord
4. Use o botão "Home" em cada editor para voltar à tela inicial

### Editor WhatsApp

#### Formatação Básica
1. Digite ou cole seu texto no editor
2. Selecione o texto que deseja formatar
3. Clique no botão de formatação desejado ou use os atalhos de teclado
4. Veja o preview em tempo real com visual do WhatsApp

#### Atalhos de Teclado
| Atalho | Ação |
|--------|------|
| `Ctrl/⌘ + B` | Negrito |
| `Ctrl/⌘ + I` | Itálico |
| `Ctrl/⌘ + K` | Tachado |
| `Ctrl/⌘ + M` | Código/Monoespaçado |

#### Criando Listas
1. Escreva cada item em uma linha separada
2. Selecione todas as linhas
3. Clique em "Lista" ou "Numerada"

#### Emojis
1. Clique no botão "Emoji"
2. Selecione o emoji desejado no picker
3. O emoji será inserido na posição do cursor

### Editor Discord

#### Formatação Markdown
1. Digite ou cole seu texto no editor
2. Selecione o texto que deseja formatar
3. Clique no botão correspondente à formatação desejada
4. Veja o preview em tempo real estilo Discord

#### Guia de Formatação
- **Negrito**: `**texto**`
- **Itálico**: `*texto*`
- **Sublinhado**: `__texto__`
- **Tachado**: `~~texto~~`
- **Código**: `` `código` ``
- **Bloco de código**: ``` ```código``` ```
- **Spoiler**: `||texto||` (clique para revelar no preview)
- **Quote**: `> texto` (adiciona barra de citação)

#### Recursos Especiais
- **Spoilers interativos**: Passe o mouse sobre o texto ocultado para revelar
- **Blocos de código**: Formatação especial para trechos de código
- **Quotes**: Barra lateral colorida para citações

## 🎨 Temas

Ambos os editores suportam modo claro e escuro:
- Clique no ícone de sol/lua no canto superior direito
- Sua preferência é salva automaticamente no navegador
- As cores se adaptam automaticamente ao tema escolhido
- Preview se ajusta ao tema para melhor visualização

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🏗️ Estrutura do Projeto

```
wpp-editor/
├── src/
│   ├── components/
│   │   └── ui/              # Componentes shadcn/ui
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── textarea.jsx
│   │       ├── badge.jsx
│   │       ├── separator.jsx
│   │       ├── popover.jsx
│   │       └── sonner.jsx
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.jsx         # Tela inicial com cards
│   │   ├── WhatsAppEditor.jsx   # Editor WhatsApp
│   │   └── DiscordEditor.jsx    # Editor Discord
│   ├── lib/
│   │   └── utils.js         # Utilitários
│   ├── assets/              # Imagens e recursos
│   │   └── bgwhatsapp.png   # Background do WhatsApp
│   ├── App.jsx              # Configuração de rotas
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globais
├── public/                  # Arquivos estáticos
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
├── components.json
└── jsconfig.json
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

## 🎨 Customização

### Cores
As cores do tema podem ser customizadas no arquivo `src/index.css` através das variáveis CSS:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... outras variáveis */
}
```

### Componentes
Os componentes shadcn/ui estão em `src/components/ui/` e podem ser personalizados conforme necessário.

### Rotas
As rotas são configuradas em `src/App.jsx` usando React Router:
- `/` - Tela inicial
- `/whatsapp` - Editor WhatsApp
- `/discord` - Editor Discord

## 📝 Recursos por Editor

### WhatsApp Editor
| Recurso | Disponível |
|---------|------------|
| Negrito | ✅ |
| Itálico | ✅ |
| Tachado | ✅ |
| Monoespaçado | ✅ |
| Listas | ✅ |
| Emojis | ✅ |
| Preview realista | ✅ |
| Download | ✅ |
| Copiar | ✅ |

### Discord Editor
| Recurso | Disponível |
|---------|------------|
| Negrito | ✅ |
| Itálico | ✅ |
| Sublinhado | ✅ |
| Tachado | ✅ |
| Código inline | ✅ |
| Bloco de código | ✅ |
| Spoiler | ✅ |
| Quote | ✅ |
| Preview estilo Discord | ✅ |
| Copiar | ✅ |

## 🔄 Changelog

### v3.0.0 (Atual)
- ✅ Adicionada tela inicial com cards
- ✅ Novo editor Discord completo
- ✅ Implementado React Router para navegação
- ✅ Design system unificado
- ✅ Separação em páginas modulares
- ✅ Navegação entre editores
- ✅ Melhorias de UX

### v2.0.0
- ✅ Integração completa com shadcn/ui
- ✅ Sistema de notificações toast com Sonner
- ✅ Modo escuro com persistência
- ✅ Atalhos de teclado
- ✅ Contador de estatísticas

### v1.0.0
- ✅ Editor básico WhatsApp
- ✅ Formatação de texto
- ✅ Preview em tempo real

## 🚧 Roadmap

- [ ] Editor para Telegram
- [ ] Editor para Slack
- [ ] Histórico de mensagens
- [ ] Templates salvos
- [ ] Exportar como imagem
- [ ] Compartilhamento direto
- [ ] Modo colaborativo
- [ ] API para integração

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Ícones
- [Sonner](https://sonner.emilkowal.ski/) - Notificações toast
- [React Router](https://reactrouter.com/) - Roteamento
- [Emoji Picker React](https://www.npmjs.com/package/emoji-picker-react) - Seletor de emojis

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

Feito com ❤️ usando React, Tailwind CSS e muito café ☕