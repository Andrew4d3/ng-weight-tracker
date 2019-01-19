import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeViewComponent } from "./home-view/home-view.component";
import { ChartViewComponent } from "./chart-view/chart-view.component";

const routes: Routes = [
  { path: "", component: HomeViewComponent, pathMatch: "full" },
  { path: "chart", component: ChartViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
