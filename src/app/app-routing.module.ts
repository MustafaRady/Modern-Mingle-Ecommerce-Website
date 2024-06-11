import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { ExtraOptions } from '@angular/router';
import { PaymentComponent } from './footer/payment/payment.component';
import { CancellationComponent } from './footer/cancellation/cancellation.component';
import { TermsAndConditionComponent } from './footer/terms-and-condition/terms-and-condition.component';
import { PrivacyAndPolicyComponent } from './footer/privacy-and-policy/privacy-and-policy.component';
import { FaqsComponent } from './footer/faqs/faqs.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', // or 'top'
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'product/:id',component:SingleProductComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'payments',component:PaymentComponent
  },
  {
    path:'cancellation',component:CancellationComponent
  },
  {
    path:'terms-conditions',component:TermsAndConditionComponent
  },
  {
    path:'privacy-policy',component:PrivacyAndPolicyComponent
  },
  {
    path:'faqs',component:FaqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
