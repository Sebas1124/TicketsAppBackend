const Ticket = require('./ticket');


class TicketList {

    constructor() {
        this.counter = 0;
        this.ultimoNumero   = null;
        this.category       = null;
        this.paciente       = null;

        this.pendientes = [];
        this.asignados = [];
    }

    siguienteNumero( data )
    {
        this.ultimoNumero = `${data.category}${this.counter++}`
        return this.ultimoNumero;
    }

    //3 que se verán en las tarjetas y 10 en el historial
    get Ultimos13(){
        return this.asignados.slice(0,13);
    }

    crearTicket( data ){
  
        const nuevoTicket = new Ticket( this.siguienteNumero( data ) );

        nuevoTicket.paciente = data.paciente;
        nuevoTicket.category = data.category;

        this.pendientes.push( nuevoTicket );

        return nuevoTicket;
    }

    asignarTicket( agente, escritorio ) {

        if ( this.pendientes.length === 0) {
            return null;
        }

        const siguienteTicket = this.pendientes.shift();

        siguienteTicket.agente = agente
        siguienteTicket.escritorio = escritorio

        this.asignados.unshift( siguienteTicket );

        return siguienteTicket;
    }

}

module.exports = TicketList;