import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import defaultIcon from 'figma:asset/0026f6117acba2357a08de7fb79632e41c192041.png';
import headphoneIcon from 'figma:asset/6cec63fabbf5dfe2371a675efb1ba9d44df76cfc.png';

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 flex items-end justify-end overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>

      {/* Floating Button */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isOpen ? (
            // Popup Dialog - replaces button
            <motion.div
              key="popup"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "backOut" }}
              className="relative"
            >
              {/* Chat Dialog */}
              <div className="w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-yellow-400">
                {/* Header */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <div className="text-blue-900">AI 客服</div>
                      <div className="text-blue-900/70 text-xs">隨時為您服務</div>
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
                    <p className="text-slate-700 mb-4">您好！我能為您做什麼？</p>
                    <div className="space-y-2">
                      <button className="w-full text-left px-4 py-3 bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-slate-700 transition-all hover:border-yellow-400 hover:shadow-md">
                        💬 開始對話
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-slate-700 transition-all hover:border-yellow-400 hover:shadow-md">
                        ❓ 常見問題
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-white hover:bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-slate-700 transition-all hover:border-yellow-400 hover:shadow-md">
                        📞 聯繫客服
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Triangle pointer */}
              <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-yellow-400"></div>
            </motion.div>
          ) : (
            // Icon Button
            <motion.button
              key="button"
              onClick={() => setIsOpen(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileTap={{ 
                scale: 0.9,
                rotate: [0, -3, 3, -3, 0],
                transition: { 
                  rotate: { duration: 0.4, ease: "easeInOut" },
                  scale: { duration: 0.15 }
                }
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon Content */}
              <AnimatePresence mode="wait">
                {isHovered ? (
                  // Hover State - Headphone Icon
                  <motion.img
                    key="headphone"
                    src={headphoneIcon}
                    alt="headphone"
                    className="w-24 h-24 object-contain"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ 
                      scale: 1, 
                      rotate: 0,
                    }}
                    exit={{ scale: 0, rotate: 45 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "backOut"
                    }}
                  />
                ) : (
                  // Default State - Chat Bubble Icon
                  <motion.img
                    key="default"
                    src={defaultIcon}
                    alt="chat"
                    className="w-24 h-24 object-contain"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ 
                      scale: 1, 
                      rotate: 0,
                    }}
                    exit={{ scale: 0, rotate: -45 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "backOut"
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Pulse Ring Effect */}
              <motion.div
                className="absolute inset-0 -z-10 bg-yellow-400/30 rounded-full"
                animate={{
                  scale: [1, 1.4, 1.4],
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