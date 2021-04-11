import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//import {PostListComponent} from "./posts/post-list/post-list.component";
import {PostCreateComponent} from "./posts/post-create/post-create.component";

import { HomeComponent} from "./home/home.component";
import { ProductCrudComponent } from "./product-crud/product-crud.component";

const routes: Routes = [
  //{path: '', component: PostListComponent},
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductCrudComponent},
  {path: 'create', component: PostCreateComponent},
  {path: 'edit/:postId', component: PostCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
