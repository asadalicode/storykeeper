export interface Faq {
  header: string;
  questions: Questions[];
}

interface Questions {
  title: string;
  externalLink?: string;
  description?: string;
}
