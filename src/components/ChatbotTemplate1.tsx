import { MessageCircle, X, Send, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface ChatbotTemplate1Props {
  isExpanded: boolean;
}

export function ChatbotTemplate1({ isExpanded }: ChatbotTemplate1Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Preview Container */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 min-h-[400px] flex items-end justify-end relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-900/10 rounded-full blur-3xl"></div>

        {/* Chat Window */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="absolute bottom-24 right-8 w-80"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Chat Container with staggered animation */}
              <motion.div
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {/* Header */}
                <motion.div 
                  className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 flex items-center justify-between"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-white">AI 客服助理</div>
                      <div className="text-yellow-400 text-xs flex items-center gap-1">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                        在線服務中
                      </div>
                    </div>
                  </div>
                  <button className="text-white/80 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>

                {/* Messages */}
                <motion.div 
                  className="p-4 space-y-3 h-80 overflow-y-auto bg-slate-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {/* Bot Message */}
                  <motion.div 
                    className="flex gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-4 h-4 text-blue-900" />
                    </div>
                    <motion.div 
                      className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[80%]"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.2 }}
                    >
                      <p className="text-slate-700 text-sm">您好！我是 AI 客服助理，有什麼可以幫助您的嗎？</p>
                      <span className="text-xs text-slate-400 mt-1 block">10:23</span>
                    </motion.div>
                  </motion.div>

                  {/* User Message */}
                  <motion.div 
                    className="flex gap-2 justify-end"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    <motion.div 
                      className="bg-yellow-400 rounded-2xl rounded-tr-sm p-3 shadow-sm max-w-[80%]"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.2 }}
                    >
                      <p className="text-blue-900 text-sm">我想了解你們的服務</p>
                      <span className="text-xs text-blue-800/60 mt-1 block text-right">10:24</span>
                    </motion.div>
                  </motion.div>

                  {/* Bot Message with suggestions */}
                  <motion.div 
                    className="flex gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-4 h-4 text-blue-900" />
                    </div>
                    <div className="space-y-2 max-w-[80%]">
                      <motion.div 
                        className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.2 }}
                      >
                        <p className="text-slate-700 text-sm">很高興為您服務！我們提供以下解決方案：</p>
                      </motion.div>
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.3 }}
                      >
                        <motion.button 
                          className="w-full text-left bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl p-2.5 text-sm text-slate-700 transition-colors"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.1, duration: 0.2 }}
                        >
                          📱 智慧客服系統
                        </motion.button>
                        <motion.button 
                          className="w-full text-left bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl p-2.5 text-sm text-slate-700 transition-colors"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.2, duration: 0.2 }}
                        >
                          🤖 AI 機器人整合
                        </motion.button>
                        <motion.button 
                          className="w-full text-left bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl p-2.5 text-sm text-slate-700 transition-colors"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.3, duration: 0.2 }}
                        >
                          💬 多渠道整合方案
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Input */}
                <motion.div 
                  className="p-3 bg-white border-t border-slate-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="輸入您的問題..."
                      className="flex-1 px-4 py-2.5 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors">
                      <Send className="w-4 h-4 text-blue-900" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hexagon Floating Button */}
        <div className="relative">
          <button
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Hexagon Shape */}
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <motion.polygon
                  points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                  fill="url(#hexGradient)"
                  style={{ transformBox: 'fill-box' }}
                  animate={isHovered ? {
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                  } : {
                    scale: 1,
                    rotate: 0
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isHovered ? (
                    <motion.div
                      key="message"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MessageCircle className="w-7 h-7 text-blue-900" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="headphones"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Headphones className="w-7 h-7 text-blue-900" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* Notification Badge */}
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              1
            </motion.div>
            {/* Pulse Effect */}
            <div className="absolute inset-0 animate-ping opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                  fill="#FBBF24"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 rounded-full text-xs">六邊形設計</span>
        <span className="px-3 py-1 bg-blue-900/20 text-blue-900 rounded-full text-xs">耳機圖標</span>
        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs">脈衝動畫</span>
      </div>
    </div>
  );
}