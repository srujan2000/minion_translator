// var rs = require('readline-sync')
// const fetch = require('node-fetch')

// var name = rs.question("Enter any text: ")

// var url = 'https://api.funtranslations.com/translate/minion.json?text='+name;

// fetch(url).then(response => response.json()).then(json => console.log("Morse Code : " + json['contents']['translated']))


document.querySelector('#translate').addEventListener('click',translate);



function translate(){
    let input = document.querySelector('.text').value
    let output = document.querySelector('.minion')
    
    if(input === ''){
        alert('Enter the any text')
    }
    else{
       var url = 'https://api.funtranslations.com/translate/minion.json?text='+input;
      fetch(url).
      then(response => response.json()).
      then(json => output.value = json['contents']['translated'] )


    }
}