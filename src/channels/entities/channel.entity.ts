import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ChannelChat } from './channel-chat.entity';
import { ChannelMember } from './channel-member.entity';
import { User } from 'src/users/entities/user.entity';
import { Workspace } from 'src/workspaces/entities/workspace.entity';
import { CommonEntity } from 'src/common/entities/common.entity';

@Index('WorkspaceId', ['WorkspaceId'], {})
@Entity({ schema: 'sleact' })
export class Channel extends CommonEntity {
  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('tinyint', {
    name: 'private',
    nullable: true,
    width: 1,
    default: false,
  })
  private: boolean | null;

  @Column('varchar', { name: 'WorkspaceId', nullable: true })
  WorkspaceId: string | null;

  @OneToMany(() => ChannelChat, (channelchats) => channelchats._Channel)
  _ChannelChats: ChannelChat[];

  @OneToMany(() => ChannelMember, (channelMembers) => channelMembers._Channel, {
    cascade: ['insert'],
  })
  _ChannelMembers: ChannelMember[];

  @ManyToMany(() => User, (users) => users._Channels)
  _Members: User[];

  @ManyToOne(() => Workspace, (workspace) => workspace._Channels, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  _Workspace: Workspace;
}
