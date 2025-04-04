import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">세줄일기 소개</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">우리의 이야기</h2>
            <p className="text-gray-600 mb-4">
              세줄일기는 일상의 소소한 순간들을 간단하게 기록하고 
              소중하게 간직할 수 있는 공간을 만들고자 시작되었습니다.
            </p>
            <p className="text-gray-600">
              복잡한 일기 대신 하루를 세 줄로 정리하며,
              나만의 이야기를 쌓아가는 특별한 경험을 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">핵심 가치</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">간단함</h3>
                <p className="text-gray-600">
                  복잡한 형식 없이 하루를 세 줄로 표현합니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">지속성</h3>
                <p className="text-gray-600">
                  매일 조금씩, 꾸준히 기록하는 습관을 만듭니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">공유</h3>
                <p className="text-gray-600">
                  소중한 순간을 다른 사람들과 나눌 수 있습니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
