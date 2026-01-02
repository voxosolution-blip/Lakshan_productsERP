// Currency Configuration
export default {
  code: 'LKR',
  symbol: 'Rs.',
  name: 'Sri Lankan Rupees',
  decimalPlaces: 2,
  
  format: (amount) => {
    return `Rs. ${amount.toLocaleString('en-LK', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  },
};


