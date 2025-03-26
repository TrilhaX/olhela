class Hambuerguer {
    constructor(pao, carne, queijo, salada, molho){
        this.pao = pao;
        this.carne = carne;
        this.queijo = queijo;
        this.salada = salada;
        this.molho = molho;
    }
    getDesc(){
        return `Hambuerguer: ${this.pao}, ${this.carne}, ${this.queijo}, ${this.salada}, ${this.molho}`;
    }
}

const comida = new Hambuerguer(
    'Brioche',
    'Hamburguer',
    'Mussarela',
    'Tomate',
    'Maionesse'
)

console.log(comida.getDesc());

class HambuerguerBuilder{
    constructor(){
        this.pao = 'tradicional';
        this.carne = 'bovina';
        this.queijo = 'mussarela';
        this.salada = true;
        this.molho = 'Ketchup';
    }
    setPao(pao){
        this.pao = pao;
        return this;
    }
    setCarne(carne){
        this.carne = carne;
        return this;
    }
    setQueijo(queijo){
        this.queijo = queijo;
        return this;
    }
    setSalada(salada){
        this.salada = salada;
        return this;
    }
    setMolho(molho){
        this.molho = molho;
        return this;
    }
    addSalada(){
        this.salada = true;
        return this;
    }
}

const builder = new HambuerguerBuilder();
builder.setPao('Brioche')
builder.setCarne('Hamburguer')
console.log(builder);