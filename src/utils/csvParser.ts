import { Flashcard } from '../types/flashcard';

export function parseCSV(csvContent: string): Flashcard[] {
  const lines = csvContent.trim().split('\n');
  const flashcards: Flashcard[] = [];

  for (const line of lines) {
    const match = line.match(/"([^"]+)","([^"]+)"/);
    if (match) {
      flashcards.push({
        question: match[1].replace(/""/g, '"'),
        answer: match[2].replace(/""/g, '"')
      });
    }
  }

  return flashcards;
}
