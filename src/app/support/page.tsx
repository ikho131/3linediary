import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">고객지원</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">자주 묻는 질문</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  세줄일기는 어떤 서비스인가요?
                </h3>
                <p className="text-gray-600">
                  세줄일기는 하루를 세 줄로 기록하는 간단한 일기 서비스입니다.
                  복잡한 일기 작성 없이, 하루의 순간을 간단히 기록하고 공유할 수 있습니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  일기는 어떻게 작성하나요?
                </h3>
                <p className="text-gray-600">
                  앱을 실행하고 '일기 쓰기' 버튼을 눌러 새로운 일기를 작성할 수 있습니다.
                  하루의 기분, 일상, 감상을 세 줄로 자유롭게 기록하세요.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  일기를 공유할 수 있나요?
                </h3>
                <p className="text-gray-600">
                  네, 작성한 일기를 친구들과 공유할 수 있습니다.
                  공유 설정에서 공개 범위를 선택할 수 있으며, 비공개로 설정할 수도 있습니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  일기를 책으로 만들 수 있나요?
                </h3>
                <p className="text-gray-600">
                  네, 작성한 일기를 모아서 나만의 책으로 만들 수 있습니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  데이터는 안전한가요?
                </h3>
                <p className="text-gray-600">
                  네, 모든 데이터는 암호화되어 안전하게 보관됩니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">문의하기</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                추가 문의사항이 있으시다면 아래 이메일로 연락해주세요.
              </p>
              <a 
                href="mailto:support@3linediary.com"
                className="text-[#67a8bd] hover:underline"
              >
                support@3linediary.com
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 