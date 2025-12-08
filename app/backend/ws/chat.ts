import { Client } from "./client";
import { Room } from "./room";


class Chat 
{
    clients: Map<string, Client>;
    // rooms: Map<string, Room>;

    constructor() {
        this.clients = new Map();
        // this.rooms = new Map();
    }

    addClient(clientName: string) {
        const client: Client = new Client(clientName);
        this.clients.set(clientName, client);
    }

    removeClient(clientName: string) {
        this.clients.delete(clientName);
        this.broadcastClientOut(clientName);
    }

    broadcastClientIn(clientName: string) {
        console.log("${clientName} is connected.\n");
    }

    broadcastClientOut(clientName: string) {
        console.log("${clientName} is disconnected.\n");
    }

    broadcastSystem(message: string) {
        console.log(message);
    }
}