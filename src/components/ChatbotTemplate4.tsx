import { X, Send, Headphones, ChevronDown, Sparkles } from 'lucide-react';

interface ChatbotTemplate4Props {
  isExpanded: boolean;
}

export function ChatbotTemplate4({ isExpanded }: ChatbotTemplate4Props) {
  return (
    <div className="relative">
      {/* Preview Container */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 min-h-[400px] flex items-end justify-end relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        {/* Chat Window */}
        {isExpanded && (
          <div className="absolute bottom-20 right-8 w-96 bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300 border border-slate-200">
            {/* Compact Header */}
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"></div>
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, #FCD34D 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              <div className="relative p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg rotate-3">
                        <Headphones className="w-5 h-5 text-blue-900 -rotate-3" />
                      </div>
                      <div className="absolute -top-1 -right-1">
                        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <div className="text-white flex items-center gap-2">
                        AI 智能助理
                        <span className="px-2 py-0.5 bg-yellow-400 text-blue-900 rounded-full text-xs">Pro</span>
                      </div>
                      <div className="text-yellow-300 text-xs flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                        </span>
                        即時在線
                      </div>
                    </div>
                  </div>
                  <button className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-slate-50">
              {/* System Message */}
              <div className="flex justify-center">
                <div className="bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-xs text-slate-700">對話開始於 今天 14:20</p>
                </div>
              </div>

              {/* Bot Welcome */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Headphones className="w-4 h-4 text-blue-900" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-md p-4 shadow-sm">
                    <p className="text-slate-800 text-sm">👋 您好！歡迎使用我們的 AI 客服系統</p>
                    <p className="text-slate-600 text-sm mt-2">我可以協助您：</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        產品諮詢與介紹
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        技術支援服務
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                        訂單查詢追蹤
                      </li>
                    </ul>
                  </div>
                  <span className="text-xs text-slate-400 ml-2">14:20</span>
                </div>
              </div>

              {/* Suggested Actions */}
              <div className="ml-11 grid grid-cols-2 gap-2">
                <button className="group p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 border border-yellow-200 rounded-xl transition-all hover:shadow-md">
                  <div className="text-left">
                    <div className="text-sm text-slate-800">💼 企業方案</div>
                    <div className="text-xs text-slate-500 mt-0.5">了解詳情</div>
                  </div>
                </button>
                <button className="group p-3 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 rounded-xl transition-all hover:shadow-md">
                  <div className="text-left">
                    <div className="text-sm text-slate-800">📞 專人服務</div>
                    <div className="text-xs text-slate-500 mt-0.5">立即聯繫</div>
                  </div>
                </button>
              </div>

              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="flex-1 flex flex-col items-end">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl rounded-tr-md p-4 shadow-md max-w-[85%]">
                    <p className="text-white text-sm">我想了解 AI 客服系統的整合方式</p>
                  </div>
                  <span className="text-xs text-slate-400 mr-2 mt-1">14:22</span>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Headphones className="w-4 h-4 text-blue-900" />
                </div>
                <div className="flex-1">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-md p-4 shadow-sm">
                    <p className="text-slate-800 text-sm">很好的問題！我們提供多種整合方式：</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start gap-2 p-2 bg-slate-50 rounded-lg">
                        <span className="text-lg">🔗</span>
                        <div>
                          <p className="text-sm text-slate-800">網站嵌入代碼</p>
                          <p className="text-xs text-slate-500">一行代碼即可完成</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2 bg-slate-50 rounded-lg">
                        <span className="text-lg">⚡</span>
                        <div>
                          <p className="text-sm text-slate-800">API 整合</p>
                          <p className="text-xs text-slate-500">靈活客製化</p>
                        </div>
                      </div>
                    </div>
                    <button className="mt-3 w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-lg text-sm transition-colors">
                      查看整合文件 →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200">
              <div className="flex gap-2 items-end">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="輸入您的問題..."
                    className="w-full px-4 py-3 pr-10 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                </div>
                <button className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  <Send className="w-5 h-5 text-blue-900" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-slate-400">Powered by AI</p>
                <div className="flex gap-1">
                  <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pill/Capsule Floating Button */}
        <div className="relative">
          <button className="group relative flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:to-yellow-500 pl-4 pr-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            {/* Icon Container */}
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
              <Headphones className="w-5 h-5 text-yellow-400" />
            </div>
            
            {/* Text */}
            <div className="text-left pr-2">
              <div className="text-blue-900 text-sm">需要幫助？</div>
              <div className="text-blue-800 text-xs">點擊開始對話</div>
            </div>

            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
          </button>

          {/* Expandable Info */}
          <div className="absolute bottom-16 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-blue-900 text-white px-4 py-3 rounded-2xl shadow-2xl max-w-xs">
              <p className="text-sm">⚡ 平均回應時間：{'<'} 10 秒</p>
              <p className="text-xs text-yellow-300 mt-1">24/7 全天候服務</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 rounded-full text-xs">膠囊按鈕</span>
        <span className="px-3 py-1 bg-blue-900/20 text-blue-900 rounded-full text-xs">動態展開</span>
        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs">智能建議</span>
      </div>
    </div>
  );
}