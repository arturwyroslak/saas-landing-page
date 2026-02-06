export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "This platform transformed how our team works. We've seen a 40% increase in productivity since implementation.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      content: "The intuitive interface and powerful features make this the best solution we've tried. Highly recommended!",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Our customer satisfaction scores improved dramatically after switching to this platform. The ROI was immediate.",
      avatar: "ER",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}