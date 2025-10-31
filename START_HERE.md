# 🚀 START HERE - Começe Aqui!

**Bem-vindo ao Editor de Mensagens Multi-Plataforma v3.0.0**

Este guia rápido vai te ajudar a começar em menos de 5 minutos!

---

## ⚡ Quick Start (3 comandos)

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor
npm run dev

# 3. Acesse no navegador
http://localhost:5173
```

✅ **Pronto! Agora você pode usar o editor.**

---

## 📱 O que você pode fazer?

### 🟢 Editor WhatsApp
- Formate mensagens para WhatsApp
- Use negrito, itálico, tachado, código
- Adicione emojis e listas
- Atalhos: Ctrl+B, Ctrl+I, Ctrl+K, Ctrl+M

### 🔵 Editor Discord
- Formate com Markdown completo
- Headers, código, spoilers, quotes
- Preview em tempo real estilo Discord
- Todas as formatações do Discord

### 📄 Versão Standalone
- Abra `editor-standalone.html` no navegador
- Funciona sem instalação
- Perfeito para uso offline

---

## 🎯 Navegação Rápida

1. **Tela Inicial**: Escolha WhatsApp ou Discord
2. **Editor**: Use os botões ou digite a sintaxe
3. **Preview**: Veja como ficará em tempo real
4. **Copiar**: Clique em "Copiar" e cole no app

---

## 📚 Documentação

- 📖 **[README.md](README.md)** - Documentação completa
- 📘 **[GUIA_DE_USO.md](GUIA_DE_USO.md)** - Guia detalhado (696 linhas)
- 🚀 **[QUICK_START.md](QUICK_START.md)** - Início rápido
- 📝 **[CHANGELOG.md](CHANGELOG.md)** - Histórico de versões
- 🔧 **[GIT_COMMANDS.md](GIT_COMMANDS.md)** - Comandos Git
- 📊 **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Resumo do projeto

---

## 🎨 Exemplos Rápidos

### WhatsApp
```
*Negrito* _Itálico_ ~Tachado~ ```Código```
```

### Discord
```
**Negrito** *Itálico* __Sublinhado__ ~~Tachado~~
`código` ||spoiler|| > quote
```

---

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build
npm run lint     # Verificar código
```

---

## 🌐 Deploy

### Vercel (recomendado)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 📦 Para Git/GitHub

```bash
# 1. Adicionar tudo
git add .

# 2. Commit
git commit -m "feat: Initial commit - Editor v3.0.0"

# 3. Adicionar remote (ajuste a URL)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git

# 4. Push
git push -u origin main
```

**Mais detalhes em:** [GIT_COMMANDS.md](GIT_COMMANDS.md)

---

## ✨ Recursos Principais

- ✅ 2 editores completos (WhatsApp + Discord)
- ✅ Preview em tempo real
- ✅ Modo escuro/claro
- ✅ 100% responsivo
- ✅ Atalhos de teclado
- ✅ Copiar com um clique
- ✅ Contador de caracteres
- ✅ Emojis (WhatsApp)
- ✅ Markdown avançado (Discord)

---

## 🎯 Arquitetura

```
src/
├── pages/
│   ├── Home.jsx           # Tela inicial
│   ├── WhatsAppEditor.jsx # Editor WhatsApp
│   └── DiscordEditor.jsx  # Editor Discord
├── components/ui/         # shadcn/ui
├── App.jsx                # Rotas
└── main.jsx               # Entry point
```

---

## 🐛 Problemas?

### Erro ao instalar
```bash
# Limpe o cache
rm -rf node_modules package-lock.json
npm install
```

### Porta em uso
```bash
# Use outra porta
npm run dev -- --port 3000
```

### Build não funciona
```bash
# Limpe e rebuild
rm -rf dist
npm run build
```

---

## 💡 Dicas Importantes

1. **Use Ctrl+B, I, K, M** para formatar rápido no WhatsApp
2. **Passe o mouse** nos spoilers do Discord para revelar
3. **Modo escuro** é salvo automaticamente
4. **Preview atualiza** em tempo real
5. **Copie e cole** diretamente nos apps

---

## 🎓 Aprenda Mais

### WhatsApp
- Negrito: `*texto*`
- Itálico: `_texto_`
- Tachado: `~texto~`
- Código: ``` ```texto``` ```

### Discord
- Negrito: `**texto**`
- Itálico: `*texto*`
- Sublinhado: `__texto__`
- Tachado: `~~texto~~`
- Código: `` `texto` ``
- Bloco: ``` ```texto``` ```
- Spoiler: `||texto||`
- Quote: `> texto`
- Lista: `- item`

---

## 🌟 Tecnologias

- React 19.1.1
- React Router 6.x
- Vite 7.x
- Tailwind CSS 4.x
- shadcn/ui
- Lucide Icons

---

## 📞 Precisa de Ajuda?

1. Leia o **[GUIA_DE_USO.md](GUIA_DE_USO.md)**
2. Veja o **[README.md](README.md)**
3. Abra uma issue no GitHub
4. Entre em contato

---

## ✅ Checklist de Início

- [ ] Instalei as dependências (`npm install`)
- [ ] Iniciei o servidor (`npm run dev`)
- [ ] Acessei http://localhost:5173
- [ ] Testei o Editor WhatsApp
- [ ] Testei o Editor Discord
- [ ] Li a documentação básica
- [ ] Pronto para usar! 🎉

---

## 🎊 Status: PRONTO PARA USO!

**Versão:** 3.0.0  
**Status:** ✅ Completo e funcional  
**Build:** ✅ Compilando perfeitamente  
**Docs:** ✅ 100% documentado

---

**Desenvolvido com ❤️ | Janeiro 2024**

**Agora vá criar mensagens incríveis! 🚀**