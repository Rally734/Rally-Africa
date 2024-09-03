let availableKeywords = [
          'Gorilla mountain',
          '<a href="djmaa el fna.html">Djemma el fna</a>',
            '<a href="mount mulanje.html">Mount Mulanje</a>',
            'River Nile',
            'River Nile',
            'River Nile',
            'River Nile',
            'River Nile',
            'River Nile',
            'River Nile'

];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
          let result = [];
          let input = inputBox.value;
          if(input.length){
                    result = availableKeywords.filter((keyword)=>{
                     return keyword.toLowerCase().includes(input.toLowerCase());
                    });
                    console.log(result);
          }
          display(result);
}

function display(result){
  const content = result.map((list)=>{
       return "<li>" + list + "</li>";
  });

     resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

 function selectinput(list){
      inputBox.value = list.innerHTML;
      resultsBox.innerHTML = '';
 }

