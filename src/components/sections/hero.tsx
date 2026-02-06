import Link from 'next/link';

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Transform Your Business with <span className="text-blue-600">NextGen</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            The all-in-one platform that helps teams of all sizes work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#" 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link 
              href="#" 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-blue-200 rounded-full absolute -top-10 -left-10 opacity-50"></div>
            <div className="w-64 h-64 bg-indigo-200 rounded-full absolute -bottom-10 -right-10 opacity-50"></div>
            <div className="relative bg-white rounded-xl shadow-xl p-4 w-80 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <p className="text-gray-500">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}