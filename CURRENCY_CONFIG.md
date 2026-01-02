# Currency Configuration - Sri Lankan Rupees (LKR)

## ✅ Configuration Complete

The system is now configured to use **Sri Lankan Rupees (LKR)** for all payments and monetary values.

## Currency Details

- **Code**: LKR
- **Symbol**: Rs.
- **Name**: Sri Lankan Rupees
- **Decimal Places**: 2

## Implementation

### Frontend
- Currency utility functions in `frontend/src/utils/currency.ts`
- Dashboard displays amounts in LKR format
- All monetary values will show as: `Rs. 1,234.56`

### Backend
- Currency configuration in `backend/src/config/currency.js`
- Can be imported and used in controllers for formatting

## Usage Examples

### In Frontend Components

```typescript
import { formatCurrency, formatCurrencySimple, CURRENCY_SYMBOL } from '../utils/currency';

// Format with full currency formatting
const amount = formatCurrency(1234.56); // "LKR 1,234.56"

// Format with Rs. prefix
const amount2 = formatCurrencySimple(1234.56); // "Rs. 1,234.56"

// Use symbol constant
const display = `${CURRENCY_SYMBOL} ${value}`; // "Rs. 1234.56"
```

### In Backend Controllers

```javascript
import currency from '../config/currency.js';

const formatted = currency.format(1234.56); // "Rs. 1,234.56"
```

## Display Format

- Large amounts: `Rs. 12,45,890.00`
- Simple format: `Rs. 1,234.56`
- Compact: `Rs. 1.2L` (for very large numbers)

All payments, sales, expenses, and financial reports will display in Sri Lankan Rupees.


