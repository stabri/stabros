import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const appRouts: Routes = [
  {path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],  // forRoot only in app-routing module
  exports: [RouterModule],
})

export class AppRoutingModule {

}
