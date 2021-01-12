import { Injectable, Inject } from '@nestjs/common';
import { PubSubEngine } from 'graphql-subscriptions';

import { PrismaService } from './prisma.service';
import { User, SubscriptionType } from '../graphql.typings';

@Injectable()
export class UserService {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSubEngine,
    private readonly prisma: PrismaService,
  ) {}

  async create(roomId: string, name: string): Promise<any> {
    const user = await this.prisma.user.create({
      data: {
        room: {
          connect: { id: roomId },
        },
        name,
      },
      include: { room: true },
    });

    this.pubSub.publish(SubscriptionType.ROOM_USERS, { roomUsers: user });

    return user;
  }

  async update(
    userId: string,
    message: string,
    positionX: number,
    positionY: number,
  ): Promise<any> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        lastMessage: message !== null ? message : undefined,
        positionX: positionX !== null ? positionX : undefined,
        positionY: positionY !== null ? positionY : undefined,
      },
    });

    this.pubSub.publish(SubscriptionType.ROOM_USERS, { roomUsers: user });

    return user;
  }
}
