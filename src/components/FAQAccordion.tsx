import { useState } from "react";
import type { Faq } from "@data/types";

type FAQAccordionProps = {
  faqs: Faq[];
};

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <section className="faq-item" key={faq.question}>
          <button
            className="faq-question"
            type="button"
            aria-expanded={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <span>{faq.question}</span>
            <span className="material-symbols-rounded" aria-hidden="true">
              {openIndex === index ? "expand_less" : "expand_more"}
            </span>
          </button>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </section>
      ))}
    </div>
  );
}
