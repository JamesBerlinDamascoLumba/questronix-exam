class SearchService {
  static find(word, words) {
    let first = 0;
    let last = words.length - 1;

    while(first <= last) {
      const midpoint = Math.floor((first + last) / 2);

      if(word.toUpperCase() === words[midpoint]) {
        return words[midpoint];
      }
      if(word.toUpperCase() > words[midpoint]) {
        first = midpoint + 1;
      }
      if(word.toUpperCase() < words[midpoint]) {
        last = midpoint - 1;
      }
    }
  }
}

export default SearchService;
