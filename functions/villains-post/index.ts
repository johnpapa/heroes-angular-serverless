import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { villainService } from '../services';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
  await villainService.postVillain(context);
};

export default httpTrigger;
