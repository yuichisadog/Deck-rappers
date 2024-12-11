let cartas = []

fetch('http://127.0.0.1:3000/cartas.json')
  .then(function(resposta){
     objetoArray = resposta.json()
     return objetoArray
  })
  .then(function(objetoArray){
    cartas = objetoArray
    montaDeck()
  })

function montaDeck() {
cartas.forEach(umaCarta => 
  {
      // 1. Criar carta
      const carta = document.createElement('article')
      // 2. Atribuir class css dela
      carta.className = 'card'     

      // 3. Gerar o inner HTML da carta
      const innerHTMLCarta = `
      
        <div 
          class="card-image" 
          style="background-image: url('${umaCarta.imagem}');"
          >
        
        </div>
        <div class="card-content">
            
          <h2 class="card-title">${umaCarta.nome}</h2>
          
          <p class="card-type">Tipo - Subtipo
            Habilidade: ${umaCarta.texto}
          

          </p>
          <p class="card-mana-cost">{1}{U}{B} - LENDARIA ⭐⭐⭐⭐⭐</p>  
        </div>`






           //3.1. Atribuimos ele ao elemento article (card)
           carta.innerHTML = innerHTMLCarta;
    
           //4. Adiciona a carta à section .deck
           document.querySelector("#deck")
               .appendChild(carta)
       }
   )
}