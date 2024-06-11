import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { ProductsComponent } from './products/products.component';
import { LoaderComponent } from './sharedComponents/loader/loader.component';
import { CardComponent } from './sharedComponents/card/card.component';
import { PaymentComponent } from './footer/payment/payment.component';
import { CancellationComponent } from './footer/cancellation/cancellation.component';
import { TermsAndConditionComponent } from './footer/terms-and-condition/terms-and-condition.component';
import { PrivacyAndPolicyComponent } from './footer/privacy-and-policy/privacy-and-policy.component';
import { FaqsComponent } from './footer/faqs/faqs.component';
import { SubstringPipe } from './pipes/substring.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    LoaderComponent,
    CardComponent,
    PaymentComponent,
    CancellationComponent,
    TermsAndConditionComponent,
    PrivacyAndPolicyComponent,
    FaqsComponent,
    SubstringPipe
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
