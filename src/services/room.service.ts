import { Injectable, ConflictException } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { Room } from '../graphql.typings';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async create(): Promise<any> {
    const room = await this.prisma.room.create({
      data: {},
      include: { users: true },
    });
    return room;
  }

  async findMany(): Promise<any> {
    const room = await this.prisma.room.findMany({
      include: { users: true },
    });

    return room;
  }
}
