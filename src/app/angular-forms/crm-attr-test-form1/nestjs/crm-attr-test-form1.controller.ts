import { Controller, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { Request, Response } from 'express';
import { IFormCrmAttrTestForm1 } from '../interfaces';

@ApiTags('CollectionName')
@ApiBearerAuth()
@Controller('api/action')
export class FormCrmAttrTestForm1Controller {
  constructor(
    @InjectModel('collection_name')
    private readonly actionModel: Model<
      { collection_name: IFormCrmAttrTestForm1 } & Document
    >
  ) {}

  @Get('api/:id/crm-attr-test-form1.json')
  // @UseGuards(AuthGuard('jwt'))
  async getFormData(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string
  ) {
    res.json({
      ok: true,
    });
  }

  @Put('api/:id/crm-attr-test-form1.json')
  // @UseGuards(AuthGuard('jwt'))
  async saveFormData(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string
  ) {
    res.json({
      ok: true,
    });
  }
}
