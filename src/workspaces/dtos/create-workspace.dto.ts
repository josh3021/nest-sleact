import { PickType } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class CreateWorkspaceDto extends PickType(User, [
  'email',
  'nickname',
  'password',
] as const) {}
