import React from 'react';

export const COLUMNS = [
  {
    header: 'NAME',
    accessorKey: 'name',
    cell: ({ row }) => row.original.name || 'Anisha'
  },
  {
    header: 'DATE & TIME',
    accessorKey: 'created_date',
    cell: ({ row }) => {
      const date = new Date(row.original.created_date);
      return date.toLocaleDateString('en-US', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      });
    }
  },
  {
    header: 'ACCOUNT',
    accessorKey: 'wallet',
    cell: ({ row }) => (
      <div className="flex items-center">
        <span className="text-gray-500 mr-2">From</span>
        <img 
          src={row.original.wallet.image} 
          alt={row.original.wallet.name} 
          className="w-6 h-6 rounded-full" 
        />
      </div>
    )
  },
  {
    header: 'AMOUNT',
    accessorKey: 'amount',
    cell: ({ row }) => `₹${parseFloat(row.original.amount).toLocaleString('en-IN')}`
  },
  {
    header: 'STATUS',
    accessorKey: 'status',
    cell: ({ row }) => {
      const status = row.original.status;
      const statusStyles = {
        PENDING: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        FAILED: 'bg-red-100 text-red-800 border-red-300',
        SUCCESS: 'bg-green-100 text-green-800 border-green-300'
      };
      return (
        <span className={`px-3 py-1 rounded-md text-sm border ${statusStyles[status] || ''}`}>
          {status.charAt(0) + status.slice(1).toLowerCase()}
        </span>
      );
    }
  },
  {
    header: 'DETAILS',
    accessorKey: 'transaction_id',
    cell: () => (
      <button className="text-gray-600 underline hover:text-gray-800">
        View
      </button>
    )
  }
];