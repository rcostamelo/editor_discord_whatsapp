function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          🎨 Teste de Tailwind CSS
        </h1>

        <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Se você vê cores e estilos, o Tailwind funciona! ✅
          </h2>
          <p className="text-gray-600 mb-4">
            Este é um teste simples para verificar se o Tailwind CSS está
            carregando corretamente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-red-500 text-white p-4 rounded-lg">
              <p className="font-bold">Vermelho</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <p className="font-bold">Verde</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              <p className="font-bold">Azul</p>
            </div>
          </div>

          <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Botão de Teste
          </button>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
          <p className="font-bold">⚠️ Alerta</p>
          <p>
            Se você não vê cores nesta página, o Tailwind não está funcionando.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Test;
