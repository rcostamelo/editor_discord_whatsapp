# 📖 Guia de Uso - Editor de Mensagens Multi-Plataforma

Bem-vindo ao Editor de Mensagens Multi-Plataforma! Este guia irá ajudá-lo a aproveitar ao máximo todas as funcionalidades dos editores WhatsApp e Discord.

## 🎯 Índice

1. [Iniciando](#iniciando)
2. [Navegação](#navegação)
3. [Editor WhatsApp](#editor-whatsapp)
4. [Editor Discord](#editor-discord)
5. [Dicas e Truques](#dicas-e-truques)
6. [Atalhos de Teclado](#atalhos-de-teclado)
7. [Problemas Comuns](#problemas-comuns)

---

## 🚀 Iniciando

### 1. Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta
cd wpp-editor

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

### 2. Acesso

Abra seu navegador e acesse: `http://localhost:5173`

Você verá a **tela inicial** com dois cards:
- 🟢 **Editor WhatsApp** - Para formatar mensagens do WhatsApp
- 🔵 **Editor Discord** - Para formatar mensagens do Discord

---

## 🧭 Navegação

### Tela Inicial

A tela inicial apresenta dois cards grandes e interativos:

**Card WhatsApp (Verde)**
- Ícone de mensagem
- Lista de recursos: Negrito, Itálico, Tachado, Monoespaçado
- Clique em qualquer lugar do card para acessar

**Card Discord (Azul/Roxo)**
- Ícone de hashtag (#)
- Lista de recursos: Markdown, Código, Spoiler, Quote
- Clique em qualquer lugar do card para acessar

### Voltando para Home

Em ambos os editores, você encontrará um botão **Home** (ícone de casinha) no canto superior esquerdo para voltar à tela inicial.

---

## 📱 Editor WhatsApp

### Interface Principal

```
┌─────────────────────────────────────────────┐
│  🏠  Editor WhatsApp           🌙 ☀️        │
├─────────────────────────────────────────────┤
│  [Negrito] [Itálico] [Tachado] [Código]   │
│  [Lista] [Numerada] [Emoji]                │
├─────────────────────────────────────────────┤
│  Editor          │    Preview WhatsApp      │
│                  │                           │
│  Digite aqui...  │  Aparece aqui...         │
│                  │                           │
├─────────────────────────────────────────────┤
│  [Copiar] [Baixar] [Limpar]                │
└─────────────────────────────────────────────┘
```

### Formatações Disponíveis

#### 1. **Negrito** (Ctrl/⌘ + B)
- Sintaxe: `*texto*`
- Como usar:
  1. Digite seu texto
  2. Selecione o texto desejado
  3. Clique no botão "Negrito" ou pressione Ctrl+B
  4. O texto ficará entre asteriscos: `*exemplo*`

**Exemplo:**
```
Entrada: Este texto está em negrito
Selecionar: "negrito"
Resultado: Este texto está em *negrito*
No WhatsApp: Este texto está em **negrito**
```

#### 2. **Itálico** (Ctrl/⌘ + I)
- Sintaxe: `_texto_`
- Como usar:
  1. Selecione o texto
  2. Clique em "Itálico" ou pressione Ctrl+I
  3. O texto ficará entre underscores: `_exemplo_`

**Exemplo:**
```
Entrada: Texto em itálico
Selecionar: "itálico"
Resultado: Texto em _itálico_
```

#### 3. **Tachado** (Ctrl/⌘ + K)
- Sintaxe: `~texto~`
- Como usar:
  1. Selecione o texto
  2. Clique em "Tachado" ou pressione Ctrl+K
  3. O texto ficará entre tils: `~exemplo~`

**Exemplo:**
```
Entrada: Preço antigo 100 reais
Selecionar: "100"
Resultado: Preço antigo ~100~ reais
No WhatsApp: Preço antigo ~~100~~ reais
```

#### 4. **Monoespaçado/Código** (Ctrl/⌘ + M)
- Sintaxe: ``` ```texto``` ```
- Como usar:
  1. Selecione o texto
  2. Clique em "Código" ou pressione Ctrl+M
  3. O texto ficará entre três crases

**Exemplo:**
```
Entrada: function hello()
Selecionar: "function hello()"
Resultado: ```function hello()```
```

#### 5. **Listas**

**Lista com Marcadores:**
1. Digite cada item em uma linha separada:
   ```
   Item 1
   Item 2
   Item 3
   ```
2. Selecione todas as linhas
3. Clique em "Lista"
4. Resultado:
   ```
   • Item 1
   • Item 2
   • Item 3
   ```

**Lista Numerada:**
1. Digite cada item em uma linha separada
2. Selecione todas as linhas
3. Clique em "Numerada"
4. Resultado:
   ```
   1. Item 1
   2. Item 2
   3. Item 3
   ```

#### 6. **Emojis** 😊

1. Clique no botão "Emoji" (ícone de carinha feliz)
2. Um seletor de emojis aparecerá
3. Navegue pelas categorias ou use a busca
4. Clique no emoji desejado
5. O emoji será inserido na posição do cursor

**Dica:** Você também pode digitar emojis diretamente se seu teclado suportar!

### Estatísticas

No canto superior direito do editor, você verá:
- **Caracteres:** Número total de caracteres digitados
- **Palavras:** Quantidade de palavras
- **Linhas:** Número de linhas

### Preview

O painel de preview mostra exatamente como sua mensagem aparecerá no WhatsApp:
- Background característico do WhatsApp
- Balão de mensagem verde
- Formatação aplicada em tempo real
- Horário da mensagem

### Ações

**Copiar Texto:**
- Copia todo o texto formatado para a área de transferência
- Basta colar no WhatsApp depois
- Notificação de sucesso aparece

**Baixar:**
- Salva o texto em um arquivo `.txt`
- Nome do arquivo: `whatsapp-[timestamp].txt`
- Útil para guardar mensagens frequentes

**Limpar:**
- Apaga todo o conteúdo do editor
- Limpa também o preview
- Confirmação visual

### Modo Escuro

Clique no ícone de lua/sol para alternar entre modo claro e escuro:
- 🌙 Modo Escuro: Fundo escuro, ideal para ambientes com pouca luz
- ☀️ Modo Claro: Fundo claro, melhor para ambientes iluminados
- Preferência é salva automaticamente

---

## 💬 Editor Discord

### Interface Principal

```
┌─────────────────────────────────────────────┐
│  🏠  Editor Discord            👁️ 🌙 ☀️    │
├─────────────────────────────────────────────┤
│  Guia Rápido de Formatação Discord          │
│  **negrito** *itálico* __sublinhado__      │
├─────────────────────────────────────────────┤
│  [Negrito] [Itálico] [Sublinhado]          │
│  [Tachado] [Código] [Bloco] [Spoiler]      │
│  [Quote] [Copiar] [Limpar]                  │
├─────────────────────────────────────────────┤
│  Editor          │    Preview Discord       │
│                  │                           │
│  Digite aqui...  │  Aparece aqui...         │
│                  │                           │
├─────────────────────────────────────────────┤
│  Exemplos de Formatação                     │
└─────────────────────────────────────────────┘
```

### Formatações Disponíveis

#### 1. **Negrito**
- Sintaxe: `**texto**`
- Exemplo: `**importante**` → **importante**

#### 2. **Itálico**
- Sintaxe: `*texto*` ou `_texto_`
- Exemplo: `*ênfase*` → *ênfase*

#### 3. **Sublinhado**
- Sintaxe: `__texto__`
- Exemplo: `__destacado__` → <u>destacado</u>

#### 4. **Tachado**
- Sintaxe: `~~texto~~`
- Exemplo: `~~errado~~` → ~~errado~~

#### 5. **Código Inline**
- Sintaxe: `` `código` ``
- Exemplo: `` `console.log()` ``
- Aparece com fundo cinza escuro e fonte monoespaçada

#### 6. **Bloco de Código**
- Sintaxe: ``` ```código``` ```
- Útil para múltiplas linhas de código
- Exemplo:
  ````
  ```
  function exemplo() {
    return "Hello";
  }
  ```
  ````

**Com Linguagem (opcional no Discord real):**
````
```javascript
const msg = "Olá";
```
````

#### 7. **Spoiler**
- Sintaxe: `||texto||`
- Oculta o texto até clicar nele
- Exemplo: `||grande revelação||`
- No preview: Passa o mouse para revelar

**Uso comum:**
```
Cuidado! ||Spoiler do filme aqui||
Resposta: ||42||
```

#### 8. **Quote (Citação)**

**Linha Única:**
- Sintaxe: `> texto`
- Exemplo:
  ```
  > Esta é uma citação
  ```

**Bloco de Quote:**
- Sintaxe: `>>> texto`
- Todas as linhas seguintes ficam citadas
- Exemplo:
  ```
  >>> Esta é uma citação
  que continua aqui
  e aqui também
  ```

#### 9. **Combinações**

Você pode combinar formatações:

```
**__Negrito e sublinhado__**
*__Itálico e sublinhado__*
***Negrito e itálico***
~~**Tachado e negrito**~~
```

### Guia Rápido

No topo do editor há um card com referência rápida:
- Negrito: `**texto**`
- Itálico: `*texto*`
- Sublinhado: `__texto__`
- Tachado: `~~texto~~`
- Código: `` `código` ``
- Bloco: ``` ```código``` ```
- Spoiler: `||texto||`
- Quote: `> texto`

### Preview Interativo

O preview do Discord tem recursos especiais:

**Spoilers:**
- Aparecem com fundo escuro
- Passe o mouse para revelar o texto
- Simula o comportamento real do Discord

**Código:**
- Fundo cinza escuro
- Fonte monoespaçada
- Destaque colorido

**Quotes:**
- Barra colorida à esquerda
- Texto levemente recuado
- Cor diferenciada

### Ações

**Copiar:**
- Copia o texto com formatação Markdown
- Cole diretamente no Discord

**Limpar:**
- Apaga todo o conteúdo
- Reseta o preview

**Ocultar/Mostrar Preview:**
- Clique no ícone de olho (👁️)
- Útil para focar apenas na edição
- Libera mais espaço na tela

---

## 💡 Dicas e Truques

### WhatsApp

1. **Combinando Formatações:**
   ```
   *_Negrito e itálico_*
   ~*Tachado e negrito*~
   ```

2. **Listas em Grupos:**
   - Use listas para organizar tarefas
   - Perfeito para listas de compras
   - Ótimo para agendas

3. **Código para Informações Técnicas:**
   ```
   IP: ```192.168.1.1```
   Senha: ```abc123```
   ```

4. **Emojis Estratégicos:**
   - Use no início de listas: ✅ ❌ ⚠️
   - Para separar seções: 📍 🔹 ⭐
   - Para dar ênfase: ❗ ❓ 💡

### Discord

1. **Cabeçalhos com Negrito:**
   ```
   **📋 Título da Seção**
   Conteúdo aqui...
   ```

2. **Spoilers para Respostas:**
   ```
   Pergunta: Qual é a capital do Brasil?
   Resposta: ||Brasília||
   ```

3. **Código para Comandos:**
   ```
   Use o comando `!help` para ajuda
   ```

4. **Quotes para Citações:**
   ```
   > Como dizia Einstein...
   > A imaginação é mais importante que o conhecimento
   ```

5. **Blocos de Código para Logs:**
   ````
   ```
   [LOG] Aplicação iniciada
   [LOG] Usuário conectado
   [ERROR] Falha na conexão
   ```
   ````

### Geral

1. **Modo Escuro:**
   - Use à noite para reduzir cansaço visual
   - Economiza bateria em telas OLED

2. **Atalhos:**
   - Domine os atalhos de teclado
   - Aumente sua produtividade

3. **Preview:**
   - Sempre confira o preview antes de copiar
   - Garante que a formatação está correta

4. **Templates:**
   - Salve mensagens frequentes
   - Use o botão "Baixar" para guardar

---

## ⌨️ Atalhos de Teclado

### WhatsApp Editor

| Atalho | Windows/Linux | Mac | Ação |
|--------|---------------|-----|------|
| Negrito | `Ctrl + B` | `⌘ + B` | Aplica negrito |
| Itálico | `Ctrl + I` | `⌘ + I` | Aplica itálico |
| Tachado | `Ctrl + K` | `⌘ + K` | Aplica tachado |
| Código | `Ctrl + M` | `⌘ + M` | Aplica monoespaçado |

### Discord Editor

Atualmente não possui atalhos de teclado dedicados. Use os botões da interface.

### Navegação

| Atalho | Ação |
|--------|------|
| `Esc` | Fechar popover de emojis |
| `Tab` | Navegar entre botões |
| `Enter` | Ativar botão focado |

---

## 🔧 Problemas Comuns

### Formatação não aparece no WhatsApp

**Problema:** Copiei o texto mas a formatação não funcionou.

**Solução:**
1. Certifique-se de copiar TODO o texto incluindo os caracteres especiais
2. Cole diretamente no campo de mensagem do WhatsApp
3. Não edite o texto depois de colar (os caracteres são removidos ao enviar)

### Formatação não aparece no Discord

**Problema:** A formatação Markdown não funciona.

**Solução:**
1. Verifique se copiou corretamente (incluindo os asteriscos, etc)
2. O Discord precisa que você envie a mensagem para processar o Markdown
3. Não funciona em todos os canais (alguns têm restrições)

### Emojis aparecem como quadrados

**Problema:** Emojis não são exibidos corretamente.

**Solução:**
1. Atualize seu navegador
2. Use uma versão recente do sistema operacional
3. Alguns emojis podem não ser suportados em sistemas mais antigos

### Preview não atualiza

**Problema:** O preview não mostra as mudanças.

**Solução:**
1. Recarregue a página (F5)
2. Limpe o cache do navegador
3. Verifique se não há erros no console (F12)

### Modo escuro não salva

**Problema:** Sempre volta para o modo claro.

**Solução:**
1. Verifique se seu navegador permite localStorage
2. Não está em modo anônimo/privado
3. Limpe os cookies e tente novamente

### Botão Home não funciona

**Problema:** Clicar no botão Home não volta para tela inicial.

**Solução:**
1. Recarregue a página
2. Verifique sua conexão com a internet
3. Limpe o cache do navegador

---

## 📚 Exemplos Práticos

### Exemplo 1: Anúncio de Evento (WhatsApp)

```
*📅 EVENTO IMPORTANTE*

_Data:_ ~15 de Janeiro~ *20 de Janeiro*
_Horário:_ ```19h00```
_Local:_ Shopping Center

*Confirmações:*
• João ✅
• Maria ✅
• Pedro ❓

_Use o código_ ```DESCONTO10``` _para 10% off!_
```

### Exemplo 2: Comunicado Técnico (Discord)

```
**🔧 Manutenção Programada**

> O servidor ficará offline para manutenção

**Início:** `15/01/2024 às 02:00`
**Término previsto:** `15/01/2024 às 06:00`

**Changelog:**
```
- Atualização do banco de dados
- Correção de bugs
- Melhorias de performance
```

||Senha temporária: admin123||

**Dúvidas?** Entre em contato com o suporte!
```

### Exemplo 3: Tutorial Rápido (WhatsApp)

```
*🎓 Como usar o Bot*

*Comandos disponíveis:*
1. ```/help``` - Mostra ajuda
2. ```/status``` - Verifica status
3. ```/config``` - Configurações

_Dica:_ Use ~```/admin```~ para funções avançadas

*Precisa de ajuda?*
Entre em contato! 📧
```

### Exemplo 4: Regras do Servidor (Discord)

```
**📜 REGRAS DO SERVIDOR**

**1. Respeito**
> Trate todos com respeito e educação

**2. Sem Spam**
> Proibido ~~spam~~ ou flood

**3. Conteúdo Permitido**
> Apenas conteúdo ||apropriado||

**Comandos úteis:**
`!regras` - Mostra as regras
`!suporte` - Abre ticket
`!ajuda` - Lista comandos

***Última atualização: 15/01/2024***
```

---

## 🎨 Personalização

### Alterando Cores

O projeto usa Tailwind CSS. Para personalizar cores, edite:

`tailwind.config.cjs` - Configurações de tema

### Adicionando Novos Editores

A estrutura modular permite adicionar facilmente novos editores:

1. Crie um novo arquivo em `src/pages/`
2. Implemente a lógica do editor
3. Adicione a rota em `src/App.jsx`
4. Adicione um card na `Home.jsx`

---

## 📞 Suporte

### Reportar Bugs

Se encontrar algum problema:
1. Abra uma issue no GitHub
2. Descreva o problema detalhadamente
3. Inclua prints se possível
4. Informe navegador e versão

### Sugestões

Tem ideias para melhorar? Compartilhe!
1. Abra uma issue com a tag `enhancement`
2. Descreva sua sugestão
3. Explique o benefício

---

## 🌟 Recursos Futuros

### Em Desenvolvimento
- [ ] Editor para Telegram
- [ ] Editor para Slack
- [ ] Histórico de mensagens
- [ ] Templates salvos
- [ ] Exportar como imagem
- [ ] Modo colaborativo

### Sugestões Aceitas
- Compartilhar via link
- API para integração
- Aplicativo mobile
- Extensão de navegador

---

## 📖 Referências

### WhatsApp
- [Guia oficial de formatação](https://faq.whatsapp.com/general/chats/how-to-format-your-messages/)

### Discord
- [Guia de Markdown do Discord](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-)

---

**Desenvolvido com ❤️ | Versão 3.0.0**

*Última atualização deste guia: Janeiro 2024*