export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-md mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">회원가입</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="password-confirm"
                name="password-confirm"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#67a8bd] focus:outline-none focus:ring-1 focus:ring-[#67a8bd]"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#67a8bd] text-white py-3 px-4 rounded-lg hover:bg-[#5999ae] focus:outline-none focus:ring-2 focus:ring-[#67a8bd] focus:ring-offset-2"
            >
              가입하기
            </button>
          </form>
        </div>
      </main>
    </div>
  )
} 