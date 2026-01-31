export default function HowItWorks() {
  const steps = [
    {
      title: "1. Build Your List",
      desc: "Browse our departments and add fresh staples to your digital list.",
      icon: "📝",
    },
    {
      title: "2. Visit the Store",
      desc: "Head to 9051 W Bellfort Ave. We're open daily to serve you.",
      icon: "🚗",
    },
    {
      title: "3. Shop & Check Off",
      desc: "Open your list on your phone and check items off as you go.",
      icon: "✅",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-2xl font-black text-stone-900">
          Shopping Made Easy
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="space-y-3 text-center">
              <div className="text-4xl" aria-hidden>
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-stone-800">{step.title}</h3>
              <p className="text-sm leading-relaxed text-stone-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
