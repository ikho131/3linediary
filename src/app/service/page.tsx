import Link from 'next/link';
import Image from 'next/image';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          서비스 안내
        </h1>
        
        <div className="space-y-12">
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              기본 기능
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>하루 세 줄 일기 작성</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>일기 보관함 (달력/목록 보기)</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>감정 태그 기능</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>날씨 기록</p>
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              프리미엄 기능
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>일기 내보내기 (PDF, 텍스트)</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>사진 첨부 (일기당 최대 3장)</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>AI 감정 분석 리포트</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>테마 변경</p>
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              요금제 안내
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">무료</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">₩0</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 기본 기능 모두 포함</li>
                  <li>• 광고 포함</li>
                  <li>• 기본 테마</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6 bg-[#67a8bd] text-white">
                <h3 className="text-xl font-semibold mb-2">프리미엄</h3>
                <p className="text-3xl font-bold mb-4">₩4,900/월</p>
                <ul className="space-y-2">
                  <li>• 모든 기본 기능 포함</li>
                  <li>• 모든 프리미엄 기능 포함</li>
                  <li>• 광고 없음</li>
                  <li>• 우선 고객 지원</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 