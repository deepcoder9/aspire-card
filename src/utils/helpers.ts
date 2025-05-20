export const formatCardNumber = (cardNumber: string): string => {
  return cardNumber.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
};

export const formatMaskedCardNumber = (cardNumber: string): string => {
  const parts = cardNumber.replace(/\s/g, '').match(/.{1,4}/g) || [];
  if (parts.length >= 4) {
    return `•••• •••• •••• ${parts[3]}`;
  }
  return cardNumber;
};

export const generateCardNumber = (): string => {
  const digits = '0123456789';
  let cardNumber = '4';
  for (let i = 0; i < 15; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    cardNumber += digits[randomIndex];
  }
  
  return formatCardNumber(cardNumber);
};

// Generate a random expiry date 2-5 years in the future
export const generateExpiryDate = (): string => {
  const today = new Date();
  const futureYear = today.getFullYear() + Math.floor(Math.random() * 3) + 2;
  const month = Math.floor(Math.random() * 12) + 1;
  
  return `${month.toString().padStart(2, '0')}/${(futureYear % 100).toString()}`;
};

export const formatAmount = (amount: number): string => {
  const sign = amount >= 0 ? '+ ' : '- ';
  return `${sign}$ ${Math.abs(amount)}`;
};