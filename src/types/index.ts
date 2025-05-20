export type Card = {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  isFrozen: boolean;
  showCardNumber: boolean;
};

export type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: number;
  type: 'refund' | 'charge';
  cardId: string;
  category?: 'shopping' | 'travel' | 'marketing';
};

export type TabType = 'my' | 'all';