export const statsData = [
  { 
    id: 'account-holders',
    number: '1.5k', 
    label: 'Account Holders',
    trend: '+12%', // optional: for showing trends
    icon: 'users' // optional: for future icon implementation
  },
  { 
    id: 'transactions',
    number: '2.1k', 
    label: 'Transactions',
    trend: '+8%',
    icon: 'transactions'
  },
  { 
    id: 'settlement',
    number: '2.3k', 
    label: 'Settlement',
    trend: '+15%',
    icon: 'settlement'
  },
  { 
    id: 'qr-orders',
    number: '45k', 
    label: 'QR Orders',
    trend: '+25%',
    icon: 'qr'
  }
];

export const settlementData = [
  { 
    id: 'set-1',
    name: 'Ibrahim', 
    date: '23 Oct, 09:15 AM', 
    amount: '+₹90',
    status: 'completed' // optional status
  },
  { 
    id: 'set-2',
    name: 'Ibrahim', 
    date: '23 Oct, 09:15 AM', 
    amount: '+₹90',
    status: 'completed'
  },
  { 
    id: 'set-3',
    name: 'Ibrahim', 
    date: '23 Oct, 09:15 AM', 
    amount: '+₹90',
    status: 'completed'
  },
];

export const transactionData = [
  { 
    id: 'txn-1',
    name: 'Ibrahim', 
    date: '23 Oct, 09:15 AM', 
    amount: '+₹90',
    type: 'credit' // optional: credit/debit
  },
  { 
    id: 'txn-2',
    name: 'Ibrahim', 
    date: '23 Oct, 09:15 AM', 
    amount: '+₹90',
    type: 'credit'
  },
  { 
    id: 'txn-3',
    name: 'Ibrahim', 
    date: '23 Oct, 09:15 AM', 
    amount: '+₹90',
    type: 'credit'
  },
];

// Optional: Add totals as constants
export const SETTLEMENT_TOTAL = '₹1,23,816.19';
export const TRANSACTION_TOTAL = '₹1,23,816.19';