import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SaveDMChatsDto } from './dtos/save-dm-chats.dto';
import { SaveDMImagesDto } from './dtos/save-dm-images.dto';

@Controller('api/workspaces/:workspaceUrl/dms/:dmId')
export class DmsController {
  @Get('chats')
  getDMChats(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('dmId') dmId: string,
    @Query('perPage') perPage: number,
    @Query('page') page: number,
  ) {}

  @Get('unreads')
  getUnreadsDMChats(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('dmId') dmId: string,
    @Query('after') after: Date,
  ) {}

  @Post('chats')
  saveDMChats(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('dmId') dmId: string,
    @Body() saveDMChatsDto: SaveDMChatsDto,
  ) {}

  @Post('images')
  saveDMImages(
    @Param('workspaceUrl') workspaceUrl: string,
    @Param('dmId') dmId: string,
    @Body() saveDMImagesDto: SaveDMImagesDto,
  ) {}
}
