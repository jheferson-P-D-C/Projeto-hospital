function constar(){

    // Localizando as variavel

    var peso = document.querySelector("input#peso")
    var altura = document.querySelector("input#altura")
    var res = document.querySelector("p#res")
    var divres = document.querySelector("div#divres")

    // Transformando em Numero

    var peso = Number(peso.value)
    var altura = Number(altura.value)

    // Erro

    if(peso == 0 || altura == 0){
        window.alert("[ERRO]")
        peso ++
        altura ++
        res.innerHTML = "Coloque algum numero"

    }

    // Calculo do IMC
    var calculo1 = altura*altura
    var calculo = peso/calculo1


    if(calculo > 0 && calculo <= 12.5){

        // Tempo de espera

        setTimeout(function(){ 
            res.innerHTML = "Espere 3 segundos..."
        }, 1000)
        setTimeout(function(){
        res.innerHTML = "Espere 2 segundos..."
        }, 2000)
        setTimeout(function(){
            res.innerHTML = "Espere 1 segundo..."
        }, 3000)

        // Resultado

        setTimeout(function(){
            res.innerHTML = "Tempo para fazer uma refeição !"
            divres.style.background = 'blue'
            res.innerHTML += `<br>Você esta com o IMC de ${calculo} `
            
        },4000)
    }else if(calculo <= 20.5){
        
        // Tempo de espera
        
        setTimeout(function(){
            res.innerHTML = "Espere 3 segundos..."
        }, 1000)
        setTimeout(function(){
            res.innerHTML = "Espere 2 segundos..."
        }, 2000)
        setTimeout(function(){
            res.innerHTML = "Espere 1 segundo..."
        }, 3000)

        // Resultado

        setTimeout(function(){
            
            res.innerHTML = "Boa forma, continue !"
            divres.style.background = 'green'
            res.innerHTML += `<br>Você esta com o IMC de ${calculo} `
        }, 4000)
    }else{

        // Tempo de espera

        setTimeout(function(){
            res.innerHTML = "Espere 3 segundos..."
        }, 1000)
        setTimeout(function(){
        res.innerHTML = "Espere 2 segundos..."
        }, 2000)
        setTimeout(function(){
            res.innerHTML = "Espere 1 segundo..."
        }, 3000)
        
        // Resultado

        setTimeout(function(){
            
            res.innerHTML = "Tempo para fazer uma caminhada, começando a ficar obso..."
            divres.style.background = 'orange'
            res.innerHTML += `<br>Você esta com o IMC de ${calculo} `
        }, 4000)
    }
}