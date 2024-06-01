import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {provideHttpClient} from "@angular/common/http";
import {routes} from "@src/routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideExperimentalZonelessChangeDetection()]
};
