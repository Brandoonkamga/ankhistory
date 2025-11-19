import { BookOpen } from 'lucide-react';
import FlashcardDeck from './components/FlashcardDeck';
import { Flashcard } from './types/flashcard';

const flashcardsData: Flashcard[] = [
  { question: "Dans la Leçon 1, quel hiéroglyphe numérique africain représente l'unité (1) ?", answer: "Le bâton vertical (|), qui symbolise un doigt ou \"l'homme debout\"." },
  { question: "Dans la numération africaine, le symbole de l'anse de panier (∩) représente quel nombre ?", answer: "Le nombre 10 (une dizaine)." },
  { question: "Comment le symbole de la dizaine (∩) est-il formé conceptuellement dans la Leçon 1 ?", answer: "En liant symboliquement 10 bâtons (unités) ensemble avec une corde qui forme une anse." },
  { question: "Quel est le concept mathématique clé derrière le fait de grouper 10 unités pour former une dizaine, comme le faisaient les Africains ?", answer: "Le système décimal, ou le principe de \"paqueter\" pour pouvoir compter de grands nombres." },
  { question: "Comment un scribe africain lirait-il la séquence ∩∩ ||| ?", answer: "Comme 2 paquets de dix et 3 unités, soit le nombre 23." },
  { question: "Décodez le nombre africain suivant en chiffres modernes : ∩∩∩ ||||.", answer: "34." },
  { question: "Comment écririez-vous le nombre 42 en utilisant les hiéroglyphes numériques du bâton et de l'anse ?", answer: "∩∩∩∩ ||." },
  { question: "À quel niveau scolaire la leçon \"L'Architecture des Nombres\" est-elle destinée ?", answer: "CP (Cours Préparatoire)." },
  { question: "L'émotion cible de la leçon sur la numération africaine est _____, devant la logique simple de l'écriture.", answer: "l'émerveillement" },
  { question: "Quel est l'outil principal utilisé dans la Leçon 2 pour construire des angles droits ?", answer: "La Corde à 13 Nœuds." },
  { question: "Combien d'intervalles de même longueur une corde à 13 nœuds comporte-t-elle ?", answer: "12 intervalles." },
  { question: "Pour former un triangle rectangle avec la corde à 13 nœuds, quelles doivent être les longueurs des trois côtés en nombre d'intervalles ?", answer: "Un côté de 3 intervalles, un côté de 4 intervalles et un côté de 5 intervalles." },
  { question: "Dans le triangle 3-4-5 formé par la corde, quel angle spécial est obligatoirement créé ?", answer: "Un angle droit parfait." },
  { question: "La connaissance permettant de créer un angle droit avec un triangle 3-4-5 est une application ancienne de quel théorème mathématique célèbre ?", answer: "Le théorème de Pythagore." },
  { question: "Quelle déesse africaine, maîtresse de l'architecture et des mathématiques, est associée à la Leçon 2 ?", answer: "Seshat, la dame des bâtisseurs." },
  { question: "Quelles formes géométriques, parmi un carré, un rectangle et un triangle quelconque, nécessitent l'usage de la corde à 13 nœuds pour être construites solidement ?", answer: "Le carré et le rectangle, car ils possèdent des angles droits." },
  { question: "À quel niveau scolaire la leçon \"Le Secret de la Corde à 13 Nœuds\" est-elle destinée ?", answer: "CE1." },
  { question: "Quelle émotion la Leçon 2 sur la géométrie cherche-t-elle à inspirer chez l'élève ?", answer: "La confiance en sa capacité à construire le monde avec précision." },
  { question: "Quel symbole africain est utilisé dans la Leçon 3 pour enseigner les fractions ?", answer: "L'Œil d'Horus (Oudjat)." },
  { question: "Selon le mythe, qui a rassemblé les morceaux de l'œil d'Horus après qu'il a été brisé ?", answer: "Thot (Tehuti), le dieu des mathématiques." },
  { question: "Dans le système de fractions de l'Œil d'Horus, quelle fraction représente la partie droite de l'œil (le blanc) ?", answer: "1/2 (la moitié)." },
  { question: "Dans le système de fractions de l'Œil d'Horus, quelle fraction est représentée par la pupille (le rond) ?", answer: "1/4 (le quart)." },
  { question: "Quelle fraction est associée au sourcil dans le puzzle de l'Œil d'Horus ?", answer: "1/8." },
  { question: "Le système de division utilisé pour les fractions de l'Œil d'Horus est une division de type _____.", answer: "binaire" },
  { question: "En additionnant toutes les fractions de l'Œil d'Horus (1/2 + 1/4 + 1/8 + ...), on obtient une somme qui est _____, le morceau manquant représentant la magie ou l'infini.", answer: "presque 1" },
  { question: "Quelle est la règle concernant la taille d'une fraction par rapport à son dénominateur (le chiffre du bas) ?", answer: "Plus le dénominateur est grand, plus le morceau est petit." },
  { question: "Dans l'exercice du pharmacien, quelle quantité est la plus grande : 1/2 tasse d'eau ou 1/4 de tasse de miel ?", answer: "1/2 tasse d'eau." },
  { question: "Dans une barre de chocolat de 8 carrés, combien de carrés représentent 1/2 de la barre ?", answer: "4 carrés." },
  { question: "Dans une barre de chocolat de 8 carrés, combien de carrés représentent 1/4 de la barre ?", answer: "2 carrés." },
  { question: "Si on mange 1/2 puis 1/4 d'une barre de 8 carrés, combien de carrés a-t-on mangé au total ?", answer: "6 carrés (4 + 2)." },
  { question: "À quel niveau scolaire la leçon \"L'Œil d'Horus : Le Puzzle de l'Infini\" est-elle destinée ?", answer: "CE2." },
  { question: "Quelle émotion la Leçon 3 sur les fractions cherche-t-elle à développer chez l'élève ?", answer: "La fierté de posséder une précision divine." }
];

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-teal-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 px-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <BookOpen size={40} className="text-amber-700 flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-700 leading-tight">
              Mathématiques Africaines
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            Découvrez les secrets des mathématiques de l'Afrique ancienne à travers ces cartes interactives
          </p>
        </header>

        <FlashcardDeck flashcards={flashcardsData} />
      </div>
    </div>
  );
}

export default App;
