export interface Oxford {
  id?: string;
  metadata?: Metadata;
  results?: Result[];
  word?: string;
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
  lexicalCategory: Domain;
  pronunciations?: Pronunciation[];
  text: string;
}

interface Pronunciation {
  dialects: string[];
  phoneticNotation: string;
  phoneticSpelling: string;
  audioFile?: string;
}

interface Entry {
  etymologies?: string[];
  homographNumber?: string;
  senses: Sense[];
  grammaticalFeatures?: GrammaticalFeature[];
}

interface GrammaticalFeature {
  id: string;
  text: string;
  type: string;
}

interface Sense {
  definitions: string[];
  domains?: Domain[];
  examples?: Example[];
  id: string;
  shortDefinitions: string[];
  registers?: Domain[];
  subsenses?: Subsense[];
  thesaurusLinks?: ThesaurusLink[];
  regions?: Domain[];
}

interface ThesaurusLink {
  entry_id: string;
  sense_id: string;
}

interface Subsense {
  definitions: string[];
  domains?: Domain[];
  id: string;
  shortDefinitions: string[];
  examples?: Example[];
  regions?: Domain[];
  notes?: Note[];
}

interface Note {
  text: string;
  type: string;
}

interface Example {
  text: string;
}

interface Domain {
  id: string;
  text: string;
}

interface Metadata {
  operation: string;
  provider: string;
  schema: string;
}
