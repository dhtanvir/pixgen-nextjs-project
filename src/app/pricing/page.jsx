import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For beginners",
    features: ["Basic Access", "Limited Images", "Community Support"],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    description: "For creators",
    features: ["Unlimited Images", "Faster Generation", "Priority Support"],
    button: "Upgrade Now",
    popular: true,
  },
  {
    name: "Premium",
    price: "$19",
    description: "For professionals",
    features: [
      "All Pro Features",
      "4K Images",
      "API Access",
      "Premium Support",
    ],
    button: "Go Premium",
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
      <p className="text-center text-gray-500 mb-12">
        Choose the plan that fits your needs
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-md border ${
              plan.popular ? "border-blue-500 scale-105 bg-white" : "bg-white"
            }`}
          >
            {plan.popular && (
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h2 className="text-2xl font-semibold mt-4">{plan.name}</h2>
            <p className="text-gray-500 mb-4">{plan.description}</p>

            <h3 className="text-4xl font-bold mb-6">
              {plan.price}
              <span className="text-lg text-gray-500">/mo</span>
            </h3>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600">
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg font-semibold ${
                plan.popular ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
