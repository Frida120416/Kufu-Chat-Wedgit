import { X, Send, HelpCircle, ChevronRight } from 'lucide-react';

interface ChatbotTemplate7Props {
  isExpanded: boolean;
}

export function ChatbotTemplate7({ isExpanded }: ChatbotTemplate7Props) {
  return (
    <div className="relative">
      {/* Preview Container */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 min-h-[400px] flex items-end justify-end relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        {/* Chat Window */}
        {isExpanded && (
          <div className="absolute bottom-24 right-8 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300 border-2 border-yellow-400">
            {/* Header */}
            <div className="bg-white border-b-2 border-yellow-400 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 bg-blue-900 rounded-xl flex items-center justify-center shadow-md">
                      <HelpCircle className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-slate-800">幫助中心</div>
                    <div className="text-slate-500 text-xs">即時為您解答</div>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-4 h-80 overflow-y-auto bg-gradient-to-b from-white to-slate-50">
              {/* Welcome Card */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-slate-800 text-sm">👋 您好！有任何問題嗎？</p>
                    <p className="text-slate-600 text-xs mt-1">我們隨時準備協助您</p>
                  </div>
                </div>
              </div>

              {/* FAQ Buttons */}
              <div className="space-y-2">
                <p className="text-xs text-slate-500 px-1">常見問題</p>
                <button className="w-full flex items-center justify-between p-3 bg-white hover:bg-yellow-50 border border-slate-200 hover:border-yellow-300 rounded-xl transition-all group">
                  <span className="text-sm text-slate-700">如何開始使用？</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-white hover:bg-yellow-50 border border-slate-200 hover:border-yellow-300 rounded-xl transition-all group">
                  <span className="text-sm text-slate-700">價格方案說明</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-white hover:bg-yellow-50 border border-slate-200 hover:border-yellow-300 rounded-xl transition-all group">
                  <span className="text-sm text-slate-700">技術支援服務</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                </button>
              </div>

              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="bg-white border border-slate-200 rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[80%]">
                  <p className="text-slate-700 text-sm">找不到答案？直接詢問我吧！</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t-2 border-yellow-400">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="請輸入您的問題..."
                  className="flex-1 px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:bg-white transition-all"
                />
                <button className="w-10 h-10 bg-blue-900 hover:bg-blue-800 rounded-xl flex items-center justify-center transition-colors shadow-md">
                  <Send className="w-4 h-4 text-yellow-400" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Help Circle Icon Button - Rounded Square */}
        <div className="relative">
          <button className="group relative w-16 h-16 bg-blue-900 hover:bg-blue-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-yellow-400">
            <div className="absolute inset-0 flex items-center justify-center">
              <HelpCircle className="w-7 h-7 text-yellow-400" />
            </div>
            {/* Corner Accent */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
            {/* Notification Badge */}
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-yellow-400 rounded-full text-blue-900 text-xs shadow-lg">
              幫助
            </div>
          </button>
        </div>
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-800 rounded-full text-xs">問號圖標</span>
        <span className="px-3 py-1 bg-blue-900/20 text-blue-900 rounded-full text-xs">幫助中心</span>
        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs">FAQ 列表</span>
      </div>
    </div>
  );
}
