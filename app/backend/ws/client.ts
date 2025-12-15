export class Client 
{
    id: number;
    nickname: string;
    // blocked: Set<number>;

    constructor(id: number, nickname: string) {
        this.nickname = nickname;
        this.id = id;
        // this.blocked.set("");
    }

    getNickname(): string {
        return this.nickname;
    }

    getId(): number {
        return this.id;
    }
}