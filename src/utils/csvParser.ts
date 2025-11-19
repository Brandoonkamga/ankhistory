import { Flashcard } from '../types/flashcard';

export function parseCSV(csvContent: string): Flashcard[] {
  const lines = csvContent.trim().split('\n');
  const flashcards: Flashcard[] = [];

  for (const line of lines) {
    if (!line.trim()) continue;

    const parts: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }

    parts.push(current);

    if (parts.length >= 2) {
      flashcards.push({
        question: parts[0].trim(),
        answer: parts[1].trim()
      });
    }
  }

  return flashcards;
}
