import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e7f3f7] to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 회사 가치 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">⚖️ 가치</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              주식회사 윌림(willim)은 &apos;will(의지, 진정성) + lim(수풀 林)&apos;의 합성어로
              의지와 진정성 가득한 세상, 그리고 그러한 사람들로 가득한 회사를 지향합니다.
            </p>
          </div>
        </section>

        {/* 회사 비전 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🧭 비전</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              사람들의 솔직하고, 진정성 있는 삶의 이야기를 다양한 모습들로 담아내고자 합니다.
            </p>
          </div>
        </section>

        {/* 회사 연혁 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">👣 연혁</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-6">우리가 걸어온 길, 앞으로도 걸어갈 길입니다.</p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2021년</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 1월 한국콘텐츠진흥원 CKL 기업지원센터 입주기업 선정</li>
                  <li>• 2월 올림푸스 한국 &apos;고잉온 다이어리&apos; 프로그램 협업(서울대병원, 세브란스병원, 국립암센터 등)</li>
                  <li>• 6월 팁스(TIPS) 해외 연계 사업 선정</li>
                  <li>• 2021 K-스타트업 해외 진출 프로그램 선정(프랑스)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2020년</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 4월 스트롱벤처스, 디캠프 투자 유치</li>
                  <li>• 5월 누적 3억 페이지 View 달성</li>
                  <li>• 8월 팁스(TIPs) 선정</li>
                  <li>• 11월 M.net 오디션 프로그램 &apos;캡틴&apos; PPL 및 공동 마케팅</li>
                  <li>• 12월 한양대학교병원 생명사랑센터 일기 프로그램 협업</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2019년</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 5월 SK텔레콤 NUGU 개발 공모전 1위</li>
                  <li>• 신한 퓨쳐스랩 5기 선정</li>
                  <li>• SK텔레콤 True-Innovation 엑셀러레이팅 프로그램 선정</li>
                  <li>• 6월 대한민국 중소기업/스타트업 대상 동상 수상</li>
                  <li>• 9월 한화생명 &apos;LIFEPLUS&apos; 앱 콘텐츠 파트너 계약</li>
                  <li>• 10월 서울대기술지주 투자 유치</li>
                  <li>• 11월 한국콘텐츠진흥원 미국 투자유치 프로그램 선정</li>
                  <li>• 12월 신한 &apos;기발한 광고&apos; 1억 지원 스타트업 선정</li>
                  <li>• 삼성 멀티캠퍼스 공동 연말 힐링 콘서트 진행</li>
                  <li>• 2019 구글플레이 추천앱 선정, 앱스토어 추천앱 선정</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2018년</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 6월 벤처기업 인증</li>
                  <li>• 11월 &apos;세줄일기&apos;앱 iOS 베타버전 출시</li>
                  <li>• 12월 산학연협력 기술 개발사업 R&D 첫걸음 과제 선정</li>
                  <li>• 2018 구글플레이 추천앱 선정</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2017년</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 1월 삼성전자 C-Lab 5기</li>
                  <li>• 2월 인라이트벤처스 투자 유치</li>
                  <li>• 3월 &apos;세줄일기&apos;앱 안드로이드 정식버전 출시</li>
                  <li>• 11월 2017 전국창조경제혁신센터 통합데모데이 준우승</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2016년</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 7월 중소벤처기업부 창업선도대학 사업화 아이템 선정</li>
                  <li>• 10월 (주)윌림 설립</li>
                  <li>• &apos;세줄일기&apos;앱 안드로이드 베타버전 출시</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 앱 다운로드 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">시작하기</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-8 text-center">
              지금 바로 세줄일기를 시작해보세요
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://apps.apple.com/kr/app/id1234567890"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#67a8bd] hover:bg-[#5999ae]"
              >
                App Store에서 다운로드
              </Link>
              <Link
                href="https://wvse6.app.goo.gl/InApp"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#67a8bd] hover:bg-[#5999ae]"
              >
                Google Play에서 다운로드
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
