import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    name: '이메일',
    example: 'abc@test.com',
    required: true,
  })
  public email: string;
  @ApiProperty({
    name: '닉네임',
    example: 'abc',
    required: true,
  })
  public nickname: string;
  @ApiProperty({
    name: '비밀번호',
    example: 'password',
    required: true,
  })
  public password: string;
}
