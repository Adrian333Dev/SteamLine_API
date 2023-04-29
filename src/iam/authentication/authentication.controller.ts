import { CreateUserDto } from './../../resources/users/dto/create-user.dto';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';

@Controller('authentication')
export class AuthenticationController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req: any) {
    return req.user;
  }
}
