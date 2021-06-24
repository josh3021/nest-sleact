import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Channel } from 'src/channels/entities/channel.entity';
import { DM } from 'src/dms/entities/dm.entity';
import { Mention } from './mention.entity';
import { WorkspaceMember } from './workspace-member.entity';
import { User } from 'src/users/entities/user.entity';
import { CommonEntity } from 'src/common/entities/common.entity';

@Index('name', ['name'], { unique: true })
@Index('url', ['url'], { unique: true })
@Index('OwnerId', ['OwnerId'], {})
@Entity({ schema: 'sleact', name: 'workspaces' })
export class Workspace extends CommonEntity {
  @Column('varchar', { name: 'name', unique: true, length: 30 })
  name: string;

  @Column('varchar', { name: 'url', unique: true, length: 30 })
  url: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;

  @Column('varchar', { name: 'OwnerId', nullable: true })
  OwnerId: string | null;

  @OneToMany(() => Channel, (channels) => channels._Workspace)
  _Channels: Channel[];

  @OneToMany(() => DM, (dms) => dms._Workspace)
  _DMs: DM[];

  @OneToMany(() => Mention, (mentions) => mentions._Workspace)
  _Mentions: Mention[];

  @OneToMany(
    () => WorkspaceMember,
    (workspacemembers) => workspacemembers._Workspace,
    { cascade: ['insert'] },
  )
  _WorkspaceMembers: WorkspaceMember[];

  @ManyToOne(() => User, (user) => user._Workspaces, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'OwnerId', referencedColumnName: 'id' }])
  _Owner: User;

  @ManyToMany(() => User, (users) => users._Workspaces)
  _Members: User[];
}
