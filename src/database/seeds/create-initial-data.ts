import { Channel } from '../../channels/entities/channel.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const workspaceId = uuidv4();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Workspace)
      .values([{ id: workspaceId, name: 'Sleact', url: 'sleact' }])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Channel)
      .values([{ id: uuidv4(), name: '일반', WorkspaceId: workspaceId }])
      .execute();
  }
}
