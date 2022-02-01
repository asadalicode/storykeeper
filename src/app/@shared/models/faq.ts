export interface Faq {
  header: string;
  questions: Questions[];
}

interface Questions {
  question: string;
  externalLink?: string;
  answer?: string;
}
