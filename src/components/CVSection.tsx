import { Instagram } from 'lucide-react';

export function CVSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="space-y-12">
        {/* Exhibition */}
        <section>
          <h3 className="mb-6 pb-2 border-b border-gray-200">Exhibition</h3>
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <p className="opacity-50">2026</p>
            <div className="mb-8">
              <p className="mb-1">
                쿠로다 {' '}
                <a 
                  href="https://www.instagram.com/p/DTpcPPTkRyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  《너머에》
                </a>
              </p>
              <p className="opacity-50">PCO 서울</p>
            </div>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <p className="opacity-50">2025</p>
            <div>
              <p className="mb-1">
                푸하하하 x 쿠로다{' '}
                <a 
                  href="https://culture.snu.ac.kr/event/dialogue04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  《다이얼로그 04: 그들에게는 보이지 않아》
                </a>
              </p>
              <p className="opacity-50">서울대학교 파워플랜트</p>
            </div>
          </div>
        </section>

        {/* Instagram */}
        <section>
          <h3 className="mb-6 pb-2 border-b border-gray-200">Instagram</h3>
          <div className="space-y-4">
            <a 
              href="https://www.instagram.com/kuroda.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-60 transition-opacity"
            >
              <Instagram size={20} className="opacity-70" />
              <span>Kuroda.official</span>
            </a>
            <a 
              href="https://www.instagram.com/rim___pa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-60 transition-opacity"
            >
              <Instagram size={20} className="opacity-70" />
              <span>Rim Park</span>
            </a>
            <a 
              href="https://www.instagram.com/fayexna/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-60 transition-opacity"
            >
              <Instagram size={20} className="opacity-70" />
              <span>Yuna Lee (Juda)</span>
            </a>
            <a 
              href="https://www.instagram.com/yoonanplz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-60 transition-opacity"
            >
              <Instagram size={20} className="opacity-70" />
              <span>Yoonan</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
