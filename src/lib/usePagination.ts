import { useMemo } from "react";

/**
 * Custom hook for pagination.
 *
 * @param items - The array of items to paginate.
 * @param currentPage - The current page number.
 * @param itemsPerPage - The number of items per page.
 * @returns An object containing the current items for the page and the total number of pages.
 *
 * @example
 * const { currentItems, totalPages } = usePagination(myItems, 1, 10);
 * console.log(currentItems); // Items for the first page
 * console.log(totalPages); // Total number of pages
 */
function usePagination(
  items: any[],
  currentPage: number,
  itemsPerPage: number
) {
  const totalPages = useMemo(
    () => Math.ceil(items.length / itemsPerPage),
    [items.length, itemsPerPage]
  );

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  return { currentItems, totalPages };
}

export default usePagination;
