import { Injectable, Inject } from '@nestjs/common';
import { PubSubEngine } from 'graphql-subscriptions';
import { uniqueNamesGenerator, colors, animals } from 'unique-names-generator';

import { PrismaService } from './prisma.service';
import { UserService } from './user.service';
import { Room } from '../graphql.typings';

@Injectable()
export class RoomService {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSubEngine,
    private readonly prisma: PrismaService,
    private readonly user: UserService,
  ) {}

  async create(): Promise<any> {
    const randomName: string = uniqueNamesGenerator({
      dictionaries: [colors, animals],
    });

    const room = await this.prisma.room.create({
      data: {
        name: randomName,
      },
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
}
