import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              SaaS Landing
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}