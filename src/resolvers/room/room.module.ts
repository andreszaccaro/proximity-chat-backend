import { Module } from '@nestjs/common';

import { PrismaService } from '../../services/prisma.service';
import { RoomService } from '../../services/room.service';
import { RoomResolver } from './room.resolver';

@Module({
  providers: [RoomService, RoomResolver, PrismaService],
})
export class RoomModule {}
