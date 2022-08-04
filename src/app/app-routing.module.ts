
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { LoginComponent } from './login/login.component';
import { ApplyToRepaymentComponent } from './apply-to-repayment/apply-to-repayment.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full", // 當路徑是空的時候轉址到 home
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "openAccount",
    component: OpenAccountComponent,
  },
  {
    path: "applyToRepayment",
    component: ApplyToRepaymentComponent,
  },
  {
    path: "faqComponent",
    component: FaqComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
