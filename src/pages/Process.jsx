import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({
  id,
  title,
  phase,
  expandedId,
  setExpandedId,
  content,
  imageUrl,
}) => {
  const isOpen = id === expandedId;

  return (
    <div className="border-b border-t text-gray-300 border-gray-200">
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#18181B" : "#18181B" }}
        onClick={() => setExpandedId(isOpen ? null : id)}
        className="cursor-pointer flex justify-between items-center px-12 p-4"
      >
        <span>{title}</span>
        <span>{phase}</span>
        <span className="text-gray-200">{isOpen ? "-" : "+"}</span>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden bg-zinc-900"
          >
            <div className="p-4 flex w-full flex-row items-center">
              <div className="w-1/2"></div>
              <div className="flex w-1/2 flex-col">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-24 rounded-lg h-24 my-6"
                />
                <div className="flex-1 w-2/3 mb-4">
                  <p className="font-['NeueMontrealRegular']">{content}</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Process() {
  const [expandedId, setExpandedId] = useState(null);

  const accordions = [
    {
      id: 1,
      title: "01. Stage",
      phase: "Recognizing",
      content:
        "We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions.",
      imageUrl: "/Stage1.webp",
    },
    {
      id: 2,
      title: "02. Stage ",
      phase: "Narration",
      content:
        "Based on the answers, previous drafts, and additional research, we will develop a foundation of the deck — the structure of the presentation. We build a tone of voice, flow, and narrative to engage our audience. Here we will win people's minds.",
      imageUrl: "/Stage2.webp",
    },
    {
      id: 3,
      title: "03. Stage ",
      phase: "Design",
      content:
        "We use design to guide our audience's attention and keep them engaged. It's not only what you want them to do, but also how you make them feel. We make sure the presentation wins people's hearts and leaves a perfect long-lasting impression.",
      imageUrl: "/Stage3.webp",
    },
    {
      id: 4,
      title: "04. Stage ",
      phase: "Feedback",
      content:
        "We want to stay on the same page. Hence, each phase wraps up presenting the work to you to collect and implement your feedback if such appears.",
      imageUrl: "Stage4.webp",
    },
    {
      id: 5,
      title: "05. Stage ",
      phase: "Delivery",
      content:
        "We will carefully collect and prepare all the project files to ensure smooth future use.",
      imageUrl: "Stage5.webp",
    },
  ];

  return (
    <div className="max-w-auto mt-4 ">
      <h1 className="md:text-5xl text-lg px-8  font-['NeueMontrealRegular']">
        Comprehensive approach
      </h1>
      <div className="mt-8 shadow-md rounded-md">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.id}
            id={accordion.id}
            title={accordion.title}
            phase={accordion.phase}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
            content={accordion.content}
            imageUrl={accordion.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
