import { Flashcard } from '../types/flashcard';

interface FlashcardViewProps {
  flashcard: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function FlashcardView({ flashcard, isFlipped, onFlip }: FlashcardViewProps) {
  return (
    <div
      className="relative w-full h-96 cursor-pointer perspective-1000"
      onClick={onFlip}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? "Voir la question" : "Voir la réponse"}
      onKeyPress={(e) => {
        if (e.key === 'Enter') onFlip();
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-400 rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center">
            <div className="text-sm uppercase tracking-wider text-amber-700 font-semibold mb-4">
              Question
            </div>
            <div className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed">
              {flashcard.question}
            </div>
            <div className="mt-8 text-sm text-gray-500 italic">
              Cliquez pour révéler la réponse
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-teal-50 to-cyan-50 border-4 border-teal-400 rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center">
            <div className="text-sm uppercase tracking-wider text-teal-700 font-semibold mb-4">
              Réponse
            </div>
            <div className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed">
              {flashcard.answer}
            </div>
            <div className="mt-8 text-sm text-gray-500 italic">
              Cliquez pour retourner à la question
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
