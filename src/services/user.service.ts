import { Injectable, ConflictException } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { User } from '../graphql.typings';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

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

    return user;
  }
}
