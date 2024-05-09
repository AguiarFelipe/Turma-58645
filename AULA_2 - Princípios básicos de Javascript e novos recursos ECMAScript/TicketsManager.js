class TicketManager{
    #basePrice;
    #events;

    constructor(basePrice){
        this.#basePrice = 200 + basePrice;
        this.#events = []
    }

    getEvents(){
        return this.#events;
    };

    addEvents(nome, lugar, preco=0, capacidade=50, data=new Date()){
        const id = this.#events.length+1;
        const participants=[];
        const event = {
            id,
            nome,
            lugar,
            preco:preco+this.#basePrice,
            capacidade,
            data,
            participants
        };
        this.#events.push(event);
    }

    addUser(eventId, userId){
        const event = this.#events.find(event=>event.id === eventId);
        if(!event){
            console.log('Evento não encontrado');
            return;
        }

        if(event.participants.includes(userId)){
            console.log("Participante já está cadastrado no evento");
            return;
        }

        event.participants.push(userId);
        console.log("Participante incluido com sucesso ao evento");
    }

    putEventoEmGira(eventId, newCity, newDate){
        const event = this.#events.find(event=>event.id === eventId);
        if(!event){
            console.log('Evento não encontrado');
            return;
        }

        const newEvent = {
            ...event,
            id: this.#events.length+1,
            lugar: newCity,
            data: newDate,
            participants:[]
        }

        this.#events.push(newEvent);
        console.log("Evento foi movido para o novo local com sucesso");
    }
}


const ticketManager = new TicketManager(0.15);

ticketManager.addEvents('Show do Metallica', 'Allianz Parque');
ticketManager.addEvents('Moto GP', 'Interlagos');

console.log(ticketManager.getEvents());

ticketManager.addUser(1, 'Marcelo');
ticketManager.addUser(2, 'Mariana');

ticketManager.putEventoEmGira(1, 'Campinas',  new Date('2024-10-15'));

console.log(ticketManager.getEvents());