import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';

const HistoryTable = ({ columns, data, globalFilter }) => {
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: globalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="border-b border-gray-200">
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="text-left py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-4 px-4 text-sm text-gray-900">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 -mx-6 -mb-6 mt-4 px-4 py-3 rounded-b-xl">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="mr-2 text-green-600 hover:text-green-700 disabled:text-gray-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 disabled:hover:bg-transparent transition-colors"
            >
              <span className="text-lg font-bold">&lt;</span>
            </button>
            <div className="flex space-x-1">
              {[...Array(table.getPageCount())].map((_, i) => (
                <button
                  key={i}
                  onClick={() => table.setPageIndex(i)}
                  className={`w-8 h-8 rounded-full transition-colors ${
                    i === table.getState().pagination.pageIndex
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="ml-2 text-green-600 hover:text-green-700 disabled:text-gray-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 disabled:hover:bg-transparent transition-colors"
            >
              <span className="text-lg font-bold">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryTable;
