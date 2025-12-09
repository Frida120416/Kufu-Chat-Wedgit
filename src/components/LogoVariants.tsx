export function LogoVariants() {
  return (
    <div className="space-y-12">
      {/* 主要 Logo - 漸層版本 */}
      <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-700 rounded-full text-sm">主要版本</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-6">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 外框立方體 */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* 立方體前面 */}
              <path d="M40 15 L65 28 L65 53 L40 66 L15 53 L15 28 Z" 
                    stroke="url(#gradient1)" 
                    strokeWidth="2.5" 
                    fill="none"
                    strokeLinejoin="round"/>
              {/* 立方體內部連接線 - 左 */}
              <path d="M15 28 L40 40" stroke="url(#gradient1)" strokeWidth="2.5" strokeLinecap="round"/>
              {/* 立方體內部連接線 - 右 */}
              <path d="M65 28 L40 40" stroke="url(#gradient1)" strokeWidth="2.5" strokeLinecap="round"/>
              {/* 立方體內部連接線 - 下 */}
              <path d="M40 40 L40 66" stroke="url(#gradient1)" strokeWidth="2.5" strokeLinecap="round"/>
              {/* 智慧節點 */}
              <circle cx="40" cy="40" r="4" fill="url(#gradient1)"/>
              <circle cx="40" cy="15" r="3" fill="url(#gradient1)"/>
              <circle cx="15" cy="28" r="3" fill="url(#gradient1)"/>
              <circle cx="65" cy="28" r="3" fill="url(#gradient1)"/>
            </svg>
            <div className="text-left">
              <div className="text-5xl tracking-tight text-slate-800" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                SmartCube
              </div>
              <div className="text-sm text-slate-500 mt-1 tracking-wide">智慧交通解決方案</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo 變化版本 */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* 深色背景版本 */}
        <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs">深色版本</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M40 15 L65 28 L65 53 L40 66 L15 53 L15 28 Z" 
                    stroke="url(#gradient-light)" 
                    strokeWidth="2.5" 
                    fill="none"
                    strokeLinejoin="round"/>
              <path d="M15 28 L40 40" stroke="url(#gradient-light)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M65 28 L40 40" stroke="url(#gradient-light)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M40 40 L40 66" stroke="url(#gradient-light)" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="40" cy="40" r="4" fill="url(#gradient-light)"/>
              <circle cx="40" cy="15" r="3" fill="url(#gradient-light)"/>
              <circle cx="15" cy="28" r="3" fill="url(#gradient-light)"/>
              <circle cx="65" cy="28" r="3" fill="url(#gradient-light)"/>
            </svg>
            <div className="text-white text-xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              SmartCube
            </div>
          </div>
        </div>

        {/* 單色版本 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">單色版本</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 15 L65 28 L65 53 L40 66 L15 53 L15 28 Z" 
                    stroke="#1E293B" 
                    strokeWidth="2.5" 
                    fill="none"
                    strokeLinejoin="round"/>
              <path d="M15 28 L40 40" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M65 28 L40 40" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M40 40 L40 66" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="40" cy="40" r="4" fill="#1E293B"/>
              <circle cx="40" cy="15" r="3" fill="#1E293B"/>
              <circle cx="15" cy="28" r="3" fill="#1E293B"/>
              <circle cx="65" cy="28" r="3" fill="#1E293B"/>
            </svg>
            <div className="text-slate-800 text-xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              SmartCube
            </div>
          </div>
        </div>

        {/* 圖標版本 */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 bg-white/20 text-white/90 rounded-full text-xs">圖標版本</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient-icon" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M40 15 L65 28 L65 53 L40 66 L15 53 L15 28 Z" 
                      stroke="url(#gradient-icon)" 
                      strokeWidth="2.5" 
                      fill="none"
                      strokeLinejoin="round"/>
                <path d="M15 28 L40 40" stroke="url(#gradient-icon)" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M65 28 L40 40" stroke="url(#gradient-icon)" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M40 40 L40 66" stroke="url(#gradient-icon)" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="40" cy="40" r="4" fill="url(#gradient-icon)"/>
                <circle cx="40" cy="15" r="3" fill="url(#gradient-icon)"/>
                <circle cx="15" cy="28" r="3" fill="url(#gradient-icon)"/>
                <circle cx="65" cy="28" r="3" fill="url(#gradient-icon)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 應用場景展示 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
        <h3 className="text-slate-800 mb-6 text-center">應用場景</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 名片應用 */}
          <div className="bg-slate-900 rounded-xl p-6 aspect-[1.75/1] flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 15 L65 28 L65 53 L40 66 L15 53 L15 28 Z" 
                      stroke="#60A5FA" 
                      strokeWidth="2.5" 
                      fill="none"
                      strokeLinejoin="round"/>
                <path d="M15 28 L40 40" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M65 28 L40 40" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M40 40 L40 66" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="40" cy="40" r="4" fill="#60A5FA"/>
                <circle cx="40" cy="15" r="3" fill="#60A5FA"/>
                <circle cx="15" cy="28" r="3" fill="#60A5FA"/>
                <circle cx="65" cy="28" r="3" fill="#60A5FA"/>
              </svg>
              <div>
                <div className="text-white text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SmartCube</div>
                <div className="text-blue-300 text-xs">智慧交通解決方案</div>
              </div>
            </div>
            <div className="text-white/60 text-xs">
              <div>EVSP | TSP | 資訊推播系統</div>
            </div>
          </div>

          {/* 文件抬頭應用 */}
          <div className="bg-white rounded-xl p-6 border-2 border-slate-200 aspect-[1.75/1] flex items-start">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient-doc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M40 15 L65 28 L65 53 L40 66 L15 53 L15 28 Z" 
                      stroke="url(#gradient-doc)" 
                      strokeWidth="2.5" 
                      fill="none"
                      strokeLinejoin="round"/>
                <path d="M15 28 L40 40" stroke="url(#gradient-doc)" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M65 28 L40 40" stroke="url(#gradient-doc)" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M40 40 L40 66" stroke="url(#gradient-doc)" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="40" cy="40" r="4" fill="url(#gradient-doc)"/>
                <circle cx="40" cy="15" r="3" fill="url(#gradient-doc)"/>
                <circle cx="15" cy="28" r="3" fill="url(#gradient-doc)"/>
                <circle cx="65" cy="28" r="3" fill="url(#gradient-doc)"/>
              </svg>
              <div>
                <div className="text-slate-800 text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SmartCube</div>
                <div className="text-slate-500 text-xs mt-0.5">模組化智慧交通解決方案</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
