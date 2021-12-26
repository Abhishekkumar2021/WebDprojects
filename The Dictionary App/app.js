const word = document.querySelector('.word .content');
const pronounciation = document.querySelector('.audio .content');
const origin = document.querySelector('.origin .content');
const partOfSpeech = document.querySelector('.part-of-speech .content');
const definition = document.querySelector('.definition .content');
const antonyms = document.querySelector('.antonyms .content');
const synonyms = document.querySelector('.synonyms .content');
const search = document.querySelector('.search i');
const input = document.querySelector('nav input')
const examples = document.querySelector('.example .content')
const content = document.querySelectorAll('.content');
search.addEventListener('click',async ()=>{
    for(let conten of content){
         conten.innerHTML = '';
     }
    if(input.value){
       const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
       const data = response.data[0];
       if(data.word){
          word.innerHTML = data.word;
       }
       if(data.phonetics[0].text){
           const audio = data.phonetics[0].audio;
           pronounciation.innerHTML = ` <audio controls
                     src="${audio}"></audio>`
      
       }
       if(data.origin){
           origin.innerHTML = data.origin;
       }
      if(data.meanings[0]){
         const POS_DEF = data.meanings[0];
        
         if(POS_DEF.partOfSpeech){
             partOfSpeech.innerHTML = POS_DEF.partOfSpeech;
         }
         const def = POS_DEF.definitions;
         if(def){
              for(let defi of def){
                  const li = document.createElement('li');
                  li.innerHTML = defi.definition;
                  definition.append(li);
                   const synon =  defi.synonyms;
                 
                  for(let syn of synon){
                      const li = document.createElement('li');
                      li.innerHTML = syn;
                       synonyms.append(li);
                  }
                  const anton = defi.antonyms;
                   for(let ant of anton){
                      const li = document.createElement('li');
                      li.innerHTML = ant;
                       antonyms.append(li);
                  }
                  if(defi.example){
                    const item = document.createElement('li');
                    item.innerHTML = defi.example;
                    examples.append(item);
                  
                  }
                  
              }
             
         }
         
        
      }
    }

  
})
