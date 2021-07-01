
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { NotFoundComponent } from "./component/notfound/notfound.component";

@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '**', component: NotFoundComponent },
    ])
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {


}
