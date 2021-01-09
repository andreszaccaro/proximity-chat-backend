import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Subscription, Args } from '@nestjs/graphql';
import { PubSubEngine } from 'graphql-subscriptions';

import { RoomService } from '../../services/room.service';
import { SubscriptionType } from '../../graphql.typings';

@Resolver('Room')
export class RoomResolver {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSubEngine,
    private room: RoomService,
  ) {}

  @Query()
  rooms(): Promise<any> {
    return this.room.findMany();
  }

  @Mutation()
  createRoom(): Promise<any> {
    return this.room.create();
  }

  @Mutation()
  async sendMessage(
    @Args() userId: string,
    @Args() message: string,
  ): Promise<any> {
    return this.room.sendMessage(userId, message);
  }

  @Subscription('roomUsers', {
    filter: (payload, variables) =>
      payload.roomUsers.user.room.id === variables.roomId,
  })
  roomUsers() {
    return this.pubSub.asyncIterator(SubscriptionType.ROOM_USERS);
  }
}
