import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./component/list/list.component";
import { HeroComponent } from "./component/hero/hero.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent

  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

}
