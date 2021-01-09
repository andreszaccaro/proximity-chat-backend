
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum SubscriptionType {
    ROOM_USERS = "ROOM_USERS"
}

export class Response {
    response?: string;
}

export class Room {
    id: string;
    users?: User[];
}

export abstract class IQuery {
    abstract rooms(): Room[] | Promise<Room[]>;
}

export abstract class IMutation {
    abstract createRoom(): Room | Promise<Room>;

    abstract sendMessage(userId: string, message: string): Response | Promise<Response>;

    abstract createUser(roomId: string, name: string): User | Promise<User>;
}

export abstract class ISubscription {
    abstract roomUsers(roomId: string): Room | Promise<Room>;
}

export class User {
    id: string;
    room: Room;
    name?: string;
    lastMessage?: string;
}
