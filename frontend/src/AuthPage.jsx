import { useState } from 'react';
import './index.css';
import maxMascot from './robozinho_max_mmkt_total.jpg'; // <-- CAMINHO CORRIGIDO AQUI

function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="bg-[#05040a] text-gray-200 min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(128, 0, 128, 0.3), transparent 70%)' }}>
      
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8 animate-[enterScene_1.5s_cubic-bezier(0.25,1,0.5,1)_forwards] opacity-0">
          <img 
            src={maxMascot}
            alt="Mascote Max, um robô roxo amigável" 
            className="h-24 w-24 mx-auto mb-4" 
          />
          <h1 className="text-3xl font-bold text-white">Central de Comando</h1>
          <p className="text-gray-400 max-w-xs mx-auto">Conheça o Poder do Ecossistema de Agentes de IA do MaxMarketing Total</p>
        </div>

        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl animate-[fadeIn_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.5s' }}>
          
          <div className="flex border-b border-gray-700 mb-6">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 font-semibold transition-all duration-300 ${activeTab === 'login' ? 'text-white border-b-2 border-blue-violet-500' : 'text-gray-400 border-b-2 border-transparent'}`}
            >
              Login
            </button>
            <button 
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2 font-semibold transition-all duration-300 ${activeTab === 'register' ? 'text-white border-b-2 border-blue-violet-500' : 'text-gray-400 border-b-2 border-transparent'}`}
            >
              Registrar
            </button>
          </div>

          {activeTab === 'login' && (
            <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
              <form>
                <div className="mb-4">
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                  <input type="email" id="login-email" placeholder="seuemail@exemplo.com" className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#3a3a5a] text-white transition-all duration-300 focus:border-blue-violet-500 focus:ring-2 focus:ring-blue-violet-500/50 outline-none" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
                  <input type="password" id="login-password" placeholder="********" className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#3a3a5a] text-white transition-all duration-300 focus:border-blue-violet-500 focus:ring-2 focus:ring-blue-violet-500/50 outline-none" required />
                </div>
                <button type="submit" className="w-full text-white font-bold py-3 px-6 rounded-lg text-lg bg-gradient-to-r from-blue-violet-500 to-fuchsia-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/40">
                  Acessar o Max Agora
                </button>
              </form>
              <div className="text-center mt-4">
                <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">Esqueceu sua senha?</a>
              </div>
            </div>
          )}

          {activeTab === 'register' && (
            <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
              <h2 className="text-xl font-bold text-center mb-1 text-white">Primeiro acesso ao Mundo do Max</h2>
              <p className="text-center text-gray-400 mb-4 text-sm">Crie sua conta para começar.</p>
              <form>
                <div className="mb-4">
                  <label htmlFor="register-email" className="block text-sm font-medium text-gray-300 mb-2">Seu melhor e-mail</label>
                  <input type="email" id="register-email" placeholder="seuemail@exemplo.com" className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#3a3a5a] text-white transition-all duration-300 focus:border-blue-violet-500 focus:ring-2 focus:ring-blue-violet-500/50 outline-none" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-300 mb-2">Crie uma senha</label>
                  <input type="password" id="register-password" placeholder="Mínimo 6 caracteres" className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#3a3a5a] text-white transition-all duration-300 focus:border-blue-violet-500 focus:ring-2 focus:ring-blue-violet-500/50 outline-none" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="activation-key" className="block text-sm font-medium text-gray-300 mb-2">Chave de Ativação</label>
                  <input type="text" id="activation-key" placeholder="Insira sua chave aqui" className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-[#3a3a5a] text-white transition-all duration-300 focus:border-blue-violet-500 focus:ring-2 focus:ring-blue-violet-500/50 outline-none" required />
                </div>
                <button type="submit" className="w-full text-white font-bold py-3 px-6 rounded-lg text-lg bg-gradient-to-r from-blue-violet-500 to-fuchsia-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/40">
                  Registrar e Acessar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;