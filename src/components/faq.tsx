import {useState} from "react";

interface faqInterface {
  question: string;
  answer: string;
}

const Faq = ({ question, answer }: faqInterface) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="w-full md:w-4/6 xl:w-full flex-col my-2 bg-green-200">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-semibold">{question}</h1>
        <button className="p-1 px-2 bg-amber-200" onClick={() => setShowAnswer((val)=>!val)}>
          {showAnswer ? "close" : "open"}
        </button>
      </div>
      {showAnswer && (
        <div className="w-full flex justify-start bg-amber-700">
          <h1 className="text-lg font-medium text-start">{answer}</h1>
        </div>
      )}
    </div>
  );
};

export default Faq;
