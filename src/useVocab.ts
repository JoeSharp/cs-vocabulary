import rawCsv from './vocab.csv';

export interface Vocabulary {
    lessons: string[];
    word: string;
    definition: string;
}

const MAX_RESULTS = 10;
const ALL_VOCAB: Vocabulary[] = rawCsv.split('\n')
    .filter(s => s.length > 0)
    .map(s => s.split(','))
    .map(([lesson, word, ...definition]) => ({
        lesson: lesson.trim(), word: word.trim(), definition: definition.join(', ')
    }))
    .reduce((acc, { lesson, word, definition }) => {
        let existing = acc.find(e => e.word === word);
        return [
            ...acc.filter(e => e.word !== word),
            {
                word,
                lessons: [lesson, ...(!!existing ? existing.lessons : [])],
                definition
            }
        ]
    }, [] as Vocabulary[])



const useVocab = (searchTerm?: string): Vocabulary[] => ALL_VOCAB.filter(({ word, lessons, definition }) => {
    if (searchTerm === undefined) return true;
    const searchTermLower = searchTerm.toLowerCase();
    // if (lessonName.toLowerCase().includes(searchTermLower)) return true;
    if (word.toLowerCase().includes(searchTermLower)) return true;
    // if (definition.toLowerCase().includes(searchTermLower)) return true;
    return false;
}).filter((_, i) => i < MAX_RESULTS);

export default useVocab;