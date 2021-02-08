function sortWord(str){
    let word = str.split('')
    for (let i = word.length-1; i >= 0; i--) {
      for (let j = i; j >= 0; j--) {
        if (word[i] < word[j]) {
          let temp = word[i];
          word[i] = word[j];
          word[j] = temp;
        };
      };
    }
    return word
  }
  function groupAnagram (arr){
    const group = {}
    for(let i = 0; i < arr.length; i++){
      let flag = sortWord(arr[i]).join('')
      if(!group[flag]){
        group[flag] = [arr[i]]
      } else{
        group[flag].push(arr[i])
      }
    }
    return Object.values(group)
  }

  groupAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'])