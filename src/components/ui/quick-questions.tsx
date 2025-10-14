"use client";

interface QuickQuestionsProps {
  onQuestionSelect: (question: string) => void;
  isVisible: boolean;
}

export function QuickQuestions({ onQuestionSelect, isVisible }: QuickQuestionsProps) {
  const questions = [
    "Citra, bagaimana strategi marketing yang cost-effective?",
    "Tips scaling bisnis dari Citra untuk tahun ini",
    "Citra, analisa tren bisnis digital 2025",
    "Bagaimana cara Citra optimize cash flow?",
    "Strategi branding yang powerful menurut Citra",
    "Citra, tips membangun tim yang solid"
  ];

  if (!isVisible) return null;

  return (
    <div className="px-4 py-2 border-t bg-gray-50">
      <div className="text-xs text-gray-600 mb-2">Pertanyaan Populer:</div>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(question)}
            className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full transition-colors duration-200 border border-blue-200"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}