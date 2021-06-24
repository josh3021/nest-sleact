import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SaveChatsDto } from './dtos/save-chats.dto';

@Controller('api/workspaces/:workspaceUrl/channels')
export class ChannelsController {
  // constructor(private readonly)
  @Get('')
  getAllChannels(@Param('workspaceUrl') workspaceUrl: string) {}

  @Post('')
  createChannel(@Param('workspaceUrl') workspaceUrl: string) {}

  @Get(':channelId')
  getChannelInfo(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('channelId') channelId: string,
  ) {}

  @Get(':channelId/chats')
  getChats(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('channelId') channelId: string,
    @Query('perPage') perPage: number,
    @Query('page') page: number,
  ) {}

  @Get(':channelId/unreads')
  getUnreadsChats(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('channelId') channelId: string,
    @Query('after') after: Date,
  ) {}

  @Post(':channelId/chats')
  saveChats(
    @Param('workspace') workspace: string,
    @Param('channelId') channelId: string,
    @Body() saveChatsDto: SaveChatsDto,
  ) {}
}
