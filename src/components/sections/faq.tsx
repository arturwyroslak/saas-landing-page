export function FAQ() {
  const faqs = [
    {
      question: "How secure is my data?",
      answer: "We use industry-standard encryption and security protocols to ensure your data is always protected. All data is encrypted both in transit and at rest."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. You'll continue to have access until the end of your billing period."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Absolutely! We offer special pricing for non-profit organizations. Please contact our sales team for more information."
    },
    {
      question: "How often do you release updates?",
      answer: "We release minor updates weekly and major feature releases monthly. All updates are backward compatible."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}