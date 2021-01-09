import { Injectable, Inject } from '@nestjs/common';
import { PubSubEngine } from 'graphql-subscriptions';

import { PrismaService } from './prisma.service';
import { UserService } from './user.service';
import { Room, SubscriptionType } from '../graphql.typings';

@Injectable()
export class RoomService {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSubEngine,
    private readonly prisma: PrismaService,
    private readonly user: UserService,
  ) {}

  async create(): Promise<any> {
    const room = await this.prisma.room.create({
      data: {},
      include: { users: true },
    });
    return room;
  }

  async findUnique(roomId: string): Promise<any> {
    const room = await this.prisma.room
      .findUnique({
        where: { id: roomId },
      })
      .users();

    return room;
  }

  async findMany(): Promise<any> {
    const room = await this.prisma.room.findMany({
      include: { users: true },
    });

    return room;
  }

  async sendMessage(userId: string, message: string): Promise<any> {
    const user = await this.user.update(userId, message);

    this.pubSub.publish(SubscriptionType.ROOM_USERS, { roomUsers: user });

    return {
      response: 'Message sent successfully.',
    };
  }
}
