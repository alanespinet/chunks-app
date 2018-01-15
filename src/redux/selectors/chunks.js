export default (chunks, filterLanguages, filterKeywords) => {

  let filtered = chunks.filter( (chunk) => {

    // if( filterLanguages.length === 0 && filterKeywords.length === 0 )
    //   return true;

    let langs = filterLanguages.length === 0;
    if(!langs){
      for( let i = 0; i < chunk.languages.length; i++ )
        for( let j = 0; j < filterLanguages.length; j++ )
          if( chunk.languages[i] === filterLanguages[j] )
            langs = true;
    }

    let keys = filterKeywords.length === 0;
    if(!keys){
      for( let i = 0; i < chunk.keywords.length; i++ )
        for( let j = 0; j < filterKeywords.length; j++ )
          if( chunk.keywords[i] === filterKeywords[j] )
            keys = true;
    }

    return (langs && keys);

  });

  // console.log(filtered);

  return filtered;
}
