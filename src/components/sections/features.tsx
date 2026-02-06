export function Features() {
  const features = [
    {
      title: "Powerful Analytics",
      description: "Gain deep insights into your business performance with our advanced analytics dashboard.",
      icon: "📊",
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools and services through our extensive integration library.",
      icon: "🔗",
    },
    {
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance certifications to keep your data safe.",
      icon: "🔒",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to grow your business and delight your customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}