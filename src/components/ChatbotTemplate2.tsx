import { X, Send, Headphones, Minimize2 } from 'lucide-react';

interface ChatbotTemplate2Props {
  isExpanded: boolean;
}

export function ChatbotTemplate2({ isExpanded }: ChatbotTemplate2Props) {
  return (
    <div className="relative">
      {/* Preview Container */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 min-h-[400px] flex items-end justify-end relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>

        {/* Chat Window */}
        {isExpanded && (
          <div className="absolute bottom-28 right-8 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300 border border-slate-200">
            {/* Header */}
            <div className="bg-blue-900 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <div className="text-white">專業客服</div>
                    <div className="text-xs text-yellow-300">即時回應</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-white/70 hover:text-white transition-colors">
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button className="text-white/70 hover:text-white transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Quick Actions */}
              <div className="flex gap-2">
                <button className="flex-1 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs transition-colors">
                  常見問題
                </button>
                <button className="flex-1 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs transition-colors">
                  聯繫我們
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 h-80 overflow-y-auto bg-gradient-to-b from-slate-50 to-white">
              {/* Welcome Message */}
              <div className="text-center">
                <div className="inline-block bg-yellow-400/20 px-4 py-2 rounded-full text-xs text-slate-600 mb-4">
                  今天 10:20
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4 text-blue-900" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border border-slate-100 max-w-[75%]">
                  <p className="text-slate-700 text-sm">👋 歡迎使用我們的服務！</p>
                  <p className="text-slate-700 text-sm mt-1">我能協助您解決任何問題</p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-2 justify-end">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl rounded-tr-md p-3 shadow-sm max-w-[75%]">
                  <p className="text-blue-900 text-sm">請問營業時間？</p>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4 text-blue-900" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border border-slate-100 max-w-[75%]">
                  <p className="text-slate-700 text-sm">我們的服務時間為：</p>
                  <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                    <p className="text-blue-900 text-xs">週一至週五：9:00 - 18:00</p>
                    <p className="text-blue-900 text-xs">週六：9:00 - 12:00</p>
                  </div>
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4 text-blue-900" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-slate-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="flex gap-2 items-end">
                <input
                  type="text"
                  placeholder="輸入訊息..."
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-xl flex items-center justify-center transition-all shadow-md hover:shadow-lg">
                  <Send className="w-4 h-4 text-blue-900" />
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">由 AI 提供支援</p>
            </div>
          </div>
        )}

        {/* Square Floating Button with Rounded Corners */}
        <div className="relative">
          <button className="group relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
            <div className="absolute inset-0 flex items-center justify-center">
              <Headphones className="w-7 h-7 text-blue-900" />
            </div>
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-blue-900 rounded-bl-lg rounded-tr-xl"></div>
            {/* Notification Badge */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-900 rounded-lg flex items-center justify-center text-white text-xs shadow-lg">
              3
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </button>
          {/* Helper Text */}
          <div className="absolute -left-28 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-blue-900 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap shadow-lg">
              需要幫助嗎？
            </div>
          </div>
        </div>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 rounded-full text-xs">方形按鈕</span>
        <span className="px-3 py-1 bg-blue-900/20 text-blue-900 rounded-full text-xs">漸層效果</span>
        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs">輸入提示</span>
      </div>
    </div>
  );
}
