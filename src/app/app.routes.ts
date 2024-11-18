import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'sobre-nos', component: AboutUsComponent },
  { path: 'contato', component: ContactFormComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/carousel', pathMatch: 'full' }, // Redireciona a rota inicial para o Carousel
  { path: '**', redirectTo: '/carousel' }, // Redireciona rotas inválidas para o Carousel
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
