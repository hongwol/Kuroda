import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <div className="w-full max-w-md mb-8">
          <ImageWithFallback
            src="https://culture.snu.ac.kr/wp-content/uploads/2025/10/kuroda_profile.png"
            alt="kuroda profile"
            className="w-full h-auto"
          />
        </div>
        <div className="text-center space-y-4">
          <h2 className="tracking-tight">About Kuroda</h2>
          <p className="opacity-70 leading-relaxed">
            쿠로다(黒田/검은 밭)는 2023년 결성된 만화 동인이다. 만화를 사랑하고 즐기는 세 친구 <br />림파/유나/유난이 만나 만화 이야기를 하고, 모임을 열고, 직접 만화책을 펴낸다.
          </p>
          <p className="opacity-70">
            kurodamanga@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
