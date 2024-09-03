let availableKeywords = [
          '<a href="bwindi impenetratable national park.html">Bwindi Impenetrable National Park</a>',
          '<a href="djmaa el fna.html">Djemma el fna</a>',
            '<a href="mount mulanje.html">Mount Mulanje</a>',
            '<a href="nile.html">River Nile</a>',
            '<a href="fish river canyon.html">Fish River Canyon</a>',
            '<a href="draa valley.html">Draa Valley</a>',
            '<a href="nyika plateau.html">Nyika Plateau</a>',
            '<a href="tablemountain.html">Table Mountain</a>',
            '<a href="The pyramid of giza.html">Pyramid Of Giza</a>',
            '<a href="spitzkoppe.html">Spitzkoppe</a>',
            '<a href="sossusvlei.html">Sossusvlei Dunes</a>',
            '<a href="sahara.html">Sahara Dunes</a>',
            '<a href="victoria-waterfall.html">Victoria Waterfalls</a>',
            '<a href="the great migration.html">The Great Migration</a>',
            '<a href="makgadikgadi pan.html">Makgadikgadi Pans</a>',
            '<a href="riding safari.html">Riding Safari</a>',
            '<a href="lower zambezi.html">Lower Zambezi</a>',
            '<a href="bazaruto archipelago.html">Bazaruto Archipelago</a>',
            '<a href="nxai pan national park.html">Nxai Pan</a>',
            '<a href="cape verde.html">Cape verde Archipelago</a>',
            '<a href="lake nakuru national park.html">Lake Nakuru</a>', 
            '<a href="volcanoes national park.html">Volcanoes National Park</a>', 
            '<a href="virunga national park.html">Virunga Park</a>', 
            '<a href="queen elizabeth national park.html">Queen Elizabeth park</a>', 
            '<a href="lake malawi.html">Lake malawi</a>', 
            '<a href="mount kilimanjaro.html">Mount Kilimanjaro</a>', 
            '<a href="solio game reserve.html">Solio Game Reserve</a>', 
            '<a href="lekki conservation center.html">Lekki Conservation Center</a>', 
            '<a href="lake retba.html">Lake Retba</a>', 
            '<a href="liwonde national park.html">Liwonde National Park</a>', 
            '<a href="african renaissance monument.html">African Renaissance Monument</a>', 
            '<a href="nzulezo.html">Nzulezo Village</a>',
            '<a href="kruger national park.html">Kruger National Park</a>',
            '<a href="Mount Sinai.html">Mount Sinai</a>',
            '<a href="ngorongoro conservation center.html">Ngorongoro Conservation Area</a>',
            '<a href="cape wineland.html">Cape Wineland</a>',
            '<a href="dakar.html">Dakar</a>',
            '<a href="gondar.html">Gondar</a>',
            '<a href="Simien Mountains.html">Simien Mountains</a>',
            '<a href="la digue.html">La Digue</a>',
            '<a href="timbuktu.html">Timbuktu</a>',
            '<a href="blue nile fall.html">Blue Nile Falls</a>',
            '<a href="sousse.html">Sousse</a>',
            '<a href="zanzibar archipelago.html">Zanzibar Archipelago</a>',
            '<a href="Yankari National Park.html">Yankari National Park</a>',
            '<a href="nosy be.html">Nosy Be</a>',
            '<a href="tsavo national park.html">Tsavo National Park</a>',
            '<a href="cape coast.html">Cape Coast</a>',
            '<a href="tunis medina.html">Tunis Medina</a>',
            '<a href="namaqualand.html">Namaqualand</a>',
            '<a href="Blyde river canyon.html">Blyde River Canyon</a>',
            '<a href="mount cameroon.html">Mount Cameroon</a>',
            '<a href="addis ababa.html">Addis Ababa</a>',
            '<a href="amboseli national park.html">Amboseli National Park</a>',
            '<a href="comoros archipelago.html">Comoros Archipelago</a>',
            '<a href="lalibela.html">Lalibela</a>',
            '<a href="The red sea.html"> Red Sea </a>',
            '<a href="ponta do ouro.html"> Ponta do ouro </a>',
            '<a href="drakensberg mountains.html"> Drakensberg Mountains </a>',
            '<a href="tsingy de bemaraha.html"> Tsingy de Bemaraha </a>',
            '<a href="okavango delta.html"> Okavango Delta </a>',
            '<a href="kidepo valley national park.html"> Kidepo valley National Park </a>',
            '<a href="kigali.html"> Kigali </a>',
            '<a href="tswalu kalahari.html"> Tswalu Kalahari Reserve</a>',
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

