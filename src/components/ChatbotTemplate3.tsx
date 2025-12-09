import { X, Send, Headphones, User } from 'lucide-react';

interface ChatbotTemplate3Props {
  isExpanded: boolean;
}

export function ChatbotTemplate3({ isExpanded }: ChatbotTemplate3Props) {
  return (
    <div className="relative">
      {/* Preview Container */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 min-h-[400px] flex items-end justify-end relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl"></div>

        {/* Chat Window */}
        {isExpanded && (
          <div className="absolute bottom-32 right-8 w-80 animate-in slide-in-from-bottom-4 fade-in duration-300">
            {/* Chat Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-11 h-11 bg-blue-900 rounded-full flex items-center justify-center ring-2 ring-white">
                        <Headphones className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="text-blue-900">AI 小幫手</div>
                      <div className="text-xs text-blue-800">隨時為您服務</div>
                    </div>
                  </div>
                  <button className="text-blue-900/70 hover:text-blue-900 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-4 h-80 overflow-y-auto bg-white">
                {/* Bot Message */}
                <div className="flex gap-2 items-end">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-4 h-4 text-blue-900" />
                  </div>
                  <div>
                    <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl rounded-bl-md p-3.5 shadow-sm max-w-[220px]">
                      <p className="text-slate-800 text-sm">嗨！很高興見到您 👋</p>
                      <p className="text-slate-600 text-sm mt-1">我是您的專屬 AI 助理，有任何問題都可以問我！</p>
                    </div>
                    <span className="text-xs text-slate-400 ml-3 mt-1 block">10:30</span>
                  </div>
                </div>

                {/* Quick Replies */}
                <div className="flex flex-wrap gap-2 ml-10">
                  <button className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full text-xs transition-colors shadow-sm">
                    ⚡ 快速諮詢
                  </button>
                  <button className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full text-xs transition-colors shadow-sm">
                    📞 聯繫客服
                  </button>
                  <button className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full text-xs transition-colors shadow-sm">
                    ❓ 常見問題
                  </button>
                </div>

                {/* User Message */}
                <div className="flex gap-2 justify-end items-end">
                  <div>
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl rounded-br-md p-3.5 shadow-sm max-w-[220px]">
                      <p className="text-white text-sm">你們有哪些產品方案？</p>
                    </div>
                    <span className="text-xs text-slate-400 mr-3 mt-1 block text-right">10:31</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>

                {/* Bot Message with Card */}
                <div className="flex gap-2 items-end">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-4 h-4 text-blue-900" />
                  </div>
                  <div>
                    <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl rounded-bl-md p-3.5 shadow-sm max-w-[220px]">
                      <p className="text-slate-800 text-sm mb-2">我們提供三大方案：</p>
                      <div className="space-y-2">
                        <div className="bg-white rounded-xl p-2.5 border border-yellow-200">
                          <p className="text-slate-800 text-xs">🎯 基礎版</p>
                          <p className="text-slate-500 text-xs">適合小型企業</p>
                        </div>
                        <div className="bg-white rounded-xl p-2.5 border border-yellow-200">
                          <p className="text-slate-800 text-xs">⭐ 專業版</p>
                          <p className="text-slate-500 text-xs">中型企業首選</p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-2.5">
                          <p className="text-blue-900 text-xs">👑 企業版</p>
                          <p className="text-blue-800 text-xs">完整解決方案</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 bg-gradient-to-r from-slate-50 to-white border-t border-slate-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="輸入訊息..."
                    className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm"
                  />
                  <button className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg">
                    <Send className="w-4 h-4 text-blue-900" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Speech Bubble Floating Button */}
        <div className="relative">
          <button className="group relative">
            {/* Main Bubble */}
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group-hover:scale-110">
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Headphones className="w-7 h-7 text-blue-900 relative z-10" />
              </div>
              {/* Ripple Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            
            {/* Tail of speech bubble */}
            <div className="absolute -bottom-2 right-3 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-yellow-500"></div>
            
            {/* Active Indicator Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs shadow-lg animate-pulse">
              2
            </div>
          </button>

          {/* Greeting Bubble (appears on hover) */}
          <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-blue-900 text-white px-4 py-2 rounded-2xl rounded-br-sm shadow-xl whitespace-nowrap">
              <p className="text-sm">需要協助嗎？ 😊</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 rounded-full text-xs">對話氣泡</span>
        <span className="px-3 py-1 bg-blue-900/20 text-blue-900 rounded-full text-xs">快速回覆</span>
        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs">卡片式訊息</span>
      </div>
    </div>
  );
}
