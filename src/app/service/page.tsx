import Link from 'next/link';
import Image from 'next/image';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">서비스 소개</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✍️</span>
            </div>
            <h3 className="text-xl font-bold mb-4">간단한 기록</h3>
            <p className="text-gray-600">
              복잡한 형식 없이 하루를 세 줄로 기록하세요.
              사진 한 장과 함께 그날의 감정을 담아보세요.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💝</span>
            </div>
            <h3 className="text-xl font-bold mb-4">함께하는 일기</h3>
            <p className="text-gray-600">
              비슷한 관심사를 가진 사람들과 일기를 공유하고
              서로의 이야기에 공감해보세요.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold mb-4">나만의 책</h3>
            <p className="text-gray-600">
              기록한 일기들을 모아 나만의 책으로 만들어보세요.
              특별한 순간들을 평생 간직할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">지금 바로 시작하세요</h2>
          <div className="inline-flex space-x-4">
            <a 
              href="https://apps.apple.com/kr/app/id1234567890"
              className="px-6 py-3 bg-[#67a8bd] text-white rounded-lg hover:bg-[#5999ae]"
            >
              App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.willim.threeline"
              className="px-6 py-3 bg-[#67a8bd] text-white rounded-lg hover:bg-[#5999ae]"
            >
              Google Play
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 