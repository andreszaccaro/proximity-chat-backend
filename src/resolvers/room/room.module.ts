import { Module } from '@nestjs/common';

import { PubSubModule } from '../pubSub/pubSub.module';
import { UserModule } from '../user/user.module';
import { PrismaService } from '../../services/prisma.service';
import { RoomService } from '../../services/room.service';
import { RoomResolver } from './room.resolver';

@Module({
  imports: [PubSubModule, UserModule],
  providers: [RoomService, RoomResolver, PrismaService],
})
export class RoomModule {}
