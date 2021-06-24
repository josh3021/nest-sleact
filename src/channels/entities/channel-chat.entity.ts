import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Channel } from './channel.entity';
import { CommonEntity } from 'src/common/entities/common.entity';

@Index('UserId', ['UserId'], {})
@Index('ChannelId', ['ChannelId'], {})
@Entity({ schema: 'sleact', name: 'channelchats' })
export class ChannelChat extends CommonEntity {
  @Column('text')
  content: string;

  @Column('varchar', { name: 'UserId', nullable: true })
  UserId: string | null;

  @Column('varchar', { name: 'ChannelId', nullable: true })
  ChannelId: string | null;

  @ManyToOne(() => User, (user) => user._ChannelChats, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  _User: User;

  @ManyToOne(() => Channel, (channel) => channel._ChannelChats, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ChannelId', referencedColumnName: 'id' }])
  _Channel: Channel;
}
