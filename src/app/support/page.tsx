import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e7f3f7] to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">고객센터</h1>
        
        {/* 자주 묻는 질문 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">세줄일기는 어떤 서비스인가요?</h3>
              <p className="text-gray-700">
                세줄일기는 하루를 세 줄로 기록하는 간단한 일기 앱입니다. 
                복잡한 일기 작성 없이, 하루의 순간을 간단히 기록하고 공유할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">일기는 어떻게 작성하나요?</h3>
              <p className="text-gray-700">
                앱을 실행하고 '일기 쓰기' 버튼을 눌러 새로운 일기를 작성할 수 있습니다.
                하루의 기분, 일상, 감상을 세 줄로 자유롭게 기록하세요.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">일기를 공유할 수 있나요?</h3>
              <p className="text-gray-700">
                네, 작성한 일기를 친구들과 공유할 수 있습니다.
                공유 설정에서 공개 범위를 선택할 수 있으며, 비공개로 설정할 수도 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">일기를 책으로 만들 수 있나요?</h3>
              <p className="text-gray-700">
                네, 작성한 일기를 모아서 나만의 책으로 만들 수 있습니다.
                '나의 책' 메뉴에서 원하는 기간의 일기를 선택하여 책으로 제작할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">데이터는 안전한가요?</h3>
              <p className="text-gray-700">
                네, 모든 데이터는 암호화되어 안전하게 보관됩니다.
                정기적인 백업을 통해 데이터 손실을 방지하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 문의하기 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">문의하기</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              추가적인 문의사항이 있으시다면 아래 연락처로 문의해 주세요.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">이메일: support@willim.co.kr</p>
              <p className="text-gray-700">전화: 02-1234-5678</p>
              <p className="text-gray-700">운영시간: 평일 09:00 - 18:00</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 