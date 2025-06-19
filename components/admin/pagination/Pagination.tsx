'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Pagination = {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
}

export const Pagination = ({ pagination, onPageChange }: {
    pagination: Pagination,
    onPageChange: (page: number) => void
}) => {
    const { currentPage, totalPages } = pagination;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    // Update URL when page changes
    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        router.push(`${pathname}?${params.toString()}`);
        onPageChange(page);
    };

    // Initialize page from URL on component mount
    useEffect(() => {
        const pageFromUrl = searchParams.get('page');
        if (pageFromUrl && Number(pageFromUrl) !== currentPage) {
            onPageChange(Number(pageFromUrl));
        }
    }, [searchParams, currentPage, onPageChange]);


    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const half = Math.floor(maxVisiblePages / 2);
            let start = currentPage - half;
            let end = currentPage + half;

            if (start < 1) {
                start = 1;
                end = maxVisiblePages;
            }

            if (end > totalPages) {
                end = totalPages;
                start = totalPages - maxVisiblePages + 1;
            }

            if (start > 1) {
                pages.push(1);
                if (start > 2) {
                    pages.push('...');
                }
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (end < totalPages) {
                if (end < totalPages - 1) {
                    pages.push('...');
                }
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-between mt-4 px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Menampilkan <span className="font-medium">{(currentPage - 1) * pagination.itemsPerPage + 1}</span> -{' '}
                        <span className="font-medium">
                            {Math.min(currentPage * pagination.itemsPerPage, pagination.totalItems)}
                        </span>{' '}
                        dari <span className="font-medium">{pagination.totalItems}</span> hasil
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            <span className="sr-only">Previous</span>
                            &larr;
                        </button>

                        {getPageNumbers().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${page === currentPage
                                    ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                    } ${typeof page !== 'number' ? 'cursor-default' : ''}`}
                                disabled={typeof page !== 'number'}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            <span className="sr-only">Next</span>
                            &rarr;
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};