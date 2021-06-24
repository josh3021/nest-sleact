import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Channel } from './channel.entity';
import { User } from 'src/users/entities/user.entity';
import { DateEntity } from 'src/common/entities/date.entity';

@Index('UserId', ['UserId'], {})
@Entity({ schema: 'sleact', name: 'channelmembers' })
export class ChannelMember extends DateEntity {
  @Column('varchar', { primary: true, name: 'ChannelId' })
  ChannelId: string;

  @Column('varchar', { primary: true, name: 'UserId' })
  UserId: string;

  @ManyToOne(() => Channel, (channels) => channels._ChannelMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ChannelId', referencedColumnName: 'id' }])
  _Channel: Channel;

  @ManyToOne(() => User, (user) => user._ChannelMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  _User: User;
}
