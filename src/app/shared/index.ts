import {FooterComponent} from './footer/footer.component';
import {BackToTopComponent} from './back-to-top/back-to-top.component';
import {ExternalLinkDirective} from './external-link/external-link.directive'

export const components: any[] = [FooterComponent,BackToTopComponent];
export const directives: any[] = [ExternalLinkDirective];

export * from './footer/footer.component';
export * from './back-to-top/back-to-top.component';
export * from './external-link/external-link.directive';