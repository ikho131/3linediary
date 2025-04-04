import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e7f3f7] to-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/en" className="text-[#67a8bd] text-2xl font-bold">3Line Diary</Link>
          <div className="space-x-8">
            <Link href="/en/about" className="text-gray-600 hover:text-[#67a8bd]">About</Link>
            <Link href="/en/diary" className="text-gray-600 hover:text-[#67a8bd]">Write</Link>
            <Link href="/en/support" className="text-gray-600 hover:text-[#67a8bd]">Support</Link>
            <Link href="/en/login" className="text-gray-600 hover:text-[#67a8bd]">Login</Link>
            <Link href="/" className="text-gray-600 hover:text-[#67a8bd]">KO</Link>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Write Your Day in Three Lines
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We aim to capture people's honest and authentic life stories<br />
            in various forms and expressions
          </p>
          
          <div className="flex gap-4 justify-center mb-20">
            <Link 
              href="/en/signup" 
              className="px-8 py-4 bg-[#67a8bd] text-white rounded-lg hover:bg-[#5899ae] transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/en/demo" 
              className="px-8 py-4 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Startup Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p>
                During our 400-day world trip after quitting our jobs in search of happiness,
                we found ourselves struggling with the pressure of 'having to do something'
                rather than finding happiness.
              </p>
              <p>
                When I was exhausted from the burden of documenting our journey,
                my wife said, "Honey, just write three lines if it's too hard."
              </p>
              <p>
                Letting go of the pressure to document everything,
                we found 'authenticity' in just three lines and one photo per day.
              </p>
              <p className="font-medium">
                Starting with the idea 'What if everyone could turn their life stories into a book by writing just three lines?',
                3Line Diary now has 1.5 million users sharing their stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Simple Recording</h3>
                <p className="text-gray-600">Record your day with three lines and one photo.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Shared Diaries</h3>
                <p className="text-gray-600">Connect and empathize with people sharing common interests.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#e7f3f7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Your Book</h3>
                <p className="text-gray-600">Create your unique book with your precious memories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#67a8bd] mb-2">1.5M</div>
                <div className="text-gray-600">Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#67a8bd] mb-2">300K</div>
                <div className="text-gray-600">Monthly Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#67a8bd] mb-2">300M+</div>
                <div className="text-gray-600">Total Page Views</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-[#67a8bd]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Start Writing Today</h2>
            <div className="flex gap-6 justify-center">
              <Link href="https://apps.apple.com/app/3linediary" className="hover:opacity-90">
                App Store
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=3linediary" className="hover:opacity-90">
                Google Play
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  <li><Link href="/en/about" className="hover:text-white">Our Story</Link></li>
                  <li><Link href="/en/about/app" className="hover:text-white">App</Link></li>
                  <li><Link href="/en/about/history" className="hover:text-white">History</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="/en/support/faq" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="/en/support/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Press</h3>
                <ul className="space-y-2">
                  <li><Link href="/en/press" className="hover:text-white">Press Releases</Link></li>
                  <li><Link href="/en/news" className="hover:text-white">News</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">About Willim</h3>
                <p className="text-sm">
                  Willim Inc. is a combination of 'will' and 'lim (林, forest)',
                  aiming to create a world full of will and authenticity.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
              © 2024 Willim Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 