import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateWorkspaceDto } from './dtos/create-workspace.dto';
import { InviteMemberDto } from './dtos/invite-member.dto';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspace(@Body() createWorkspaceDto: CreateWorkspaceDto) {}

  @Get(':workspaceUrl/members')
  getAllMembersFromWorkspace(@Param('workspaceUrl') workspaceUrl: string) {}

  @Post(':workspaceUrl/members')
  inviteMemberToWorkspace(
    @Param('workspaceUrl') workspaceUrl: string,
    @Body() inviteMemberDto: InviteMemberDto,
  ) {}

  @Delete(':workspaceUrl/members/:memberId')
  kickMemberFromWorkspace(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('memberId') memberId: string,
  ) {}

  @Get(':workspaceUrl/members/:memberId')
  getMemeberFromWorkspace(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('memberId') memberId: string,
  ) {}
}
