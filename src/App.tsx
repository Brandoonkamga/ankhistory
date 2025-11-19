import { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import FlashcardDeck from './components/FlashcardDeck';
import { parseCSV } from './utils/csvParser';
import { Flashcard } from './types/flashcard';

function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/src/data/flashcards.csv')
      .then(response => response.text())
      .then(csvContent => {
        const cards = parseCSV(csvContent);
        setFlashcards(cards);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading flashcards:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-teal-100 flex items-center justify-center">
        <div className="text-2xl text-gray-700">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-teal-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 px-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <BookOpen size={40} className="text-amber-700 flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-700 leading-tight">
              Mathématiques Égyptiennes
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            Découvrez les secrets des mathématiques de l'Égypte ancienne à travers ces cartes interactives
          </p>
        </header>

        {flashcards.length > 0 ? (
          <FlashcardDeck flashcards={flashcards} />
        ) : (
          <div className="text-center text-gray-600">
            Aucune carte trouvée
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
