let resou = document.getElementById('resou');
    let quz = document.querySelectorAll('.quz');
    let verifie = document.getElementById('verifie');
    let oui = document.getElementById('oui');
    let non = document.getElementById('non');
    let uhum = document.querySelector('.uhum')
    let categor = document.getElementById('categor')
    let yes = 0;
    let no = 0;
   
    
    demarre();
    

   
        const quest = document.querySelector('.quest');
        quest.classList.remove('hidden');
        uhum.classList.add('hidden');
    

   function demarre() {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(reponse => reponse.json())
    .then(reponse => {
     

        for(i = 0; i < 4; i++){
            quz[i].textContent='';
            quz[i].style.backgroundColor = 'white';
            quz[i].style.display = 'block'
        }
        
        if(!(localStorage.ouioui && localStorage.nonnon)){
            localStorage.ouioui = 0;
            localStorage.nonnon = 0
        } else{
            oui.textContent = localStorage.ouioui;
            non.textContent = localStorage.nonnon
        }
        console.log(reponse.results[0].categor);
        console.log(reponse.results[0].difficulty);
        console.log(reponse.results[0].incorrect_answers.length);
       
  

        resou.textContent = reponse.results[0].question;
        categor.textContent = reponse.results[0].categor;

        n = reponse.results[0].incorrect_answers.length === 3 ? 4 : 2;
        
        
   
        bonne = Math.floor(Math.random()*n);
        quz[bonne].textContent = reponse.results[0].correct_answer;

        console.log('la bonne reponse: ' + reponse.results[0].correct_answer);
        console.log(localStorage)
      
       
        let j = 0;
        for(let i = 0; i < n; i++){

            if(i != bonne){
                    quz[i].textContent = reponse.results[0].incorrect_answers[j];
                    j++;
            }
        }   
   
            if(n == 2){
                    quz[3].style.display = 'none';
                    quz[2].style.display = 'none';
        }

    
    quz.forEach(qcm => qcm.addEventListener('click', (e) => {
     e.stopImmediatePropagation(); 
        if(e.target.textContent == reponse.results[0].correct_answer){
                        
                        localStorage.ouioui++;
                        
                        console.log(e.target.textContent);
                        
                        console.log(localStorage) 
                        
     
                } 
                else if(e.target.textContent != reponse.results[0].correct_answer){ 
                    console.log(e.target.textContent);
                        localStorage.nonnon++;
                       
                        console.log(localStorage)
         
                       
                      }

                    })
                )
                quest.classList.add('hidden');
                for(m of quz){
            uhum.classList.remove('hidden');
        }

    })  

}

function reset() {
    localStorage.clear();
    localStorage.ouioui = 0;
    localStorage.nonnon = 0;
    oui.textContent = 0;
    non.textContent = 0;
    yes = 0; no = 0;
    window.location.reload()
}
function reload() {
    window.location.reload()
    oui.textContent = localStorage.ouioui
    non.textContent = localStorage.nonnon 
   
   }
  