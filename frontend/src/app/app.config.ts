import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import {provideHttpClient} from "@angular/common/http";
import {routes} from "@src/routes";
import {environment} from "@src/environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideExperimentalZonelessChangeDetection(), provideAuth0({
    domain: environment.DOMAIN,
    clientId: environment.CLIENT_ID,
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })]
};
