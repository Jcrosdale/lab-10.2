import { useState } from 'react';

// Inputs
// totalItems: The total number of items to be paginated.
// itemsPerPage: The number of items to display per page (default to 10).
// initialPage: The page to start on (default to 1).

export default function usePagination({ totalItems, itemsPerPage = 10, initialPage = 1 }) {
    // Objects

    // totalPages: The total number of pages calculated based on totalItems and itemsPerPage.
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    // currentPage: The current active page number.
    const [currentPage, setCurrentPage] = useState(initialPage);

    // setPage(pageNumber): A function to jump to a specific page number.
    const setPage = (pageNumber) => {

    }

    // startIndex: The starting index of items for the current page (0-based).
    const startIndex = () => ((currentPage - 1) * itemsPerPage)

    // endIndex: The ending index of items for the current page (0-based).
    const endIndex = () => {}

    // itemsOnCurrentPage: The actual number of items on the current page (useful for the last page).
    const itemsOnCurrentPage = () => {}

    // nextPage(): A function to go to the next page.
    const nextPage = () => setPage(currentPage + 1);

    // prevPage(): A function to go to the previous page.
    const prevPage = () => setPage(currentPage - 1);

    // canNextPage: Boolean indicating if there is a next page.
    const canNextPage = () => currentPage < totalPages;

    // canPrevPage: Boolean indicating if there is a previous page.
    const canPrevPage = () => currentPage > 1;

    return {
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
    };

}