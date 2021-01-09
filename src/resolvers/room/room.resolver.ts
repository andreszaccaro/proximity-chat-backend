import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { RoomService } from '../../services/room.service';

@Resolver('Room')
export class RoomResolver {
  constructor(private room: RoomService) {}

  @Query()
  rooms(): Promise<any> {
    return this.room.findMany();
  }

  @Mutation()
  createRoom(): Promise<any> {
    return this.room.create();
  }
}
