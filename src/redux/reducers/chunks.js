const defaultState = {
  chunks: [{
    id: '1',
    title: 'chunk one title',
    description: 'chunk one description',
    languages: ['L11', 'L12', 'L13'],
    keywords: ['K11', 'K12', 'K13'],
    code: 'chunk one code'
  }, {
    id: '2',
    title: 'chunk two title',
    description: 'chunk two description',
    languages: ['L21', 'L22', 'L23'],
    keywords: ['K21', 'K22', 'K23'],
    code: 'chunk two code'
  }, {
    id: '3',
    title: 'chunk three title chunk three title',
    description: 'chunk three description',
    languages: ['PHP', 'JavaScript', 'HTML5', 'CSS'],
    keywords: ['K21', 'K22', 'K23'],
    code: 'chunk three code'
  }, {
    id: '4',
    title: 'chunk four title',
    description: 'chunk four description',
    languages: ['L21', 'L22', 'L23'],
    keywords: ['K21', 'K22', 'K23'],
    code: 'chunk four code'
  }, {
    id: '5',
    title: 'chunk five title',
    description: 'chunk five description',
    languages: ['L21', 'L22', 'L23'],
    keywords: ['K21', 'K22', 'K23'],
    code: 'chunk five code'
  }, {
    id: '6',
    title: 'chunk six title',
    description: 'chunk six description',
    languages: ['L21', 'L22', 'L23'],
    keywords: ['K21', 'K22', 'K23'],
    code: 'chunk six code'
  }, {
    id: '6',
    title: 'chunk seven title',
    description: 'chunk seven description',
    languages: ['L21', 'L22', 'L23'],
    keywords: ['K21', 'K22', 'K23'],
    code: 'chunk seven code'
  }],

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
        chunks: state.chunks.filter( (chunk) => chunk.title !== action.title )
      };
      break;

    case 'GET_CHUNK':
      return {
        ...state,
        selectedChunk: state.chunks.filter( (chunk) => chunk.title === action.title )[0]
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
