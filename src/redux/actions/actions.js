export const addChunk = ( chunk ) => ({
  type: 'ADD_CHUNK',
  chunk
});


export const getChunks = () => ({
  type: 'GET_CHUNKS'
});


export const getChunk = ( title ) => ({
  type: 'GET_CHUNK',
  title
});


export const getChunkById = ( id ) => ({
  type: 'GET_CHUNK_BY_ID',
  id
});


export const deleteChunk = ( title ) => ({
  type: 'DELETE_CHUNK',
  title
});
