import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { heroService } from '../services';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
  await heroService.putHero(context);
};

export default httpTrigger;
