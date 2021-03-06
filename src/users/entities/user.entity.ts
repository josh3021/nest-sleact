import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { ChannelChat } from 'src/channels/entities/channel-chat.entity';
import { ChannelMember } from 'src/channels/entities/channel-member.entity';
import { Channel } from 'src/channels/entities/channel.entity';
import { DM } from 'src/dms/entities/dm.entity';
import { Mention } from 'src/workspaces/entities/mention.entity';
import { WorkspaceMember } from 'src/workspaces/entities/workspace-member.entity';
import { Workspace } from 'src/workspaces/entities/workspace.entity';
import { CommonEntity } from 'src/common/entities/common.entity';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'sleact', name: 'users' })
export class User extends CommonEntity {
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;

  @OneToMany(() => ChannelChat, (channelchats) => channelchats._User)
  _ChannelChats: ChannelChat[];

  @OneToMany(() => ChannelMember, (channelmembers) => channelmembers._User)
  _ChannelMembers: ChannelMember[];

  @OneToMany(() => DM, (dms) => dms._Sender)
  _DMs: DM[];

  @OneToMany(() => DM, (dms) => dms._Receiver)
  _DMs2: DM[];

  @OneToMany(() => Mention, (mentions) => mentions._Sender)
  _Mentions: Mention[];

  @OneToMany(() => Mention, (mentions) => mentions._Receiver)
  _Mentions2: Mention[];

  @OneToMany(
    () => WorkspaceMember,
    (workspacemembers) => workspacemembers._User,
  )
  _WorkspaceMembers: WorkspaceMember[];

  @OneToMany(() => Workspace, (workspaces) => workspaces._Owner)
  _OwnedWorkspaces: Workspace[];

  @ManyToMany(() => Workspace, (workspaces) => workspaces._Members)
  @JoinTable({
    name: 'workspacemembers',
    joinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'WorkspaceId',
      referencedColumnName: 'id',
    },
  })
  _Workspaces: Workspace[];

  @ManyToMany(() => Channel, (channels) => channels._Members)
  @JoinTable({
    name: 'channelmembers',
    joinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ChannelId',
      referencedColumnName: 'id',
    },
  })
  _Channels: Channel[];
}
