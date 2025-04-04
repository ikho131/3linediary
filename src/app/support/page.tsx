import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">고객 지원</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">세줄일기는 어떤 서비스인가요?</h3>
              <p>하루를 세 줄로 기록하는 심플한 일기 서비스입니다.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">일기는 어떻게 작성하나요?</h3>
              <p>앱을 실행하고 '일기 쓰기' 버튼을 눌러 새로운 일기를 작성할 수 있습니다.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">일기를 공유할 수 있나요?</h3>
              <p>네, 작성한 일기를 친구들과 공유할 수 있습니다.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">일기를 책으로 만들 수 있나요?</h3>
              <p>네, 작성한 일기를 모아서 나만의 책으로 만들 수 있습니다.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">데이터는 안전한가요?</h3>
              <p>네, 모든 데이터는 암호화되어 안전하게 보관됩니다.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">문의하기</h2>
          <p className="mb-4">
            추가 문의사항이 있으시다면 아래 이메일로 연락해주세요.
          </p>
          <a 
            href="mailto:support@3linediary.com"
            className="text-blue-600 hover:underline"
          >
            support@3linediary.com
          </a>
        </section>
      </div>
    </div>
  );
} 