/**
 * Filters an array to return only items where the 'featured' property is truthy.
 *
 * Note: This function uses `array.filter`, which creates a new array.
 * For very large input arrays, this could have performance implications.
 * Ensure the input array size is reasonable to avoid potential performance issues.
 *
 * @param array - The array to filter
 * @returns A new array containing only the items where the 'featured' property is truthy
 */
export function featuredArray(array: any[]) {
  return array.filter((item) => item?.featured === true);
}

export function alphabeticalSort(
  array: string[],
  ascending: boolean = true
): string[] {
  return [...array].sort((a, b) => {
    return ascending ? a.localeCompare(b) : b.localeCompare(a);
  });
}

/**
 * Sorts an array of objects by a specified property.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to sort.
 * @param property - The property of the elements to sort by.
 * @param ascending - Whether to sort in ascending (true) or descending (false) order. Defaults to true.
 * @returns A new array with the elements sorted by the specified property.
 *
 * @example
 * const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
 * const sortedByAge = sortByProperty(users, 'age'); // [{ name: 'Jane', age: 25 }, { name: 'John', age: 30 }]
 */
export function sortByProperty<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

export function sortByLength(
  array: string[],
  ascending: boolean = true
): string[] {
  return [...array].sort((a, b) => {
    const lengthA = a.length;
    const lengthB = b.length;
    return ascending ? lengthA - lengthB : lengthB - lengthA;
  });
}

/**
 * Groups and sorts an array of objects based on specified properties.
 *
 * This function first groups the array items by a specified property, then sorts each group
 * by another property if provided. The function supports grouping and sorting by property values
 * or by the length of string properties, as well as handling numerical, string, and date values.
 *
 * @template T - The type of items in the array
 *
 * @param {T[]} array - The array to be grouped and sorted
 * @param {keyof T} groupByProperty - The property by which to group the array
 * @param {keyof T} [sortByPropertyKey] - Optional property by which to sort items within each group
 * @param {boolean} [sortAscending=true] - Whether to sort in ascending order within each group
 * @param {boolean} [sortByLength=false] - Whether to sort by the length of the sortByPropertyKey property value
 * @param {boolean} [groupByLength=false] - Whether to group by the length of the groupByProperty value
 * @param {boolean} [groupAscending=false] - Whether to sort groups in ascending order
 *
 * @returns {T[]} A new array with items grouped and sorted according to the specified criteria
 *
 * @example
 * // Group users by department, then sort by name
 * const sortedUsers = groupAndSortByProperties(users, 'department', 'name');
 *
 * @example
 * // Group tasks by priority (descending), then sort by date (oldest first)
 * const sortedTasks = groupAndSortByProperties(tasks, 'priority', 'dueDate', true, false, false, false);
 */
export function groupAndSortByProperties<T>(
  array: T[],
  groupByProperty: keyof T,
  sortByPropertyKey?: keyof T,
  sortAscending: boolean = true,
  sortByLength: boolean = false,
  groupByLength: boolean = false,
  groupAscending: boolean = false
): T[] {
  // Group the array by the specified property or by the length of the property
  const grouped = array.reduce(
    (acc, item) => {
      const key = groupByLength
        ? (item[groupByProperty] as unknown as string)?.length || 0
        : (item[groupByProperty] as string | number);

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    },
    {} as Record<string | number, T[]>
  );

  // Sort the group keys to ensure the groups are processed in the correct order
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    if (groupByLength) {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      return groupAscending ? numA - numB : numB - numA;
    } else {
      // Try to compare as numbers if possible, else as strings
      const isNumA = !isNaN(Number(a));
      const isNumB = !isNaN(Number(b));
      if (isNumA && isNumB) {
        return groupAscending ? Number(a) - Number(b) : Number(b) - Number(a);
      }
      // Otherwise, compare as strings
      return groupAscending ? a.localeCompare(b) : b.localeCompare(a);
    }
  });

  // Sort each group by the specified property or by the length of the property
  const sortedGroups = sortedKeys.map((key) => {
    if (sortByLength) {
      return [...grouped[key]].sort((a, b) => {
        const lengthA =
          (a[sortByPropertyKey!] as unknown as string)?.length || 0;
        const lengthB =
          (b[sortByPropertyKey!] as unknown as string)?.length || 0;
        return sortAscending ? lengthA - lengthB : lengthB - lengthA;
      });
    } else if (sortByPropertyKey) {
      return [...grouped[key]].sort((a, b) => {
        const valueA = a[sortByPropertyKey];
        const valueB = b[sortByPropertyKey];

        // Check if the property is a date in the format YYYY-MM-DD
        if (
          typeof valueA === "string" &&
          typeof valueB === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueA) &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueB)
        ) {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          return sortAscending
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        }

        // Default sorting for non-date properties
        if (valueA < valueB) {
          return sortAscending ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortAscending ? 1 : -1;
        }
        return 0;
      });
    } else {
      return grouped[key]; // If no sortByPropertyKey is provided, return the group as is
    }
  });

  // Flatten the sorted groups back into a single array
  return sortedGroups.flat();
}