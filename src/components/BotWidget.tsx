import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import botIcon from 'figma:asset/0a88eda78c15591618514b91b1e64a4004a0ea02.png';
import botIconHover from 'figma:asset/6b79248706634d3b6c70ca28b999c9041836ed83.png';
import backgroundImg from 'figma:asset/ea5540fcf245c70d949ef4087f2559b896e451e2.png';

export function BotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative min-h-[600px] bg-cover bg-center rounded-2xl p-8 flex items-end justify-end overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>

      {/* Floating Button */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isOpen ? (
            // Popup Dialog
            <motion.div
              key="popup"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.08, ease: "easeOut" }}
              className="relative"
            >
              {/* Chat Dialog */}
              <div className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-yellow-400">
                {/* Header */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={botIcon} 
                      alt="bot" 
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <div className="text-blue-900">AI 智能助手</div>
                      <div className="text-blue-900/70 text-xs">24/7 在線服務</div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => {
                      setIsOpen(false);
                      setIsHovered(false);
                    }}
                    className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-blue-900" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-slate-700 mb-4">嗨！我是您的 AI 助手，有什麼可以幫您的嗎？</p>
                    <div className="space-y-2">
                      <button className="w-full text-left px-4 py-3 bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-slate-700 transition-all hover:border-yellow-400 hover:shadow-md">
                        🤖 AI 功能介紹
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-slate-700 transition-all hover:border-yellow-400 hover:shadow-md">
                        💡 智能建議
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-slate-700 transition-all hover:border-yellow-400 hover:shadow-md">
                        📊 數據分析
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-slate-200 bg-white">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="輸入您的問題..." 
                      className="flex-1 px-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-xl transition-colors"
                    >
                      發送
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Triangle pointer */}
              <div className="absolute -bottom-3 right-12 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-yellow-400"></div>
            </motion.div>
          ) : (
            // Icon Button
            <motion.button
              key="button"
              onClick={() => setIsOpen(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ 
                scale: 0.9,
                rotate: [0, -5, 5, -5, 0],
                transition: { 
                  rotate: { duration: 0.4, ease: "easeInOut" },
                  scale: { duration: 0.15 }
                }
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                  >
                    <div className="bg-white text-black px-4 py-2 rounded-xl shadow-2xl">
                      需要我幫助嗎？
                    </div>
                    {/* Triangle pointer */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white drop-shadow-md"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bot Icon with smooth transition */}
              <div className="relative w-28 h-28">
                <motion.img
                  src={botIcon}
                  alt="AI Bot"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                  animate={{
                    y: [0, -8, 0],
                    opacity: isHovered ? 0 : 1,
                    scale: isHovered ? 0.8 : 1,
                    rotate: isHovered ? -15 : 0
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: {
                      duration: 0.25,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 0.25,
                      ease: "easeOut"
                    },
                    rotate: {
                      duration: 0.25,
                      ease: "easeOut"
                    }
                  }}
                />
                <motion.img
                  src={botIconHover}
                  alt="AI Bot Hover"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                  animate={{
                    y: [0, -8, 0],
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    rotate: isHovered ? 0 : 15
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: {
                      duration: 0.25,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 0.25,
                      ease: "easeOut"
                    },
                    rotate: {
                      duration: 0.25,
                      ease: "easeOut"
                    }
                  }}
                />
              </div>

              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 -z-10 bg-yellow-400/40 rounded-full blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />

              {/* Pulse Ring Effect */}
              <motion.div
                className="absolute inset-0 -z-20 bg-yellow-400/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.4, 0, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}