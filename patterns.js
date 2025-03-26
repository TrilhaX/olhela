// Padrão Adapter
// O Adapter permite que interfaces incompatíveis trabalhem juntas.
// Ele atua como uma ponte entre duas interfaces que não foram projetadas para se comunicar diretamente.

function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

function calcularAreaQuadrado(lado) {
    // Adaptador que converte o lado do quadrado em raio equivalente de um círculo
    const raioEquivalente = lado * Math.sqrt(2) / 2;
    return calcularAreaCirculo(raioEquivalente);
}

console.log(calcularAreaQuadrado(4)); // Saída: 12.566370614359172

// Padrão Decorator
// O Decorator permite adicionar funcionalidades a um objeto dinamicamente sem modificar sua estrutura original.

function enviarMensagem(mensagem) {
    console.log(`Enviando mensagem: ${mensagem}`);
}

function comCriptografia(func) {
    return function (mensagem) {
        const mensagemCriptografada = `**${mensagem}**`; // Simulação de criptografia
        func(mensagemCriptografada);
    };
}

function comCompressao(func) {
    return function (mensagem) {
        const mensagemComprimida = mensagem.slice(0, 5); // Simulação de compressão
        func(mensagemComprimida);
    };
}

const enviarMensagemSegura = comCriptografia(comCompressao(enviarMensagem));
enviarMensagemSegura('Olá, mundo!'); // Saída: Enviando mensagem: **Olá, **

// Padrão Chain of Responsibility
// Permite que um pedido seja passado por uma cadeia de handlers até que um deles o processe.

class Handler {
    setProximo(proximo) {
        this.proximo = proximo;
        return proximo;
    }

    handle(pedido) {
        if (this.proximo) {
            return this.proximo.handle(pedido);
        }
        return null;
    }
}

class SuporteBasico extends Handler {
    handle(pedido) {
        if (pedido.tipo === 'simples') {
            console.log('Suporte Básico resolveu o problema.');
        } else {
            super.handle(pedido);
        }
    }
}

class SuporteAvancado extends Handler {
    handle(pedido) {
        if (pedido.tipo === 'complexo') {
            console.log('Suporte Avançado resolveu o problema.');
        } else {
            super.handle(pedido);
        }
    }
}

const suporteBasico = new SuporteBasico();
const suporteAvancado = new SuporteAvancado();
suporteBasico.setProximo(suporteAvancado);

const pedido = { tipo: 'complexo' };
suporteBasico.handle(pedido); // Saída: Suporte Avançado resolveu o problema.

// Padrão Iterator
// Fornece um método para acessar elementos de uma coleção sequencialmente sem expor sua estrutura interna.

class Iterador {
    constructor(colecao) {
        this.colecao = colecao;
        this.indice = 0;
    }

    temProximo() {
        return this.indice < this.colecao.length;
    }

    proximo() {
        return this.temProximo() ? this.colecao[this.indice++] : null;
    }
}

const numeros = [1, 2, 3, 4, 5];
const iterador = new Iterador(numeros);

while (iterador.temProximo()) {
    console.log(iterador.proximo()); // Saída: 1 2 3 4 5
}
