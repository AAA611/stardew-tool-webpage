import React from 'react';
import './App.css';

function App() {
  const handleViewInstructions = () => {
    // 跳转到使用说明页面，这里使用星露谷 Wiki 作为示例
    window.location.href = 'https://zh.stardewvalleywiki.com/Stardew_Valley_Wiki'; 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-3xl w-full text-center space-y-8 p-8 z-10">
        <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow-sm">
            星露谷助手
            </h1>
            <p className="text-xl md:text-2xl font-light text-indigo-100/80">
            您的农场生活全方位指南
            </p>
        </div>
        
        <p className="text-lg text-indigo-200/90 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
          无论是种植作物、饲养动物，还是探索矿井、结交村民，我们都为您提供了详尽的数据与策略。
          点击下方按钮，立即开启您的完美庄园生活。
        </p>

        <div className="pt-8">
          <button
            onClick={handleViewInstructions}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700 hover:scale-105 shadow-lg shadow-indigo-500/30 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
            <span className="relative flex items-center">
                查看使用说明
                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </span>
          </button>
        </div>
      </div>
      
      <footer className="absolute bottom-6 text-indigo-300/60 text-sm z-10">
        © {new Date().getFullYear()} Stardew Webpage. Designed for Farmers.
      </footer>
    </div>
  );
}

export default App;
