import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Workspace } from 'src/workspaces/entities/workspace.entity';
import { User } from 'src/users/entities/user.entity';
import { CommonEntity } from 'src/common/entities/common.entity';

@Index('WorkspaceId', ['WorkspaceId'], {})
@Index('dms_ibfk_2', ['SenderId'], {})
@Index('dms_ibfk_3', ['ReceiverId'], {})
@Entity({ schema: 'sleact', name: 'dms' })
export class DM extends CommonEntity {
  @Column('text', { name: 'content' })
  content: string;

  @Column('varchar', { name: 'WorkspaceId', nullable: true })
  WorkspaceId: string | null;

  @Column('varchar', { name: 'SenderId', nullable: true })
  SenderId: string | null;

  @Column('varchar', { name: 'ReceiverId', nullable: true })
  ReceiverId: string | null;

  @ManyToOne(() => Workspace, (workspace) => workspace._DMs, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  _Workspace: Workspace;

  @ManyToOne(() => User, (user) => user._DMs, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
  _Sender: User;

  @ManyToOne(() => User, (user) => user._DMs2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
  _Receiver: User;
}
