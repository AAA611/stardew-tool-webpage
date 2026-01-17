import React from 'react';

const FishingScene = () => {
  return (
    <>
      {/* 全屏宽度的河流背景 */}
      <div className="fixed bottom-0 left-0 w-full h-16 bg-[#1e90ff]/60 pointer-events-none z-30 overflow-hidden">
        {/* 动态波浪效果 (SVG 路径波浪) */}
        <div className="absolute top-0 w-[200%] h-full flex animate-wave-move opacity-40">
           <svg viewBox="0 0 200 64" preserveAspectRatio="none" className="w-1/2 h-full">
              <path d="M0 10 Q 25 20, 50 10 T 100 10 T 150 10 T 200 10 V 64 H 0 Z" fill="white" opacity="0.3"/>
              <path d="M0 25 Q 25 35, 50 25 T 100 25 T 150 25 T 200 25 V 64 H 0 Z" fill="white" opacity="0.2"/>
           </svg>
           <svg viewBox="0 0 200 64" preserveAspectRatio="none" className="w-1/2 h-full">
              <path d="M0 10 Q 25 20, 50 10 T 100 10 T 150 10 T 200 10 V 64 H 0 Z" fill="white" opacity="0.3"/>
              <path d="M0 25 Q 25 35, 50 25 T 100 25 T 150 25 T 200 25 V 64 H 0 Z" fill="white" opacity="0.2"/>
           </svg>
        </div>
        
        {/* 第二层波浪 (视差效果) */}
        <div className="absolute top-2 w-[200%] h-full flex animate-wave-move opacity-30 animation-delay-2000" style={{animationDuration: '6s'}}>
           <svg viewBox="0 0 200 64" preserveAspectRatio="none" className="w-1/2 h-full">
              <path d="M0 15 Q 25 5, 50 15 T 100 15 T 150 15 T 200 15 V 64 H 0 Z" fill="white" opacity="0.3"/>
           </svg>
           <svg viewBox="0 0 200 64" preserveAspectRatio="none" className="w-1/2 h-full">
              <path d="M0 15 Q 25 5, 50 15 T 100 15 T 150 15 T 200 15 V 64 H 0 Z" fill="white" opacity="0.3"/>
           </svg>
        </div>

        {/* 游动的小鱼 */}
        <div className="absolute top-1/2 left-0 w-full h-full">
            {/* 小鱼 1 (向右游) */}
            <div className="absolute top-2 animate-swim-right">
                <div className="animate-fish-bounce">
                    <svg width="12" height="8" viewBox="0 0 12 8" className="pixel-art">
                        <rect x="2" y="2" width="6" height="4" fill="#FFA500"/>
                        <rect x="8" y="3" width="2" height="2" fill="#FFA500"/> {/* 尾巴 */}
                        <rect x="3" y="3" width="1" height="1" fill="black"/> {/* 眼睛 */}
                        <rect x="0" y="3" width="2" height="2" fill="#FF8C00"/> {/* 鳍 */}
                    </svg>
                </div>
            </div>

             {/* 小鱼 2 (向右游，不同颜色和速度) */}
            <div className="absolute top-6 animate-swim-right animation-delay-2000">
                <div className="animate-fish-bounce">
                    <svg width="10" height="6" viewBox="0 0 12 8" className="pixel-art">
                        <rect x="2" y="2" width="6" height="4" fill="#00CED1"/>
                        <rect x="8" y="3" width="2" height="2" fill="#00CED1"/>
                        <rect x="3" y="3" width="1" height="1" fill="black"/>
                    </svg>
                </div>
            </div>

            {/* 小鱼 3 (向左游) */}
            <div className="absolute top-4 animate-swim-left animation-delay-4000">
                 <div className="animate-fish-bounce">
                    <svg width="14" height="10" viewBox="0 0 12 8" className="pixel-art">
                        <rect x="2" y="2" width="6" height="4" fill="#FF69B4"/>
                        <rect x="8" y="3" width="2" height="2" fill="#FF69B4"/>
                        <rect x="3" y="3" width="1" height="1" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
      </div>
      
      {/* 垂钓场景 (叠加在河流之上) */}
      <div className="fixed bottom-0 right-[20%] w-64 h-48 pointer-events-none z-40">
        <div className="relative w-full h-full">
          {/* 像素风格垂钓场景 SVG */}
          <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl pixel-art">
            
            {/* 移除 SVG 内部的水面 rect，改用外部 div 实现全宽 */}
            {/* <rect x="0" y="32" width="64" height="16" fill="#1e90ff" opacity="0.6"/> */}
            
            {/* 码头 (木头) */}
          <rect x="36" y="28" width="28" height="2" fill="#8B4513"/> {/* 地板顶面 */}
          <rect x="36" y="30" width="28" height="4" fill="#654321"/> {/* 地板侧面 */}
          <rect x="40" y="34" width="2" height="10" fill="#654321"/> {/* 柱子1 */}
          <rect x="50" y="34" width="2" height="8" fill="#654321"/> {/* 柱子2 */}
          <rect x="60" y="34" width="2" height="6" fill="#654321"/> {/* 柱子3 */}

          {/* 角色 (坐姿) */}
          {/* 腿 (垂在码头边) */}
          <rect x="46" y="30" width="2" height="5" fill="#2F4F4F"/>
          <rect x="49" y="30" width="2" height="5" fill="#2F4F4F"/>
          
          {/* 身体 */}
          <rect x="45" y="22" width="6" height="8" fill="#B22222"/> {/* 红衬衫 */}
          <rect x="46" y="23" width="4" height="7" fill="#2F4F4F"/> {/* 背带裤 */}
          
          {/* 头 */}
          <rect x="45" y="17" width="6" height="5" fill="#FFDAB9"/> {/* 脸 */}
          {/* 草帽 */}
          <rect x="43" y="16" width="10" height="1" fill="#DAA520"/>
          <rect x="44" y="15" width="8" height="1" fill="#DAA520"/>
          <rect x="45" y="14" width="6" height="1" fill="#DAA520"/>

          {/* 手臂 (持竿) */}
          <rect x="47" y="24" width="4" height="2" fill="#B22222" className="animate-rod-sway" style={{transformOrigin: '0 50%'}}/>

          {/* 鱼竿 */}
          <g className="animate-rod-sway" style={{transformOrigin: '48px 25px'}}>
             {/* 竿身 */}
            <rect x="48" y="24" width="14" height="1" fill="#8B4513" transform="rotate(-15 48 25)"/>
            {/* 鱼线 */}
            <line x1="61" y1="21" x2="61" y2="38" stroke="white" strokeWidth="0.5" opacity="0.6"/>
          </g>

          {/* 浮漂 (在水中浮动) */}
          <g className="animate-float" style={{transformBox: 'fill-box', transformOrigin: 'center'}}>
             <rect x="60" y="37" width="2" height="2" fill="white"/>
             <rect x="60" y="38" width="2" height="1" fill="red"/>
          </g>

          {/* 水波纹 (在浮漂周围) */}
          <g className="animate-ripple" style={{transformOrigin: '61px 38px'}}>
             <circle cx="61" cy="38" r="3" stroke="white" strokeWidth="0.5" opacity="0.5" fill="none"/>
          </g>
          <g className="animate-ripple animation-delay-2000" style={{transformOrigin: '61px 38px'}}>
             <circle cx="61" cy="38" r="3" stroke="white" strokeWidth="0.5" opacity="0.5" fill="none"/>
          </g>

          {/* 岸边的小草/装饰 */}
          <rect x="58" y="27" width="1" height="1" fill="#228B22"/>
          <rect x="62" y="27" width="1" height="1" fill="#228B22"/>

        </svg>
      </div>
    </div>
    </>
  );
};

export default FishingScene;
