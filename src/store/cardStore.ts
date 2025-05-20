import { create } from 'zustand';
import { Card, Transaction, TabType } from '../types';
import { generateCardNumber, generateExpiryDate } from '../utils/helpers';

interface CardState {
  cards: Card[];
  transactions: Transaction[];
  currentCardIndex: number;
  activeTab: TabType;
  isNewCardModalOpen: boolean;
  
  addCard: (name: string) => void;
  toggleCardNumberVisibility: (id: string) => void;
  freezeCard: (id: string) => void;
  setCurrentCardIndex: (index: number) => void;
  setActiveTab: (tab: TabType) => void;
  toggleNewCardModal: () => void;
  
  getCurrentCard: () => Card | undefined;
  getCardTransactions: (cardId: string) => Transaction[];
}

const initialCards: Card[] = [
  {
    id: '1',
    name: 'Mark Henry',
    cardNumber: '4111 1111 1111 1111',
    expiryDate: '12/25',
    cvv: '***',
    isFrozen: false,
    showCardNumber: false,
  }
];

const initialTransactions: Transaction[] = [
  {
    id: '1',
    name: 'Hamleys',
    date: '20 May 2020',
    amount: 150,
    type: 'refund',
    cardId: '1',
    category: 'shopping',
  },
  {
    id: '2',
    name: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'charge',
    cardId: '1',
    category: 'shopping',
  },
  {
    id: '3',
    name: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'charge',
    cardId: '1',
    category: 'marketing',
  },
  {
    id: '4',
    name: 'Hamleys',
    date: '20 May 2020',
    amount: -150,
    type: 'charge',
    cardId: '1',
    category: 'travel',
  }
];

export const useCardStore = create<CardState>((set, get) => ({
  cards: initialCards,
  transactions: initialTransactions,
  currentCardIndex: 0,
  activeTab: 'my',
  isNewCardModalOpen: false,
  
  addCard: (name) => {
    const newCard: Card = {
      id: Date.now().toString(),
      name,
      cardNumber: generateCardNumber(),
      expiryDate: generateExpiryDate(),
      cvv: '***',
      isFrozen: false,
      showCardNumber: false,
    };
    
    set((state) => ({ 
      cards: [...state.cards, newCard],
      currentCardIndex: state.cards.length,
      isNewCardModalOpen: false
    }));
  },
  
  toggleCardNumberVisibility: (id) => {
    set((state) => ({
      cards: state.cards.map((card) => 
        card.id === id 
          ? { ...card, showCardNumber: !card.showCardNumber } 
          : card
      ),
    }));
  },
  
  freezeCard: (id) => {
    set((state) => ({
      cards: state.cards.map((card) => 
        card.id === id 
          ? { ...card, isFrozen: !card.isFrozen } 
          : card
      ),
    }));
  },
  
  setCurrentCardIndex: (index) => {
    set({ currentCardIndex: index });
  },
  
  setActiveTab: (tab) => {
    set({ activeTab: tab });
  },
  
  toggleNewCardModal: () => {
    set((state) => ({ isNewCardModalOpen: !state.isNewCardModalOpen }));
  },
  
  getCurrentCard: () => {
    const { cards, currentCardIndex } = get();
    return cards[currentCardIndex];
  },
  
  getCardTransactions: (cardId) => {
    return get().transactions.filter(t => t.cardId === cardId);
  },
}));