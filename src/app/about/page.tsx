export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          세줄일기 소개
        </h1>
        
        <div className="space-y-12">
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              세줄일기란?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              세줄일기는 하루를 세 줄로 간단하게 기록하는 일기 서비스입니다. 
              바쁜 현대인들이 매일 일기를 쓰기는 어렵지만, 세 줄이라면 가능하지 않을까요?
              아침에 한 줄, 점심에 한 줄, 저녁에 한 줄로 하루를 기록해보세요.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              세줄일기의 장점
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <p>간단하게 기록할 수 있어요. 세 줄이면 충분합니다.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <p>매일매일 꾸준히 기록할 수 있어요. 부담 없이 시작해보세요.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <p>나만의 소중한 기억을 담아둘 수 있어요. 언제든 다시 꺼내볼 수 있습니다.</p>
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              시작하는 방법
            </h2>
            <ol className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <p>회원가입을 해주세요. 이메일만 있으면 됩니다.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <p>하루 중 아무 때나 첫 번째 줄을 작성해보세요.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <p>그 다음 두 번째, 세 번째 줄도 작성해보세요.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                <p>매일매일 기록하다 보면 어느새 소중한 추억이 쌓여있을 거예요.</p>
              </li>
            </ol>
          </section>
        </div>
      </main>
    </div>
  );
}
