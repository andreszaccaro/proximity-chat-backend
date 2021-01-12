
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum SubscriptionType {
    ROOM_USERS = "ROOM_USERS",
    NEW_ROOM = "NEW_ROOM"
}

export class Response {
    response?: string;
}

export class Room {
    id: string;
    name: string;
    users?: User[];
}

export abstract class IQuery {
    abstract room(roomId: string): User[] | Promise<User[]>;

    abstract rooms(): Room[] | Promise<Room[]>;
}

export abstract class IMutation {
    abstract createRoom(): Room | Promise<Room>;

    abstract createUser(roomId: string, name: string): User | Promise<User>;

    abstract updateUser(userId: string, message?: string, positionX?: number, positionY?: number): User | Promise<User>;
}

export abstract class ISubscription {
    abstract roomUsers(roomId: string): User | Promise<User>;

    abstract newRoom(): Room | Promise<Room>;
}

export class User {
    id: string;
    room: Room;
    name?: string;
    positionX: number;
    positionY: number;
    lastMessage?: string;
}
