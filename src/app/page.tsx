import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e7f3f7] to-white">
      {/* 네비게이션 바 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-square.svg"
                  alt="세줄일기"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                회사소개
              </Link>
              <Link href="https://wvse6.app.goo.gl/InApp" className="text-gray-600 hover:text-gray-900">
                일기 쓰기
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900">
                고객센터
              </Link>
              <Link href="/en" className="text-gray-600 hover:text-gray-900">
                English
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 메인 히어로 섹션 */}
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            하루를 세 줄로 기록하세요
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            사람들의 솔직하고, 진정성 있는 삶의 이야기를<br />
            다양한 모습들로 담아내고자 합니다
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link
              href="https://wvse6.app.goo.gl/InApp"
              className="bg-[#67a8bd] text-white px-8 py-3 rounded-lg hover:bg-[#5999ae] transition-colors"
            >
              시작하기
            </Link>
            <Link
              href="https://wvse6.app.goo.gl/InApp"
              className="bg-white text-[#67a8bd] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              체험하기
            </Link>
          </div>
        </div>
      </div>

      {/* 창업 스토리 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">세줄일기 스토리</h2>
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p>
                행복을 찾기 위해 퇴사 후 떠난 400일 간의 부부 세계여행,
                무작정 떠난 여행에서 행복보다는
                '무언가를 해야한다'는 강박에 시달렸습니다.
              </p>
              <p>
                여행 기록을 남겨야한다는 부담감에 지쳐있을때 아내가 말했습니다.
                "오빠, 힘들면 딱 세 줄만 써봐."
              </p>
              <p>
                기록에 대한 부담을 내려놓고
                짧은 세 줄과 한 장의 여행 사진으로 '진정성'을 찾을 수 있었습니다.
              </p>
              <p className="font-medium">
                '누구나 세 줄로 자신의 삶을 기록하면 나중에 책으로 만들 수 있지 않을까?'
                라는 생각으로 시작한 세줄일기는 현재 150만 명의 사용자가 함께하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">세줄일기 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">간단한 기록</h3>
                <p className="text-gray-600">세 줄의 글과 한 장의 사진으로 당신의 하루를 기록하세요.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">함께하는 일기</h3>
                <p className="text-gray-600">공통의 관심사로 모인 사람들과 소통하고 공감하세요.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">나만의 책</h3>
                <p className="text-gray-600">소중한 기록들을 모아 세상에 하나뿐인 책으로 만드세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#67a8bd] mb-2">150만</div>
                <div className="text-gray-600">가입자 수</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#67a8bd] mb-2">30만</div>
                <div className="text-gray-600">월간 활성 사용자</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#67a8bd] mb-2">3억+</div>
                <div className="text-gray-600">누적 페이지뷰</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 앱 다운로드 섹션 */}
      <section className="py-20 bg-[#67a8bd]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">지금 바로 시작하세요</h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="https://apps.apple.com/kr/app/id1234567890" 
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="/app-store-icon.svg"
                  alt="App Store"
                  width={24}
                  height={24}
                />
                <span>App Store</span>
              </Link>
              
              <Link 
                href="https://wvse6.app.goo.gl/InApp" 
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="/play-store-icon.svg"
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <span>Google Play</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">회사소개</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="hover:text-white">창업스토리</Link></li>
                  <li><Link href="/about/app" className="hover:text-white">앱 소개</Link></li>
                  <li><Link href="/about/history" className="hover:text-white">연혁</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">고객센터</h3>
                <ul className="space-y-2">
                  <li><Link href="/support/faq" className="hover:text-white">자주묻는질문</Link></li>
                  <li><Link href="/support/contact" className="hover:text-white">문의하기</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">관련기사</h3>
                <ul className="space-y-2">
                  <li><Link href="/press" className="hover:text-white">보도자료</Link></li>
                  <li><Link href="/news" className="hover:text-white">뉴스</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">윌림 소개</h3>
                <p className="text-sm">
                  주식회사 윌림(willim)은 'will(의지, 진정성) + lim(수풀 林)'의 합성어로
                  의지와 진정성 가득한 세상을 만들어갑니다.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
              © 2024 Willim Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
