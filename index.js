const prompt = require('prompt-sync')()

const exercios = {
    exerciosParaPeito: ["Flexões", "Flexão Diamante", "Dips", "Flexão Inclinada", "Flexão Archer", "Flexão Spiderman"],
    exerciosParaBraços: ["Tríceps banco", "Rosca com Garrafas", "Elevação lateral com Garrafas", "Prancha", "Flexão Pike"],
    exerciosParaCostas: ["Remada invertida (com toalha ou mesa)", "Superman", "Ponte glútea", "Alongamento gato-camelo", "Bird-Dog"],
    exerciosParaPernas: ["Agachamento", "Afundo", "Panturrilha", "Elevação de Quadril", "Cadeira Imaginária", "Step-up"]
}

function montarTreino(meta){
    let seriesPorExercios = meta === 1 ? 4 : 3
    let repeticoes = meta === 1 ? 10 : 8
    let dia1 = []
    let dia2 = []
    let dia3 = []

    if(meta === 1){
        let historico = []
        while(dia1.length < 4){
            let index = 0
            do{
                index = Math.floor(Math.random() * 5)
            }while(historico.includes(index))
            historico.push(index)
            dia1.push(exercios.exerciosParaPeito[index])
            dia1.push(exercios.exerciosParaBraços[index])
        }
        let historico2 = []
        while(dia2.length < 4){
            let index = 0
            do{
                index = Math.floor(Math.random() * 5)
            }while(historico2.includes(index))
            historico2.push(index)
            dia2.push(exercios.exerciosParaCostas[index])
            dia2.push(exercios.exerciosParaBraços[index])
        }
        let historico3 = []
        while(dia3.length < 4){
            let index = 0
            do{
                index = Math.floor(Math.random() * 5)
            }while(historico3.includes(index))
            historico3.push(index)
            dia3.push(exercios.exerciosParaPernas[index])
        }
        return {
            series: seriesPorExercios,
            repeticoes: repeticoes,
            exercios1: dia1,
            exercios2: dia2,
            exercios3: dia3, 
        }
    }else if(meta === 2){
        let historico = []
        while(dia1.length < 4){
            let index = 0
            do{
                index = Math.floor(Math.random() * 5)
            }while(historico.includes(index))
            historico.push(index)
            dia1.push(exercios.exerciosParaPeito[index])
            dia1.push(exercios.exerciosParaBraços[index])
        }
        let historico2 = []
        while(dia2.length < 4){
            let index = 0
            do{
                index = Math.floor(Math.random() * 5)
            }while(historico2.includes(index))
            historico2.push(index)
            dia2.push(exercios.exerciosParaCostas[index])
            dia2.push(exercios.exerciosParaBraços[index])
        }
        let historico3 = []
        while(dia3.length < 4){
            let index = 0
            do{
                index = Math.floor(Math.random() * 5)
            }while(historico3.includes(index))
            historico3.push(index)
            dia3.push(exercios.exerciosParaPernas[index])
        }
        return {
            series: seriesPorExercios,
            repeticoes: repeticoes,
            exercios1: dia1,
            exercios2: dia2,
            exercios3: dia3, 
        }
    }
}

console.log("Olá, hoje irei te ajudar a montar seu treino!")
let metaPessoal = parseInt(prompt("Qual sua meta? (1=Emagrecer, 2=Ganhar musculo) "))
console.log("Vamos Começar!")
const treino = montarTreino(metaPessoal)
console.log(`Esse é seu Treino!
    series para cada exercio: ${treino.series}
    repetiçoes para cada: ${treino.repeticoes}
    dia 1 (peito e braço): ${treino.exercios1}
    dia 2 (costa e braço): ${treino.exercios2}
    dia 3 (pernas): ${treino.exercios3}
    `)