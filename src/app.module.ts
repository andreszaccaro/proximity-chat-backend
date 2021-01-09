import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { PubSubModule } from './resolvers/pubSub/pubSub.module';
import { RoomModule } from './resolvers/room/room.module';
import { UserModule } from './resolvers/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      typePaths: ['src/**/*.graphql'],
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req }),
    }),
    RoomModule,
    UserModule,
  ],
  controllers: [],
  providers: [PubSubModule],
})
export class AppModule {}
