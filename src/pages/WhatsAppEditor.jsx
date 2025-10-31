import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import bgWhatsApp from "../assets/bgwhatsapp.png";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Copy,
  Download,
  Trash2,
  Moon,
  Sun,
  Smile,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Toaster, toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function WhatsAppEditor() {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  // Atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case "b":
            e.preventDefault();
            applyFormat("*");
            break;
          case "i":
            e.preventDefault();
            applyFormat("_");
            break;
          case "k":
            e.preventDefault();
            applyFormat("~");
            break;
          case "m":
            e.preventDefault();
            applyFormat("```");
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [text]);

  // Carregar preferência de tema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Salvar preferência de tema
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Função para aplicar formatação
  const applyFormat = (prefix, suffix = prefix) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);

    if (selectedText) {
      const newText =
        text.substring(0, start) +
        prefix +
        selectedText +
        suffix +
        text.substring(end);

      setText(newText);
      updatePreview(newText);

      // Manter foco e seleção
      setTimeout(() => {
        textarea.focus();
        const newStart = start + prefix.length;
        const newEnd = end + prefix.length;
        textarea.setSelectionRange(newStart, newEnd);
      }, 0);

      toast.success("Formatação aplicada!");
    } else {
      toast.error("Selecione um texto primeiro!");
    }
  };

  // Função para criar listas
  const applyList = (type) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);

    if (selectedText) {
      const lines = selectedText.split("\n");
      const formattedLines = lines.map((line, index) => {
        if (line.trim() === "") return line;
        return type === "bullet"
          ? `• ${line.trim()}`
          : `${index + 1}. ${line.trim()}`;
      });

      const newText =
        text.substring(0, start) +
        formattedLines.join("\n") +
        text.substring(end);

      setText(newText);
      updatePreview(newText);
      toast.success("Lista criada!");
    } else {
      toast.error("Selecione o texto para transformar em lista!");
    }
  };

  // Atualizar preview com formatação visual
  const updatePreview = (value) => {
    if (!value) {
      setPreview("");
      return;
    }

    let formatted = value;

    // Converter emojis problemáticos para HTML entities
    const emojiMap = {
      "❌": "&#x274C;", // Cross Mark
      "✅": "&#x2705;", // Check Mark
      "⚠️": "&#x26A0;&#xFE0F;", // Warning
      "🚫": "&#x1F6AB;", // No Entry
      "📍": "&#x1F4CD;", // Round Pushpin
      "⭕": "&#x2B55;", // Hollow Red Circle
      "❗": "&#x2757;", // Exclamation Mark
      "❓": "&#x2753;", // Question Mark
    };

    // Aplicar mapeamento de emojis
    Object.keys(emojiMap).forEach((emoji) => {
      const regex = new RegExp(emoji, "g");
      formatted = formatted.replace(regex, emojiMap[emoji]);
    });

    // Negrito: *texto*
    formatted = formatted.replace(
      /\*([^*]+)\*/g,
      '<strong class="font-bold">$1</strong>',
    );

    // Itálico: _texto_
    formatted = formatted.replace(/_([^_]+)_/g, '<em class="italic">$1</em>');

    // Tachado: ~texto~
    formatted = formatted.replace(
      /~([^~]+)~/g,
      '<del class="line-through">$1</del>',
    );

    // Monoespaçado: ```texto```
    formatted = formatted.replace(
      /```([^`]+)```/g,
      "<code style=\"font-family: monospace, 'Courier New', Courier; background-color: rgba(255, 255, 255, 0.15); color: #fff; padding: 2px 6px; border-radius: 3px; font-size: 13px; display: inline;\">$1</code>",
    );

    // Quebras de linha
    formatted = formatted.replace(/\n/g, "<br>");

    setPreview(formatted);
  };

  // Atualizar preview quando mudar o tema
  useEffect(() => {
    updatePreview(text);
  }, [darkMode]);

  // Copiar para área de transferência
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("✅ Texto copiado com sucesso!"))
      .catch(() => toast.error("❌ Erro ao copiar texto"));
  };

  // Baixar como arquivo .txt
  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `whatsapp-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("📥 Arquivo baixado!");
  };

  // Limpar tudo
  const clearAll = () => {
    if (text) {
      setText("");
      setPreview("");
      toast.success("🗑️ Texto limpo!");
    }
  };

  // Inserir emoji do picker
  const handleEmojiClick = (emojiObject) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const emoji = emojiObject.emoji;

    const newText = text.substring(0, start) + emoji + text.substring(end);
    setText(newText);
    updatePreview(newText);

    // Manter foco e posicionar cursor após o emoji
    setTimeout(() => {
      textarea.focus();
      const newPosition = start + emoji.length;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);

    toast.success("Emoji adicionado! " + emoji);
  };

  // Calcular estatísticas
  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lineCount = text ? text.split("\n").length : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-950 dark:to-gray-900 py-8 px-4 transition-colors duration-300">
      <Toaster
        richColors
        position="top-right"
        theme={darkMode ? "dark" : "light"}
      />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate("/")}
                  className="rounded-xl"
                >
                  <Home className="h-5 w-5" />
                </Button>
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-3xl">Editor WhatsApp</CardTitle>
                  <CardDescription>
                    Formate suas mensagens com estilo ✨
                  </CardDescription>
                </div>
              </div>

              {/* Toggle Dark Mode */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-xl"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Toolbar */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => applyFormat("*")}
                variant="secondary"
                className="gap-2"
                title="Negrito (Ctrl+B)"
              >
                <Bold className="w-4 h-4" />
                Negrito
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ⌘B
                </kbd>
              </Button>

              <Button
                onClick={() => applyFormat("_")}
                variant="secondary"
                className="gap-2"
                title="Itálico (Ctrl+I)"
              >
                <Italic className="w-4 h-4" />
                Itálico
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ⌘I
                </kbd>
              </Button>

              <Button
                onClick={() => applyFormat("~")}
                variant="secondary"
                className="gap-2"
                title="Tachado (Ctrl+K)"
              >
                <Strikethrough className="w-4 h-4" />
                Tachado
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ⌘K
                </kbd>
              </Button>

              <Button
                onClick={() => applyFormat("```")}
                variant="secondary"
                className="gap-2"
                title="Monoespaçado (Ctrl+M)"
              >
                <Code className="w-4 h-4" />
                Código
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ⌘M
                </kbd>
              </Button>

              <Separator orientation="vertical" className="h-9" />

              <Button
                onClick={() => applyList("bullet")}
                variant="secondary"
                className="gap-2"
                title="Lista com marcadores"
              >
                <List className="w-4 h-4" />
                Lista
              </Button>

              <Button
                onClick={() => applyList("numbered")}
                variant="secondary"
                className="gap-2"
                title="Lista numerada"
              >
                <ListOrdered className="w-4 h-4" />
                Numerada
              </Button>

              <Separator orientation="vertical" className="h-9" />

              {/* Seletor de Emojis */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="secondary"
                    className="gap-2"
                    title="Inserir emoji"
                  >
                    <Smile className="w-4 h-4" />
                    Emoji
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 border-0">
                  <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    theme={darkMode ? "dark" : "light"}
                    width="100%"
                    height="400px"
                    searchPlaceHolder="Buscar emoji..."
                    previewConfig={{
                      showPreview: false,
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        {/* Editor e Preview */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Editor */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">📝 Editor</CardTitle>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-xs">
                    {charCount} caracteres
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {wordCount} palavras
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {lineCount} linhas
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  updatePreview(e.target.value);
                }}
                placeholder="Digite ou cole seu texto aqui... ✍️"
                className="min-h-[400px] font-mono text-sm resize-none"
              />
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">👁️ Preview WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="min-h-[400px] p-4 rounded-md overflow-y-auto"
                style={{
                  backgroundImage: `url(${bgWhatsApp})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "repeat",
                  backgroundColor: "#0b141a",
                }}
              >
                {preview ? (
                  <div className="max-w-[85%] bg-[#005c4b] text-white px-3 py-2.5 rounded-[7.5px] shadow-lg relative ml-auto mb-2">
                    <div
                      className="text-[14.2px] leading-[19px] break-words whitespace-pre-wrap"
                      style={{
                        wordWrap: "break-word",
                        fontFamily:
                          "system-ui, -apple-system, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif",
                      }}
                      dangerouslySetInnerHTML={{ __html: preview }}
                    />
                    {/* Hora da mensagem */}
                    <div className="text-[11px] text-white/60 text-right mt-1 select-none">
                      {new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500 text-sm">
                      O preview aparecerá aqui...
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={copyToClipboard}
                disabled={!text}
                className="flex-1 gap-2"
                size="lg"
              >
                <Copy className="w-5 h-5" />
                Copiar Texto
              </Button>

              <Button
                onClick={downloadText}
                disabled={!text}
                variant="secondary"
                className="gap-2"
                size="lg"
              >
                <Download className="w-5 h-5" />
                Baixar
              </Button>

              <Button
                onClick={clearAll}
                disabled={!text}
                variant="destructive"
                className="gap-2"
                size="lg"
              >
                <Trash2 className="w-5 h-5" />
                Limpar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info */}
        <Card>
          <CardHeader>
            <CardTitle>💡 Como usar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">
                  Formatação
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Selecione o texto e clique no botão desejado</li>
                  <li>• Use atalhos de teclado para mais agilidade</li>
                  <li>• Combine formatações para mais variedade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Listas
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Coloque cada item em uma linha separada</li>
                  <li>• Selecione tudo antes de aplicar a lista</li>
                  <li>• Escolha entre lista com pontos ou numerada</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default WhatsAppEditor;
