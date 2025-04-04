import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-[#67a8bd] rounded-lg flex items-center justify-center text-white font-bold">
                  세줄
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                소개
              </Link>
              <Link href="/service" className="text-gray-600 hover:text-gray-900">
                서비스
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900">
                고객지원
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            하루를 세 줄로 기록하세요
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            간단하게 기록하고, 소중하게 간직하세요
          </p>
          
          <div className="space-y-4 max-w-xs mx-auto">
            <Link 
              href="/signup" 
              className="block w-full px-6 py-3 bg-[#67a8bd] text-white rounded-lg hover:bg-[#5999ae]"
            >
              시작하기
            </Link>
            <Link 
              href="/demo" 
              className="block w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              체험하기
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
