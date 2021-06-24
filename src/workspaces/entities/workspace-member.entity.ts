import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Workspace } from './workspace.entity';
import { User } from 'src/users/entities/user.entity';
import { DateEntity } from 'src/common/entities/date.entity';

@Index('UserId', ['UserId'], {})
@Entity({ schema: 'sleact', name: 'workspacemembers' })
export class WorkspaceMember extends DateEntity {
  @Column('varchar', { primary: true, name: 'WorkspaceId' })
  WorkspaceId: string;

  @Column('varchar', { primary: true, name: 'UserId' })
  UserId: string;

  @Column('datetime', { name: 'loggedInAt', nullable: true })
  loggedInAt: Date | null;

  @ManyToOne(() => Workspace, (workspace) => workspace._WorkspaceMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  _Workspace: Workspace;

  @ManyToOne(() => User, (user) => user._WorkspaceMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  _User: User;
}
