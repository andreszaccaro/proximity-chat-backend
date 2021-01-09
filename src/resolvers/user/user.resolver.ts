import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UserService } from '../../services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private user: UserService) {}

  @Mutation()
  createUser(
    @Args('roomId') roomId: string,
    @Args('name') name: string,
  ): Promise<any> {
    return this.user.create(roomId, name);
  }
}
