const defaultState = {
  chunks: [{
    title: 'chunk one title',
    description: 'chunk one description',
    languages: ['L11', 'L12', 'L13'],
    keywords: ['K11', 'K12', 'K13'],
    code: 'chunk one code'
  }, {
    title: 'chunk two title',
    description: 'chunk two description',
    languages: ['L21', 'L22', 'L23'],
    keywords: ['K21', 'K22', 'K23'],
    code: 'chunk two code'
  }],

  selectedChunk: {
    title: 'selected chunk title',
    description: 'selected chunk description',
    languages: ['L1', 'L2', 'L3'],
    keywords: ['K1', 'K2', 'K3'],
    code: 'selected chunk code'
  }
}



export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'ADD_CHUNK':
      return {
        ...state,
        chunks: state.chunks.concat( action.chunk )
      }

    case 'DELETE_CHUNK':
      return {
        ...state,
        chunks: state.chunks.filter( (chunk) => chunk.title !== action.title )
      };
      break;

    case 'GET_CHUNK':
      return {
        ...state,
        selectedChunk: state.chunks.filter( (chunk) => chunk.title === action.title )[0]
      };
      break;

    case 'GET_CHUNKS':
      return state;

    default:
      return state;
  }
};
