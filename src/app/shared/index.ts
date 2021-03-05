import {FooterComponent} from './footer/footer.component';
import {BackToTopComponent} from './back-to-top/back-to-top.component';
import {ExternalLinkDirective} from './external-link/external-link.directive';
import {DropdownMenuComponent} from './dropdown-menu/dropdown-menu.component';

export const components: any[] = [FooterComponent,BackToTopComponent,DropdownMenuComponent];
export const directives: any[] = [ExternalLinkDirective];

export * from './footer/footer.component';
export * from './back-to-top/back-to-top.component';
export * from './dropdown-menu/dropdown-menu.component';
export * from './external-link/external-link.directive';