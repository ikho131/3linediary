import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">세줄일기</h1>
        <p className="text-xl mb-8">하루를 세 줄로 기록하세요</p>
        
        <div className="space-y-4 mb-8">
          <Link 
            href="/signup" 
            className="block w-full max-w-xs mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            시작하기
          </Link>
          <Link 
            href="/demo" 
            className="block w-full max-w-xs mx-auto px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            체험하기
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">앱 다운로드</h2>
          <div className="flex justify-center space-x-4">
            <Link 
              href="https://apps.apple.com/kr/app/id1234567890" 
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              App Store
            </Link>
            <Link 
              href="https://play.google.com/store/apps/details?id=com.willim.threeline" 
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Google Play
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
