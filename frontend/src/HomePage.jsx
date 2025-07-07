import React from 'react';

function HomePage() {
  return (
    // Usando exatamente o mesmo container da outra página para manter a consistência visual
    <div className="bg-[#05040a] text-white min-h-screen flex items-center justify-center p-4" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(128, 0, 128, 0.3), transparent 70%)' }}>
      <h1 className="text-4xl font-bold animate-[fadeIn_1s_ease-out_forwards]">
        Página Inicial (Futura Landing Page do MaxMarketing Total)
      </h1>
    </div>
  );
}

export default HomePage;