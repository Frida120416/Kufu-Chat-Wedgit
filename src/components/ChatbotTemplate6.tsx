import { X, Send, MessageCircle, Star } from 'lucide-react';

interface ChatbotTemplate6Props {
  isExpanded: boolean;
}

export function ChatbotTemplate6({ isExpanded }: ChatbotTemplate6Props) {
  return (
    <div className="relative">
      {/* Preview Container */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 min-h-[400px] flex items-end justify-end relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-900/5 rounded-full blur-3xl"></div>

        {/* Chat Window */}
        {isExpanded && (
          <div className="absolute bottom-28 right-8 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300 border border-slate-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center ring-2 ring-white shadow-lg">
                    <MessageCircle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-blue-900">即時對話</div>
                    <div className="text-blue-800 text-xs">隨時為您解答</div>
                  </div>
                </div>
                <button className="text-blue-900/70 hover:text-blue-900 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 h-80 overflow-y-auto bg-white">
              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4 text-blue-900" />
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-md p-3.5 shadow-sm max-w-[75%]">
                  <p className="text-slate-800 text-sm">歡迎來到我們的客服中心！</p>
                  <p className="text-slate-600 text-sm mt-1">有任何問題隨時提問 💬</p>
                </div>
              </div>

              {/* Quick Replies */}
              <div className="ml-10 flex flex-wrap gap-2">
                <button className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full text-xs transition-colors">
                  產品介紹
                </button>
                <button className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full text-xs transition-colors">
                  價格方案
                </button>
                <button className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full text-xs transition-colors">
                  聯繫我們
                </button>
              </div>

              {/* User Message */}
              <div className="flex gap-2 justify-end">
                <div className="bg-blue-900 rounded-2xl rounded-tr-md p-3.5 shadow-sm max-w-[75%]">
                  <p className="text-white text-sm">請問你們的服務特色是什麼？</p>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4 text-blue-900" />
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-md p-3.5 shadow-sm max-w-[75%]">
                  <p className="text-slate-800 text-sm mb-2">我們的核心優勢：</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 bg-white rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-800">24/7 即時回應</p>
                        <p className="text-xs text-slate-500">全天候智能服務</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-white rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-800">多語言支援</p>
                        <p className="text-xs text-slate-500">支援繁中、英文等</p>
                      </div>
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
                  placeholder="開始對話..."
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg">
                  <Send className="w-4 h-4 text-blue-900" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Message Circle Icon Button */}
        <div className="relative">
          <button className="group relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
            <div className="absolute inset-0 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-blue-900" />
            </div>
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center text-yellow-400 text-xs shadow-lg">
              8
            </div>
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-20 animate-ping"></div>
          </button>
        </div>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 rounded-full text-xs">對話圖標</span>
        <span className="px-3 py-1 bg-blue-900/20 text-blue-900 rounded-full text-xs">圓形設計</span>
        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs">快速回覆</span>
      </div>
    </div>
  );
}
