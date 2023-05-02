import { Module } from '@nestjs/common';
import { FlexyMongodbModule } from 'nestjs/mongodb';
import { FormCrmAttrTestForm1Controller } from './crm-attr-test-form1.controller';

@Module({
  imports: [FlexyMongodbModule],
  controllers: [FormCrmAttrTestForm1Controller],
})
export class FormCrmAttrTestForm1Module {}
