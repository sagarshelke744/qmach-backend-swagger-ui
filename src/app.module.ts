import { ProductCategoryDescriptionModule } from './products/product-category-description/product-cateogry-description.module';
import { ProductModule } from './products/product.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { QuatationModule } from './quatation/quatation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/quamach'),
    ClientsModule,
    ProductModule,
    ProductCategoryDescriptionModule,
    ConfigModule.forRoot(),
    QuatationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
