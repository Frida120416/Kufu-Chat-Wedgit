import { X, Send, User, Clock } from 'lucide-react';

interface ChatbotTemplate8Props {
  isExpanded: boolean;
}

export function ChatbotTemplate8({ isExpanded }: ChatbotTemplate8Props) {
  return (
    <div className="relative">
      {/* Preview Container */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 min-h-[400px] flex items-end justify-end relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>

        {/* Chat Window */}
        {isExpanded && (
          <div className="absolute bottom-28 right-8 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
            {/* Header */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"></div>
              <div className="relative p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center ring-4 ring-blue-700 shadow-lg">
                        <User className="w-6 h-6 text-blue-900" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-blue-900"></div>
                    </div>
                    <div>
                      <div className="text-white">專屬客服顧問</div>
                      <div className="text-yellow-300 text-xs flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        通常在 1 分鐘內回覆
                      </div>
                    </div>
                  </div>
                  <button className="text-white/80 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 h-80 overflow-y-auto bg-gradient-to-b from-white to-slate-50">
              {/* Time Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-slate-200"></div>
                <span className="text-xs text-slate-400">今天</span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              {/* Bot Message */}
              <div className="flex gap-2 items-end">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <User className="w-4 h-4 text-blue-900" />
                </div>
                <div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md p-3.5 shadow-sm max-w-[220px]">
                    <p className="text-slate-800 text-sm">您好！我是您的專屬客服顧問 👋</p>
                    <p className="text-slate-600 text-sm mt-1.5">很高興為您服務，請問有什麼需要協助的嗎？</p>
                  </div>
                  <span className="text-xs text-slate-400 ml-2 mt-1 block">15:32</span>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="ml-10 grid grid-cols-2 gap-2">
                <button className="p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 border border-yellow-200 rounded-xl transition-all hover:shadow-md text-left group">
                  <div className="text-2xl mb-1">💼</div>
                  <div className="text-xs text-slate-800">產品諮詢</div>
                </button>
                <button className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 rounded-xl transition-all hover:shadow-md text-left group">
                  <div className="text-2xl mb-1">🎯</div>
                  <div className="text-xs text-slate-800">技術支援</div>
                </button>
              </div>

              {/* User Message */}
              <div className="flex gap-2 justify-end items-end">
                <div>
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl rounded-br-md p-3.5 shadow-md max-w-[220px]">
                    <p className="text-white text-sm">我想了解你們的整合方案</p>
                  </div>
                  <span className="text-xs text-slate-400 mr-2 mt-1 block text-right">15:33</span>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex gap-2 items-end">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <User className="w-4 h-4 text-blue-900" />
                </div>
                <div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md p-3.5 shadow-sm max-w-[220px]">
                    <p className="text-slate-800 text-sm">當然！我們提供完整的整合方案 🚀</p>
                    <div className="mt-3 p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
                      <p className="text-sm text-slate-800 mb-2">包含：</p>
                      <ul className="space-y-1 text-xs text-slate-600">
                        <li>✓ API 串接服務</li>
                        <li>✓ 客製化介面</li>
                        <li>✓ 技術文件支援</li>
                        <li>✓ 專人協助整合</li>
                      </ul>
                    </div>
                    <button className="mt-2 w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-lg text-sm transition-colors">
                      了解更多 →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="輸入訊息..."
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg">
                  <Send className="w-4 h-4 text-blue-900" />
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">真人客服 · 即時回應</p>
            </div>
          </div>
        )}

        {/* User Icon Button - Rounded Square with Shadow */}
        <div className="relative">
          <button className="group relative">
            {/* Main Button */}
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative overflow-hidden">
              <User className="w-7 h-7 text-blue-900 relative z-10" />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            
            {/* Online Indicator */}
            <div className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-green-400 rounded-full px-2 py-0.5 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xs text-white pr-0.5">在線</span>
            </div>

            {/* Notification Count */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center text-yellow-400 text-xs shadow-lg">
              12
            </div>
          </button>

          {/* Hover Tooltip */}
          <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-blue-900 text-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap">
              <p className="text-sm">與客服對話</p>
            </div>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-blue-900 rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 rounded-full text-xs">客服人員圖標</span>
        <span className="px-3 py-1 bg-blue-900/20 text-blue-900 rounded-full text-xs">真人服務</span>
        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs">專業顧問</span>
      </div>
    </div>
  );
}
