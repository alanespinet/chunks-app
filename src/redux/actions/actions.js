import { database } from '../../firebase/firebase';
const usersdb = database.ref().child('users');

export const startAddChunk = ( chunk ) => {
  return (dispatch, getState) => {
    const uid = getState().authReducer.uid;
    const chunk_id = chunk.chunk_id;
    const chunkRest = {
      title: chunk.title,
      description: chunk.description,
      languages: chunk.languages,
      keywords: chunk.keywords,
      code: chunk.code
    };

    usersdb.child(`${uid}/chunks/${chunk_id}`).set(chunkRest).then( () => {
      dispatch( addChunk({
        chunk_id: chunk.chunk_id,
        ...chunk
      }) );
    });
  }
};

export const addChunk = ( chunk ) => ({
  type: 'ADD_CHUNK',
  chunk
});


export const getChunks = () => ({
  type: 'GET_CHUNKS'
});


export const startSetChunks = () => {
  return (dispatch, getState) => {
    const uid = getState().authReducer.uid;
    return usersdb.child(`${uid}/chunks`).once('value').then( (snapshot) => {
      let chunks = [];

      snapshot.forEach( (childSnapshot) => {
        chunks.push({
          chunk_id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      console.log(chunks);
      dispatch( setChunks(chunks) );
    });
  }
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
  return (dispath, getState) => {
    const uid = getState().authReducer.uid;
    return usersdb.child(`${uid}/chunks`).child(id).remove().then( () => {
      dispath( deleteChunk(id) );
    });
  }
}


export const deleteChunk = ( id ) => ({
  type: 'DELETE_CHUNK',
  id
});
