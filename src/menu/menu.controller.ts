import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private MenuService: MenuService) {}

  @Get()
  iniGet(): object {
    return this.MenuService.fetchFood()
  }

  @Post()
  iniPost(@Body() data: { name: string; id: number }): object {
    return this.MenuService.addFood(data)
  }

  @Delete(':id')
  iniDelete(@Param('id') id : string): string {
    return this.MenuService.deleteFood(id)
  }
}
