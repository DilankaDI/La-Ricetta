import React, { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "What is this website about?",
    answer:
      "This website allows users to explore and discover various recipes from around the world. You can view, filter, and learn how to make delicious dishes easily.",
  },
  {
    question: "Can I submit my own recipes?",
    answer:
      "Currently, recipe submission is not available for all users. However, we plan to allow registered members to share their own recipes soon.",
  },
  {
    question: "Are these recipes free to use?",
    answer:
      "Yes! All recipes on our site are completely free to access. You can read, save, and try them anytime.",
  },
  {
    question: "How often are new recipes added?",
    answer:
      "We update our collection regularly — new recipes are added every week to bring you fresh cooking ideas.",
  },
  {
    question: "Do I need an account to view recipes?",
    answer:
      "No account is required to view recipes. However, you’ll need one if you want to save your favorite dishes or submit your own.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Find answers to the most common questions about our platform.
        </p>
      </header>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
