import Link from 'next/link';
import Image from 'next/image';

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e7f3f7] to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 서비스 소개 */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">세줄일기 서비스</h1>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              세줄일기는 하루를 세 줄로 기록하는 간단한 일기 앱입니다. 
              복잡한 일기 작성 없이, 하루의 순간을 간단히 기록하고 공유할 수 있습니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#e7f3f7] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">간단한 기록</h3>
                <p className="text-gray-600">하루를 세 줄로 간단히 기록하세요</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#e7f3f7] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">공유와 소통</h3>
                <p className="text-gray-600">친구들과 일기를 공유하고 소통하세요</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#e7f3f7] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">나만의 책</h3>
                <p className="text-gray-600">기록한 일기를 책으로 만들어보세요</p>
              </div>
            </div>
          </div>
        </section>

        {/* 앱 다운로드 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">앱 다운로드</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <Link 
                href="https://apps.apple.com/kr/app/id1234567890" 
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="/app-store-icon.png"
                  alt="App Store"
                  width={24}
                  height={24}
                />
                <span>App Store</span>
              </Link>
              
              <Link 
                href="https://play.google.com/store/apps/details?id=com.willim.threeLineDiary" 
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="/play-store-icon.png"
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <span>Google Play</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 