import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          고객지원
        </h1>
        
        <div className="space-y-12">
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Q. 일기는 어떻게 작성하나요?
                </h3>
                <p className="text-gray-600">
                  메인 화면의 '시작하기' 버튼을 클릭하여 회원가입 후, 
                  하루 중 언제든지 세 줄로 일기를 작성할 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Q. 작성한 일기는 어디서 볼 수 있나요?
                </h3>
                <p className="text-gray-600">
                  '일기 보관함' 메뉴에서 달력이나 목록 형태로 
                  지금까지 작성한 모든 일기를 볼 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Q. 프리미엄 기능은 어떻게 사용하나요?
                </h3>
                <p className="text-gray-600">
                  프로필 설정에서 프리미엄 구독을 신청하시면 
                  모든 프리미엄 기능을 바로 사용하실 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              문의하기
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  제목
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                  placeholder="문의 제목을 입력해주세요"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                  placeholder="문의하실 내용을 자세히 적어주세요"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#67a8bd] text-white py-3 px-4 rounded-lg hover:bg-[#5999ae] focus:outline-none focus:ring-2 focus:ring-[#67a8bd] focus:ring-offset-2"
              >
                문의하기
              </button>
            </form>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              연락처
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>이메일:</strong> support@3linediary.com
              </p>
              <p>
                <strong>운영시간:</strong> 평일 오전 10시 ~ 오후 6시
              </p>
              <p>
                <strong>주소:</strong> 서울특별시 강남구 테헤란로 123 세줄빌딩 4층
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 