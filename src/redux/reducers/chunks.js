const defaultState = {
  chunks: [],

  selectedChunk: {
    id: '0',
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
        chunks: state.chunks.filter( (chunk) => chunk.chunk_id !== action.id )
      };
      break;

    case 'GET_CHUNK':
      return {
        ...state,
        selectedChunk: state.chunks.filter( (chunk) => chunk.chunk_id === action.id )[0]
      };
      break;

    case 'SET_CHUNKS':
      return {
        ...state,
        chunks: action.chunks
      };
      break;

    case 'GET_CHUNK_BY_ID':
      return {
        ...state,
        selectedChunk: state.chunks.filters( (chunk) => chunk.id === action.id )[0]
      };
      break;

    case 'GET_CHUNKS':
      return state;

    default:
      return state;
  }
};
