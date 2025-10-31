# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [3.0.0] - 2024-01-31

### 🎉 Adicionado

#### Tela Inicial
- Nova página inicial com cards interativos
- Card para Editor WhatsApp com design em verde
- Card para Editor Discord com design em roxo/azul
- Gradientes animados e efeitos hover
- Navegação intuitiva entre editores

#### Editor Discord
- **NOVO**: Editor completo para formatação Discord
- Suporte a Markdown do Discord
- Formatações disponíveis:
  - Negrito (`**texto**`)
  - Itálico (`*texto*`)
  - Sublinhado (`__texto__`)
  - Tachado (`~~texto~~`)
  - Código inline (`` `código` ``)
  - Bloco de código (``` ```código``` ```)
  - Spoiler (`||texto||`)
  - Quote (`> texto`)
- Preview em tempo real estilo Discord
- Spoilers interativos (revelar ao passar mouse)
- Guia rápido de formatação integrado
- Modo escuro/claro
- Contador de caracteres
- Botões de copiar e limpar
- Card de exemplos de formatação

#### Navegação
- Implementado React Router DOM 6.x
- Rotas configuradas:
  - `/` - Home
  - `/whatsapp` - Editor WhatsApp
  - `/discord` - Editor Discord
- Botão Home em todos os editores
- Transições suaves entre páginas

#### Estrutura
- Nova pasta `src/pages/` para organização modular
- Separação dos editores em componentes independentes
- Arquitetura escalável para futuros editores

### 🔄 Modificado

#### Editor WhatsApp
- Movido de `App.jsx` para `src/pages/WhatsAppEditor.jsx`
- Adicionado botão Home para voltar à tela inicial
- Mantidas todas as funcionalidades existentes
- Corrigido import do background

#### App.jsx
- Transformado em container de rotas
- Configuração centralizada do React Router
- Código limpo e minimalista

### 📚 Documentação
- Atualizado README.md com informações dos dois editores
- Adicionado GUIA_DE_USO.md completo e detalhado
- Criado CHANGELOG.md
- Documentação de estrutura de pastas
- Exemplos práticos de uso
- Seção de troubleshooting

### 🎨 Design
- Design system unificado entre editores
- Consistência visual mantida
- Animações e transições aprimoradas
- Responsividade em todos os componentes

---

## [2.0.0] - 2024-01-15

### 🎉 Adicionado

#### Interface Moderna
- Integração completa com shadcn/ui
- Sistema de notificações toast com Sonner
- Componentes UI reutilizáveis
- Design moderno e elegante

#### Funcionalidades
- Modo escuro com persistência no localStorage
- Atalhos de teclado (Ctrl+B, Ctrl+I, Ctrl+K, Ctrl+M)
- Seletor de emojis integrado (emoji-picker-react)
- Contador de estatísticas:
  - Caracteres
  - Palavras
  - Linhas
- Sistema de notificações para feedback visual

#### Formatação
- Listas com marcadores
- Listas numeradas
- Suporte a emojis
- Preview em tempo real aprimorado
- Background do WhatsApp no preview

#### Ações
- Copiar texto formatado
- Download como arquivo .txt
- Limpar tudo com confirmação
- Feedback visual para todas as ações

### 🔄 Modificado
- Interface completamente redesenhada
- Preview melhorado com visual do WhatsApp
- Responsividade aprimorada
- Performance otimizada

### 🎨 Design
- Paleta de cores atualizada
- Componentes shadcn/ui
- Ícones Lucide React
- Animações suaves
- Transições polidas

---

## [1.0.0] - 2024-01-01

### 🎉 Inicial

#### Editor WhatsApp Básico
- Editor de texto simples
- Formatações básicas:
  - Negrito (`*texto*`)
  - Itálico (`_texto_`)
  - Tachado (`~texto~`)
  - Monoespaçado (``` ```texto``` ```)
- Preview em tempo real
- Interface funcional

#### Tecnologias Base
- React 19.1.1
- Vite
- Tailwind CSS 4.x
- JavaScript

---

## [Não Lançado]

### 🚀 Planejado para v3.1.0
- [ ] Histórico de mensagens editadas
- [ ] Templates salvos localmente
- [ ] Favoritar mensagens frequentes
- [ ] Melhorias de acessibilidade

### 🌟 Roadmap Futuro

#### v4.0.0
- [ ] Editor para Telegram
- [ ] Editor para Slack
- [ ] Editor para Markdown genérico
- [ ] Exportar como imagem
- [ ] Compartilhamento via link

#### v5.0.0
- [ ] Modo colaborativo em tempo real
- [ ] Sincronização na nuvem
- [ ] Contas de usuário
- [ ] API para integração
- [ ] Extensão de navegador

---

## Tipos de Mudanças

- `Adicionado` - para novas funcionalidades
- `Modificado` - para mudanças em funcionalidades existentes
- `Descontinuado` - para funcionalidades que serão removidas
- `Removido` - para funcionalidades removidas
- `Corrigido` - para correção de bugs
- `Segurança` - para vulnerabilidades corrigidas

---

## Links Úteis

- [Repositório](https://github.com/seu-usuario/wpp-editor)
- [Issues](https://github.com/seu-usuario/wpp-editor/issues)
- [Pull Requests](https://github.com/seu-usuario/wpp-editor/pulls)

---

**Versão Atual: 3.0.0**  
**Data da Última Atualização: 31 de Janeiro de 2024**

---

## Como Contribuir

Para contribuir com este projeto:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

Mantenha este CHANGELOG atualizado com suas contribuições!

---

Desenvolvido com ❤️ pela comunidade