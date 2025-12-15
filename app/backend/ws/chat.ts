import { Client } from "./client";
import { Room } from "./room";


class Chat 
{
    nextClientId: number;

    clients: Map<number, Client>;  // list of users connected to transcendence
    rooms: Map<number, Room>;      // list of dm opened

    constructor() {
        this.nextClientId = 0;

        this.clients = new Map();
        this.rooms = new Map();
    }

    addClient(nickname: string) {
        const id = this.nextClientId++;
        const client = new Client(id, nickname);
        this.clients.set(id, client);

        // for websocket
        return id;
    }

    addRoom() {

    }

    removeClient(id: number) {
        this.broadcastClientOut(id);
        this.clients.delete(id);
    }

    broadcastClientIn(id: number) {
        const nick = this.getClientNick(id);
        if (!nick)
            return;
    
        console.log(`${nick} is connected.\n`);
    }

    broadcastClientOut(id: number) {
        const nick = this.getClientNick(id);
        if (!nick)
            return;

        console.log(`${nick} is disconnected.\n`);
    }

    broadcastSystem(message: string) {
        for (const room of this.rooms.values())
            room.broadcast(message);
    }

    // used for show which is connected on transcendence
    displayClientsNicks() {
        for (const client of this.clients.values())
            console.log(client.getNickname());
    }

    isClientConnected(id: number): boolean {
        return this.clients.has(id);
    }

    getClientNick(id: number): string | undefined {
        const client = this.clients.get(id);

        // if client exist, then return this nick, otherwise return 'undefined'
        return client?.getNickname();
    }
}