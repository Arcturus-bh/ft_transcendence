import { Client } from "./client";


export class Room {
    clients: Set<Client>;

    constructor(client1: Client, client2 : Client) {
        this.clients.set(client1);
        this.clients.set(client2);
    }

    sendMessage(message: string) {
        // parse max size
        console.log(message);
    }

    blockClient(client: Client) {
        // on verra.
    }
}