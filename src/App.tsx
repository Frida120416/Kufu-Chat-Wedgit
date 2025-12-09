import { BotWidget } from './components/BotWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-slate-800 mb-3">AI 客服機器人插件</h1>
            <p className="text-slate-600">專業的客服解決方案</p>
          </div>

          {/* Widget Demo */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-slate-700 mb-4 text-center">樣式二：AI 機器人</h3>
            <BotWidget />
          </div>
        </div>
      </div>
    </div>
  );
}