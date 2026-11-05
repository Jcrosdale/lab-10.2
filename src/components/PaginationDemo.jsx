import { useState } from 'react';
import usePagination from '../hooks/usePagination';

// Create a component that uses your usePagination hook.
// Display the current page number, total pages, and the slice of items for the current page.
// Include buttons for “Previous”, “Next”, and jumping to specific page numbers (if you wish to demonstrate setPage more thoroughly).
// Disable Previous/Next buttons when canPrevPage or canNextPage is false.

export default function PaginationDemo() {
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Simulate a list of items (e.g., an array of 100 numbers or strings).
    const items = Array.from({ length: 123 }, (_, index) => `Item ${index + 1}`)

    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    } = usePagination({
        totalItems: items.length,
        itemsPerPage
    });

    const currentItems = items.slice(startIndex, endIndex + 1);

    return (
        <>

            <h1>Pagination Demo</h1>

            <label>Items per page:</label>
            <select
            id='itemsPerPage' 
            value={itemsPerPage}
            onChange={(event) => {
                setItemsPerPage(Number(event.target.value));
                setPage(1);
            }}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>

            <p>Total Items: {items.length}</p>

            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <div>
                <button onClick={prevPage} disabled={!canPrevPage}>
                    Previous
                </button>

                Page
                <input
                type='number'
                min='1'
                max={totalPages}
                value={currentPage}
                onChange={(event) => setPage(Number(event.target.value))}
                />

                of {totalPages}

                <button onClick={nextPage} disabled={!canNextPage}>
                    Next
                </button>
            </div>

            <p>
                Showing items {items.length === 0 ? 0 : startIndex + 1}
                {' - '}
                {startIndex + itemsOnCurrentPage}
                {' (Total on this page: '}
                {itemsOnCurrentPage}
            </p>

            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                    key={index}
                    onClick={() => setPage(index + 1)}
                    disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    )
}