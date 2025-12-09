import { X, Send, Bot, Zap } from 'lucide-react';

interface ChatbotTemplate5Props {
  isExpanded: boolean;
}

export function ChatbotTemplate5({ isExpanded }: ChatbotTemplate5Props) {
  return (
    <div className="relative">
      {/* Preview Container */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 min-h-[400px] flex items-end justify-end relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>

        {/* Chat Window */}
        {isExpanded && (
          <div className="absolute bottom-24 right-8 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
            {/* Header */}
            <div className="bg-blue-900 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <div className="text-white">AI 機器人</div>
                  <div className="text-yellow-400 text-xs">智能服務中</div>
                </div>
              </div>
              <button className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 h-80 overflow-y-auto bg-slate-50">
              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-blue-900" />
                </div>
                <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[80%]">
                  <p className="text-slate-700 text-sm">您好！我是 AI 機器人助手 🤖</p>
                  <span className="text-xs text-slate-400 mt-1 block">剛剛</span>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-2 justify-end">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl rounded-tr-sm p-3 shadow-sm max-w-[80%]">
                  <p className="text-blue-900 text-sm">你能做什麼？</p>
                  <span className="text-xs text-blue-800/60 mt-1 block text-right">剛剛</span>
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-blue-900" />
                </div>
                <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[80%]">
                  <p className="text-slate-700 text-sm">我可以幫您：</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Zap className="w-3 h-3 text-yellow-500" />
                      即時解答問題
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Zap className="w-3 h-3 text-yellow-500" />
                      提供產品資訊
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Zap className="w-3 h-3 text-yellow-500" />
                      協助下單查詢
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="輸入您的問題..."
                  className="flex-1 px-4 py-2.5 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors">
                  <Send className="w-4 h-4 text-blue-900" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Robot Icon Button - Diamond Shape */}
        <div className="relative">
          <button className="group relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 rotate-45">
            <div className="absolute inset-0 flex items-center justify-center -rotate-45">
              <Bot className="w-7 h-7 text-blue-900" />
            </div>
            {/* Notification Badge */}
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs -rotate-45">
              5
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400 rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 rounded-full text-xs">菱形按鈕</span>
        <span className="px-3 py-1 bg-blue-900/20 text-blue-900 rounded-full text-xs">機器人圖標</span>
        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs">AI 智能</span>
      </div>
    </div>
  );
}
