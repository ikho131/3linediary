export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">세줄일기 체험하기</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                날짜
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                required
              />
            </div>

            <div>
              <label htmlFor="line1" className="block text-sm font-medium text-gray-700">
                첫 번째 줄
              </label>
              <input
                type="text"
                id="line1"
                name="line1"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                placeholder="오늘 하루를 시작하며..."
                required
              />
            </div>

            <div>
              <label htmlFor="line2" className="block text-sm font-medium text-gray-700">
                두 번째 줄
              </label>
              <input
                type="text"
                id="line2"
                name="line2"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                placeholder="중간에 있었던 일..."
                required
              />
            </div>

            <div>
              <label htmlFor="line3" className="block text-sm font-medium text-gray-700">
                세 번째 줄
              </label>
              <input
                type="text"
                id="line3"
                name="line3"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                placeholder="하루를 마무리하며..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#67a8bd] text-white py-3 px-4 rounded-lg hover:bg-[#5999ae] focus:outline-none focus:ring-2 focus:ring-[#67a8bd] focus:ring-offset-2"
            >
              저장하기
            </button>
          </form>
        </div>
      </main>
    </div>
  )
} 