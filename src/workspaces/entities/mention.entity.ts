import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Workspace } from './workspace.entity';
import { User } from 'src/users/entities/user.entity';
import { CommonEntity } from 'src/common/entities/common.entity';

@Index('WorkspaceId', ['WorkspaceId'], {})
@Index('SenderId', ['SenderId'], {})
@Index('ReceiverId', ['ReceiverId'], {})
@Entity({ schema: 'sleact', name: 'mentions' })
export class Mention extends CommonEntity {
  @Column('enum', { name: 'category', enum: ['chat', 'dm', 'system'] })
  type: 'chat' | 'dm' | 'system';

  @Column('varchar', { name: 'ChatId', nullable: true })
  ChatId: string | null;

  @Column('varchar', { name: 'WorkspaceId', nullable: true })
  WorkspaceId: string | null;

  @Column('varchar', { name: 'SenderId', nullable: true })
  SenderId: string | null;

  @Column('int', { name: 'ReceiverId', nullable: true })
  ReceiverId: string | null;

  @ManyToOne(() => Workspace, (workspace) => workspace._Mentions, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  _Workspace: Workspace;

  @ManyToOne(() => User, (user) => user._Mentions, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
  _Sender: User;

  @ManyToOne(() => User, (user) => user._Mentions2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
  _Receiver: User;
}
