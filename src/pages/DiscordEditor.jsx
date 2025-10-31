import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
  Code,
  FileCode,
  Eye,
  EyeOff,
  Copy,
  Trash2,
  Moon,
  Sun,
  Home,
  Quote,
  List,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function DiscordEditor() {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [showPreview, setShowPreview] = useState(true);
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  const updatePreview = (newText) => {
    if (!newText) {
      setPreview("");
      return;
    }

    let formatted = newText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Code blocks
    formatted = formatted.replace(
      /```([\s\S]+?)```/g,
      '<pre class="bg-[#2b2d31] p-3 rounded my-2 overflow-x-auto border border-[#1e1f22]"><code class="text-sm font-mono text-[#b9bbbe]">$1</code></pre>',
    );

    // Inline code
    formatted = formatted.replace(
      /`([^`]+?)`/g,
      '<code class="bg-[#1e1f22] px-1.5 py-0.5 rounded text-sm font-mono text-[#eb459e]">$1</code>',
    );

    // Spoilers
    formatted = formatted.replace(
      /\|\|(.+?)\|\|/g,
      '<span class="bg-[#1e1f22] text-[#1e1f22] hover:text-[#dcddde] cursor-pointer rounded px-1 transition-colors select-none" title="Clique para revelar">$1</span>',
    );

    // Bold
    formatted = formatted.replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="font-bold">$1</strong>',
    );

    // Underline
    formatted = formatted.replace(/__(.+?)__/g, '<u class="underline">$1</u>');

    // Italic
    formatted = formatted.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');

    // Strikethrough
    formatted = formatted.replace(
      /~~(.+?)~~/g,
      '<del class="line-through text-gray-400">$1</del>',
    );

    // Quotes
    formatted = formatted.replace(
      /^&gt; (.+)$/gm,
      '<div class="border-l-4 border-gray-500 pl-3 my-1 text-gray-300">$1</div>',
    );

    // Lists
    formatted = formatted.replace(
      /^- (.+)$/gm,
      '<div class="flex items-start gap-2 my-1"><span class="text-white mt-0.5">•</span><span>$1</span></div>',
    );

    // Line breaks
    formatted = formatted.replace(/\n/g, "<br>");

    setPreview(formatted);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updatePreview(newText);
  };

  const wrapText = (before, after = before) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);

    if (!selectedText) {
      // Se não há seleção, apenas insere os marcadores
      const beforeText = text.substring(0, start);
      const afterText = text.substring(end);
      const newText = beforeText + before + after + afterText;
      setText(newText);
      updatePreview(newText);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(
          start + before.length,
          start + before.length,
        );
      }, 0);
      return;
    }

    const beforeText = text.substring(0, start);
    const afterText = text.substring(end);

    const newText = beforeText + before + selectedText + after + afterText;
    setText(newText);
    updatePreview(newText);

    setTimeout(() => {
      textarea.focus();
      const newPos = start + before.length + selectedText.length + after.length;
      textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const applyBold = () => wrapText("**");
  const applyItalic = () => wrapText("*");
  const applyStrikethrough = () => wrapText("~~");
  const applyUnderline = () => wrapText("__");
  const applyInlineCode = () => wrapText("`");
  const applyCodeBlock = () => wrapText("```\n", "\n```");
  const applySpoiler = () => wrapText("||");

  const applyQuote = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    if (!selectedText) return;

    const beforeText = text.substring(0, start);
    const afterText = text.substring(end);
    const quotedText = selectedText
      .split("\n")
      .map((line) => (line.trim() ? `> ${line}` : line))
      .join("\n");

    const newText = beforeText + quotedText + afterText;
    setText(newText);
    updatePreview(newText);
    setTimeout(() => textarea.focus(), 0);
  };

  const applyList = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    if (!selectedText) return;

    const beforeText = text.substring(0, start);
    const afterText = text.substring(end);
    const listText = selectedText
      .split("\n")
      .map((line) => (line.trim() ? `- ${line}` : line))
      .join("\n");

    const newText = beforeText + listText + afterText;
    setText(newText);
    updatePreview(newText);
    setTimeout(() => textarea.focus(), 0);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert("✅ Texto copiado!");
  };

  const clearText = () => {
    if (confirm("Tem certeza que deseja limpar todo o texto?")) {
      setText("");
      setPreview("");
      textareaRef.current?.focus();
    }
  };

  const charCount = text.length;
  const lineCount = text ? text.split("\n").length : 0;

  // Ícone do Discord SVG
  const DiscordIcon = () => (
    <svg
      className="w-8 h-8"
      viewBox="0 0 71 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="71" height="55" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900" : "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50"}`}
    >
      <div className="container mx-auto p-4 max-w-7xl">
        {/* Header Melhorado */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("/")}
              className={`${darkMode ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} transition-all`}
            >
              <Home className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-xl ${darkMode ? "bg-indigo-600" : "bg-indigo-500"} shadow-lg`}
              >
                <DiscordIcon />
              </div>
              <div>
                <h1
                  className={`text-3xl sm:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  Editor Discord
                </h1>
                <p
                  className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Formatação Markdown Profissional
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowPreview(!showPreview)}
              className={`${darkMode ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} transition-all`}
              title={showPreview ? "Ocultar Preview" : "Mostrar Preview"}
            >
              {showPreview ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className={`${darkMode ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} transition-all`}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Card de Guia Rápido Melhorado */}
        <Card
          className={`mb-6 ${darkMode ? "bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-indigo-700/50 backdrop-blur" : "bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200"} shadow-xl`}
        >
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles
                className={`h-5 w-5 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
              />
              <CardTitle
                className={`text-xl ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Guia Rápido de Formatação
              </CardTitle>
            </div>
            <CardDescription
              className={darkMode ? "text-gray-300" : "text-gray-700"}
            >
              Todas as formatações disponíveis no Discord
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-3 text-sm ${darkMode ? "text-gray-200" : "text-gray-800"}`}
            >
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-gray-800/70" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}
              >
                <div className="font-semibold text-indigo-400 mb-1">
                  Negrito
                </div>
                <code className="text-xs text-gray-400">**texto**</code>
              </div>
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-gray-800/70" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}
              >
                <div className="font-semibold text-indigo-400 mb-1">
                  Itálico
                </div>
                <code className="text-xs text-gray-400">*texto*</code>
              </div>
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-gray-800/70" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}
              >
                <div className="font-semibold text-indigo-400 mb-1">
                  Sublinhado
                </div>
                <code className="text-xs text-gray-400">__texto__</code>
              </div>
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-gray-800/70" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}
              >
                <div className="font-semibold text-indigo-400 mb-1">
                  Tachado
                </div>
                <code className="text-xs text-gray-400">~~texto~~</code>
              </div>
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-gray-800/70" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}
              >
                <div className="font-semibold text-indigo-400 mb-1">Código</div>
                <code className="text-xs text-gray-400">`texto`</code>
              </div>
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-gray-800/70" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}
              >
                <div className="font-semibold text-indigo-400 mb-1">Bloco</div>
                <code className="text-xs text-gray-400">```texto```</code>
              </div>
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-gray-800/70" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}
              >
                <div className="font-semibold text-indigo-400 mb-1">
                  Spoiler
                </div>
                <code className="text-xs text-gray-400">||texto||</code>
              </div>
              <div
                className={`p-3 rounded-lg ${darkMode ? "bg-gray-800/70" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:scale-105 transition-transform`}
              >
                <div className="font-semibold text-indigo-400 mb-1">Quote</div>
                <code className="text-xs text-gray-400">&gt; texto</code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Barra de Ferramentas Melhorada */}
        <Card
          className={`mb-6 ${darkMode ? "bg-gray-800/70 border-gray-700 backdrop-blur shadow-xl" : "bg-white/90 backdrop-blur shadow-xl border-gray-200"}`}
        >
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 mr-2">
                  <span
                    className={`text-xs font-semibold ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Texto:
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applyBold}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <Bold className="h-4 w-4 mr-1" />
                  Negrito
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applyItalic}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <Italic className="h-4 w-4 mr-1" />
                  Itálico
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applyUnderline}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <Underline className="h-4 w-4 mr-1" />
                  Sublinhado
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applyStrikethrough}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <Strikethrough className="h-4 w-4 mr-1" />
                  Tachado
                </Button>

                <Separator orientation="vertical" className="h-8 mx-1" />

                <div className="flex items-center gap-1 mr-2">
                  <span
                    className={`text-xs font-semibold ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Código:
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applyInlineCode}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <Code className="h-4 w-4 mr-1" />
                  Inline
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applyCodeBlock}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <FileCode className="h-4 w-4 mr-1" />
                  Bloco
                </Button>

                <Separator orientation="vertical" className="h-8 mx-1" />

                <div className="flex items-center gap-1 mr-2">
                  <span
                    className={`text-xs font-semibold ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Especial:
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applySpoiler}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <EyeOff className="h-4 w-4 mr-1" />
                  Spoiler
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applyQuote}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <Quote className="h-4 w-4 mr-1" />
                  Quote
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={applyList}
                  className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-indigo-600" : "hover:bg-indigo-100"} transition-all`}
                >
                  <List className="h-4 w-4 mr-1" />
                  Lista
                </Button>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {charCount} caracteres
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {lineCount} linhas
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    disabled={!text}
                    className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-green-700" : "hover:bg-green-100"} transition-all`}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copiar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearText}
                    disabled={!text}
                    className={`${darkMode ? "bg-gray-700 border-gray-600 hover:bg-red-700" : "hover:bg-red-100"} transition-all`}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Limpar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Editor e Preview */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Editor */}
          <Card
            className={`${darkMode ? "bg-gray-800/70 border-gray-700 backdrop-blur shadow-xl" : "bg-white/90 backdrop-blur shadow-xl border-gray-200"}`}
          >
            <CardHeader>
              <CardTitle className={darkMode ? "text-white" : "text-gray-900"}>
                📝 Editor
              </CardTitle>
              <CardDescription
                className={darkMode ? "text-gray-400" : "text-gray-600"}
              >
                Digite ou cole seu texto aqui e use as ferramentas para formatar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                ref={textareaRef}
                value={text}
                onChange={handleTextChange}
                placeholder="Digite sua mensagem aqui... Experimente usar Markdown!"
                className={`min-h-[500px] font-mono text-base ${darkMode ? "bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500" : "bg-white border-gray-300"} focus:ring-2 focus:ring-indigo-500 transition-all`}
              />
            </CardContent>
          </Card>

          {/* Preview */}
          {showPreview && (
            <Card
              className={`${darkMode ? "bg-gray-800/70 border-gray-700 backdrop-blur shadow-xl" : "bg-white/90 backdrop-blur shadow-xl border-gray-200"}`}
            >
              <CardHeader>
                <CardTitle
                  className={darkMode ? "text-white" : "text-gray-900"}
                >
                  👁️ Preview Discord
                </CardTitle>
                <CardDescription
                  className={darkMode ? "text-gray-400" : "text-gray-600"}
                >
                  Veja como ficará no Discord (hover nos spoilers para revelar)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`min-h-[500px] p-4 rounded-lg ${darkMode ? "bg-[#36393f]" : "bg-gray-100"} border ${darkMode ? "border-gray-700" : "border-gray-300"}`}
                >
                  {preview ? (
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-semibold">U</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span
                            className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
                          >
                            Você
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date().toLocaleTimeString("pt-BR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <div
                          className={`text-[15px] leading-[1.375rem] break-words ${darkMode ? "text-[#dcddde]" : "text-gray-800"}`}
                          dangerouslySetInnerHTML={{ __html: preview }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <Sparkles
                        className={`h-12 w-12 mb-4 ${darkMode ? "text-gray-600" : "text-gray-400"}`}
                      />
                      <p
                        className={`${darkMode ? "text-gray-500" : "text-gray-400"} italic text-sm`}
                      >
                        O preview aparecerá aqui...
                      </p>
                      <p
                        className={`${darkMode ? "text-gray-600" : "text-gray-500"} text-xs mt-2`}
                      >
                        Digite algo no editor para começar
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
