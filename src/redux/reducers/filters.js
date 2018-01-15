const defaultFiltersState = {
  languages: [],
  keywords: []
};

export default ( state = defaultFiltersState, action ) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        languages: action.languages,
        keywords: action.keywords
      };

    default:
      return state;
  }
}
