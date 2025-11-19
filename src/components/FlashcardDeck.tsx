import { useState, useEffect } from 'react';
import { Flashcard } from '../types/flashcard';
import { Shuffle, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import FlashcardView from './FlashcardView';

interface FlashcardDeckProps {
  flashcards: Flashcard[];
}

export default function FlashcardDeck({ flashcards }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState(flashcards);

  useEffect(() => {
    const savedIndex = localStorage.getItem('flashcard-progress');
    if (savedIndex && parseInt(savedIndex) < flashcards.length) {
      setCurrentIndex(parseInt(savedIndex));
    }
  }, [flashcards.length]);

  useEffect(() => {
    localStorage.setItem('flashcard-progress', currentIndex.toString());
  }, [currentIndex]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleReset = () => {
    setCards(flashcards);
    setCurrentIndex(0);
    setIsFlipped(false);
    localStorage.removeItem('flashcard-progress');
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      if (isFlipped) {
        handleNext();
      } else {
        handleFlip();
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrevious();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-medium text-gray-700">
            Carte {currentIndex + 1} sur {cards.length}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleShuffle}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors"
              aria-label="Mélanger les cartes"
            >
              <Shuffle size={20} />
              <span className="hidden sm:inline">Mélanger</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-teal-600 text-teal-700 rounded-lg hover:bg-teal-50 transition-colors"
              aria-label="Réinitialiser"
            >
              <RotateCcw size={20} />
              <span className="hidden sm:inline">Réinitialiser</span>
            </button>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>
      </div>

      <FlashcardView
        flashcard={cards[currentIndex]}
        isFlipped={isFlipped}
        onFlip={handleFlip}
      />

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handlePrevious}
          className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all disabled:opacity-50"
          aria-label="Carte précédente"
        >
          <ChevronLeft size={24} />
          <span>Précédent</span>
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
          aria-label="Carte suivante"
        >
          <span>Suivant</span>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Utilisez les flèches du clavier ou la barre d'espace pour naviguer</p>
      </div>
    </div>
  );
}
