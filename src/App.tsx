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
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={48} className="text-amber-700" />
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-700">
              Mathématiques Égyptiennes
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
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
