import axios from 'axios';


export const startAddChunk = ( chunk ) => {

  console.log(JSON.stringify(chunk));

  return (dispatch) => {
    axios.post('https://chunksdbserver.herokuapp.com/chunks', chunk)
      .then( (response) => {
        console.log(response);
        dispatch( addChunk(response.data) );
      })
      .catch( (e) => {
        console.log(e.response);
      });
  };
};

export const addChunk = ( chunk ) => ({
  type: 'ADD_CHUNK',
  chunk
});


export const getChunks = () => ({
  type: 'GET_CHUNKS'
});


export const startSetChunks = () => {
  return (dispatch) => {
    return axios.get('https://chunksdbserver.herokuapp.com/chunks')
      .then( (response) => {
        dispatch( setChunks(response.data) );
      });
  };
}

export const setChunks = (chunks) => ({
  type: 'SET_CHUNKS',
  chunks
});


export const getChunk = ( id ) => ({
  type: 'GET_CHUNK',
  id
});


export const getChunkById = ( id ) => ({
  type: 'GET_CHUNK_BY_ID',
  id
});


export const startDeleteChunk = ( id ) => {
  return (dispatch) => {
    axios.delete(`https://chunksdbserver.herokuapp.com/chunks/${id}`)
      .then( (response) => {
        dispatch(deleteChunk(response.data.chunk_id));
      });
  };
}


export const deleteChunk = ( id ) => ({
  type: 'DELETE_CHUNK',
  id
});
