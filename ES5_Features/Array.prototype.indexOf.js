// Returns the index if found, else returns -1, takes an optional starting index. 
// The search will start at the specified position, or at the beginning if no start position is specified, 
// and end the search at the end of the array.

// If the item is present more than once, the indexOf method returns the position of the first occurence.

// Note: The first item has position 0, the second item has position 1, and so on.

// Tip: If you want to search from end to start, use the lastIndexOf() method

var name = 'Akansha Wajge';
name.indexOf('Wajge'); //8 
name.indexOf('Akansha', 7); //-1