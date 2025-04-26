import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface faqInterface {
  question: string;
  answer: string;
}

const Faq = ({ question, answer }: faqInterface) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="w-full my-3 md:w-4/6 xl:w-full flex-col overflow-hidden">
      <div
        className={`w-full p-5 flex items-center justify-between bg-[#2C2D2F] ${
          showAnswer ? "rounded-t-xl" : "rounded-xl"
        }`}
      >
        <h1 className="text-xl font-semibold">{question}</h1>
        <button
          className="p-1 px-2 text-xl"
          onClick={() => setShowAnswer((val) => !val)}
        >
          {showAnswer ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>

      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden w-full flex justify-start"
          >
            <div className="bg-[#2C2D2F] p-4 rounded-b-xl w-full">
              <h1 className="text-lg text-gray-300 text-start">{answer}</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
