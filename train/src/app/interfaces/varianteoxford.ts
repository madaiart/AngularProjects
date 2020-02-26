export interface Varianteoxford {
  id: string;
  metadata: Metadata;
  results: Result[];
  word: string;
}

interface Result {
  id: string;
  language: string;
  lexicalEntries: LexicalEntry[];
  type: string;
  word: string;
}

interface LexicalEntry {
  entries: Entry[];
  language: string;
  lexicalCategory: LexicalCategory;
  text: string;
}

interface LexicalCategory {
  id: string;
  text: string;
}

interface Entry {
  homographNumber: string;
}

interface Metadata {
  operation: string;
  provider: string;
  schema: string;
}
