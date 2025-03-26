class Loja {
    constructor (){
        this.assinantes = []
    }
    assinar(usuario){
        this.assinantes.push(usuario)
    }
    cancelarAssinatura(usuario){
        //calma la paezao
    }
    notificar(novaMSG){
        this.assinantes.forEach(assinante => assinante.update(novaMSG))
    }
}

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    update(novaMSG){
        console.log(`Nova mensagem recebida: ${novaMSG}`)
    }
}

const Loja2 = new Loja()
const pessoa = new Pessoa('Viado Do Pedro Paulo')
Loja2.assinar(pessoa)
pessoa.update('Nova mensagem recebida')
Loja2.notificar("Pedro você esta sendo multado por ser muito viado, ta superando o luiz")