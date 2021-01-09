import { Module } from '@nestjs/common';

import { PubSubModule } from '../pubSub/pubSub.module';
import { PrismaService } from '../../services/prisma.service';
import { UserService } from '../../services/user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [PubSubModule],
  providers: [UserService, UserResolver, PrismaService],
  exports: [UserService],
})
export class UserModule {}
