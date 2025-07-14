import { platformBrowser } from '@angular/platform-browser'
import { defineCustomElements } from '@ionic/pwa-elements/loader'

import { AppModule } from './app/app.module';

defineCustomElements(window);

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.log(err));
