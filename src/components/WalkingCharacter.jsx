import React from 'react';

const WalkingCharacter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-50 overflow-hidden">
      <div className="absolute bottom-4 animate-walk">
        {/* 像素风格祝尼魔 (Junimo) SVG */}
        <div className="w-16 h-16 animate-bounce-walk">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg pixel-art">
                {/* 身体主体 (苹果形状) */}
                <rect x="4" y="4" width="8" height="8" fill="#88CC00"/>
                <rect x="3" y="5" width="1" height="6" fill="#88CC00"/>
                <rect x="12" y="5" width="1" height="6" fill="#88CC00"/>
                <rect x="5" y="3" width="6" height="1" fill="#88CC00"/>
                <rect x="5" y="12" width="6" height="1" fill="#88CC00"/>
                
                {/* 描边 (深绿色) */}
                <rect x="4" y="3" width="1" height="1" fill="#446600"/>
                <rect x="11" y="3" width="1" height="1" fill="#446600"/>
                <rect x="3" y="4" width="1" height="1" fill="#446600"/>
                <rect x="12" y="4" width="1" height="1" fill="#446600"/>
                <rect x="2" y="5" width="1" height="6" fill="#446600"/>
                <rect x="13" y="5" width="1" height="6" fill="#446600"/>
                <rect x="3" y="11" width="1" height="1" fill="#446600"/>
                <rect x="12" y="11" width="1" height="1" fill="#446600"/>
                <rect x="4" y="12" width="1" height="1" fill="#446600"/>
                <rect x="11" y="12" width="1" height="1" fill="#446600"/>
                <rect x="5" y="13" width="6" height="1" fill="#446600"/>
                <rect x="5" y="2" width="6" height="1" fill="#446600"/>

                {/* 叶子 */}
                <rect x="7" y="1" width="2" height="1" fill="#446600"/>
                <rect x="8" y="0" width="1" height="1" fill="#446600"/>
                
                {/* 眼睛 */}
                <rect x="5" y="7" width="1" height="2" fill="black"/>
                <rect x="10" y="7" width="1" height="2" fill="black"/>
                
                {/* 腮红 */}
                <rect x="4" y="8" width="1" height="1" fill="#FF99AA" opacity="0.8"/>
                <rect x="11" y="8" width="1" height="1" fill="#FF99AA" opacity="0.8"/>

                {/* 手 */}
                <rect x="1" y="8" width="2" height="1" fill="#446600"/>
                <rect x="13" y="8" width="2" height="1" fill="#446600"/>

                {/* 脚 */}
                <rect x="6" y="13" width="1" height="2" fill="#446600"/>
                <rect x="9" y="13" width="1" height="2" fill="#446600"/>
            </svg>
        </div>
      </div>
      
      {/* 像素鸡 SVG (跟随其后) */}
      <div className="absolute bottom-4 animate-walk animation-delay-2000">
        <div className="w-12 h-12 ml-24 animate-bounce-walk-fast">
             <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md pixel-art">
                {/* 简单的像素鸡绘制 */}
                <rect x="4" y="2" width="6" height="8" fill="white"/>
                <rect x="10" y="4" width="2" height="4" fill="white"/>
                <rect x="2" y="4" width="2" height="4" fill="white"/>
                {/* 眼睛 */}
                <rect x="10" y="3" width="1" height="1" fill="black"/>
                {/* 嘴巴 */}
                <rect x="11" y="4" width="2" height="1" fill="#FFAA00"/>
                {/* 鸡冠 */}
                <rect x="6" y="1" width="2" height="1" fill="#FF0000"/>
                {/* 脚 */}
                <rect x="5" y="10" width="1" height="2" fill="#FFAA00"/>
                <rect x="8" y="10" width="1" height="2" fill="#FFAA00"/>
             </svg>
        </div>
      </div>
    </div>
  );
};

export default WalkingCharacter;
