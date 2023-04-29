import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/resources/users/users.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly usersService: UsersService) {}
  // TODO: Implement hashing and salting
  async validateUser(email: string, password: string): Promise<any> {
    const user =
      (await this.usersService.findUserByEmail(email)) || ({} as any);
    const { password: userPassword, ...result } = user;
    if (userPassword === password) return result;
    return null;
  }
}
