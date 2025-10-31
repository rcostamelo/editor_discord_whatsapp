# 🚀 Guia de Comandos Git

Este arquivo contém todos os comandos necessários para inicializar o repositório Git e fazer o primeiro push.

---

## 📋 Pré-requisitos

- Git instalado (`git --version`)
- Conta no GitHub
- Repositório criado no GitHub (vazio)

---

## 🎯 Comandos para Primeira Configuração

### 1. Configurar Git (se ainda não configurou)

```bash
# Configure seu nome
git config --global user.name "Seu Nome"

# Configure seu email
git config --global user.email "seu-email@exemplo.com"

# Verifique as configurações
git config --list
```

---

## 🚀 Comandos para Inicializar e Fazer Push

### Opção A: Novo Repositório (começando do zero)

```bash
# 1. Inicializar repositório (já feito)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "feat: Initial commit - Editor de Mensagens Multi-Plataforma v3.0.0

- Tela inicial com cards para WhatsApp e Discord
- Editor WhatsApp completo com emojis, listas e atalhos
- Editor Discord com Markdown avançado
- Editor standalone em HTML puro
- Documentação completa (4 arquivos MD)
- Build funcionando e otimizado
- Modo escuro/claro
- 100% responsivo"

# 4. Renomear branch para main
git branch -M main

# 5. Adicionar repositório remoto
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 6. Fazer push
git push -u origin main
```

### Opção B: Repositório Já Existe no GitHub

```bash
# 1. Adicionar todos os arquivos
git add .

# 2. Commit
git commit -m "feat: Initial commit - Editor de Mensagens v3.0.0"

# 3. Adicionar remote
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 4. Pull com rebase (se houver README no GitHub)
git pull origin main --rebase

# 5. Push
git push -u origin main
```

---

## 📝 Commits Futuros

### Adicionar mudanças

```bash
# Ver status
git status

# Adicionar arquivos específicos
git add src/pages/NovoArquivo.jsx

# Ou adicionar tudo
git add .

# Commit com mensagem descritiva
git commit -m "feat: Adiciona nova funcionalidade X"

# Push
git push
```

### Convenção de Commits

Use commits semânticos:

```bash
# Nova funcionalidade
git commit -m "feat: adiciona editor para Telegram"

# Correção de bug
git commit -m "fix: corrige preview do Discord"

# Documentação
git commit -m "docs: atualiza README com novos exemplos"

# Estilo/formatação
git commit -m "style: ajusta espaçamento dos botões"

# Refatoração
git commit -m "refactor: reorganiza estrutura de componentes"

# Performance
git commit -m "perf: otimiza renderização do preview"

# Testes
git commit -m "test: adiciona testes para formatação"

# Build/CI
git commit -m "build: atualiza dependências"

# Outras mudanças
git commit -m "chore: atualiza .gitignore"
```

---

## 🌿 Trabalhando com Branches

### Criar e usar branches

```bash
# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Fazer mudanças e commit
git add .
git commit -m "feat: implementa nova funcionalidade"

# Push da branch
git push -u origin feature/nova-funcionalidade

# Voltar para main
git checkout main

# Merge da branch
git merge feature/nova-funcionalidade

# Deletar branch local
git branch -d feature/nova-funcionalidade

# Deletar branch remota
git push origin --delete feature/nova-funcionalidade
```

---

## 🔄 Comandos Úteis

### Visualizar histórico

```bash
# Log simples
git log

# Log compacto
git log --oneline

# Log com gráfico
git log --graph --oneline --all

# Últimos 5 commits
git log -5
```

### Desfazer mudanças

```bash
# Descartar mudanças não commitadas
git checkout -- arquivo.txt

# Remover arquivo do staging
git reset HEAD arquivo.txt

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1
```

### Atualizar do remoto

```bash
# Buscar mudanças
git fetch origin

# Pull (fetch + merge)
git pull origin main

# Pull com rebase
git pull origin main --rebase
```

---

## 🏷️ Tags e Releases

### Criar tags de versão

```bash
# Tag simples
git tag v3.0.0

# Tag anotada (recomendado)
git tag -a v3.0.0 -m "Versão 3.0.0 - Multi-plataforma"

# Listar tags
git tag

# Push de tag específica
git push origin v3.0.0

# Push de todas as tags
git push origin --tags

# Deletar tag local
git tag -d v3.0.0

# Deletar tag remota
git push origin --delete v3.0.0
```

---

## 🔍 Verificar Estado

### Comandos de inspeção

```bash
# Status detalhado
git status

# Status curto
git status -s

# Ver diferenças
git diff

# Ver diferenças staged
git diff --staged

# Ver branches
git branch -a

# Ver remotes
git remote -v
```

---

## 🛠️ Problemas Comuns

### Erro: remote origin already exists

```bash
# Remover remote existente
git remote remove origin

# Adicionar novamente
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

### Erro: rejected (non-fast-forward)

```bash
# Opção 1: Pull primeiro
git pull origin main --rebase
git push

# Opção 2: Force push (cuidado!)
git push -f origin main
```

### Erro: arquivo muito grande

```bash
# Remover arquivo do histórico
git rm --cached arquivo-grande.zip

# Adicionar ao .gitignore
echo "arquivo-grande.zip" >> .gitignore

# Commit
git commit -m "remove arquivo grande"
```

---

## 📦 Preparando Release

### Checklist antes do push

- [ ] Código compilando sem erros (`npm run build`)
- [ ] Testes passando (se houver)
- [ ] README atualizado
- [ ] CHANGELOG atualizado
- [ ] Versão atualizada no package.json
- [ ] .gitignore configurado
- [ ] Arquivos desnecessários removidos

### Comandos finais

```bash
# 1. Verificar o que será commitado
git status

# 2. Adicionar tudo
git add .

# 3. Commit com mensagem descritiva
git commit -m "release: v3.0.0 - Editor Multi-Plataforma"

# 4. Criar tag
git tag -a v3.0.0 -m "Release v3.0.0"

# 5. Push do código e tags
git push origin main --tags
```

---

## 🌐 Deploy Automático

### Vercel (recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

### GitHub Pages

```bash
# Adicionar no package.json:
# "homepage": "https://seu-usuario.github.io/seu-repo"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d dist"

# Instalar gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

---

## 📚 Recursos Adicionais

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

## ✅ Comando Completo para Primeiro Push

**Cole e execute (ajuste a URL do seu repositório):**

```bash
git add . && \
git commit -m "feat: Initial commit - Editor de Mensagens Multi-Plataforma v3.0.0

✨ Funcionalidades:
- Tela inicial com seleção de editores
- Editor WhatsApp completo (emojis, listas, atalhos)
- Editor Discord com Markdown avançado
- Editor standalone HTML
- Modo escuro/claro
- 100% responsivo
- Documentação completa

📦 Tecnologias:
- React 19.1.1
- React Router 6.x
- Tailwind CSS 4.x
- Vite 7.x
- shadcn/ui

🎯 Status: Pronto para produção" && \
git branch -M main && \
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git && \
git push -u origin main
```

---

**Boa sorte com seu projeto! 🚀**

**Última atualização:** 31/01/2024