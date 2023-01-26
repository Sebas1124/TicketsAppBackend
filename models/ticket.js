const { v4: uuidv4 } = require('uuid')

class Ticket {

    constructor( numero ) {
        this.id         = uuidv4();
        this.numero     = numero;
        this.escritorio = null;
        this.category   = null;
        this.paciente   = null;
        this.status     = 'En Sala';
        this.agente     = null;
    }

}

module.exports = Ticket;