import { Injectable } from '@nestjs/common';
@Injectable()
export class QueryHelper {
  constructor() {}

  async aggregationHelper(model: any, query: any[]): Promise<any[]> {
    return await model.aggregate(query);
    return [];
  }

  getQuatationProductQuery(): any {
    const groupBy = [
      {
        $group: {
          _id: {
            category: '$productCategory.productType',
            subCategory: '$productCategory.productSubType',
            processArea: '$processingArea',
          },
          products: { $push: '$$ROOT' },
          category: { $first: '$productCategory' },
        },
      },
    ];
    return groupBy;
  }
}
