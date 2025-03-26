class Notificiation {
    enviarNotif(mensagem){
        console.log(`Enviando notificação: ${mensagem}`);
    }
}

class NotificiationSMS extends Notificiation {
    enviarNotif(mensagem){
        console.log(`Enviando notificação SMS: ${mensagem}`);
    }
}

class NotificacaoEmail extends Notificiation {
    enviarNotif(mensagem){
        console.log(`Enviando notificação email: ${mensagem}`);
    }
}

class FactoryNotificacao extends Notificiation {
    static createNotificacao(tipo){
        switch(tipo){
            case 'SMS':
                return new NotificiationSMS();
            case 'EMAIL':
                return new NotificacaoEmail();
            default:
                return new Notificiation();
        }
    }
}

const notificacaoSMS = FactoryNotificacao.createNotificacao('SMS');
notificacaoSMS.enviarNotif('Testando notificação SMS');

const notificacaoEmail = FactoryNotificacao.createNotificacao('EMAIL');
notificacaoEmail.enviarNotif('Testando notificação email');

const notificacaoPadrao = FactoryNotificacao.createNotificacao();
notificacaoPadrao.enviarNotif('Testando notificação padrão');