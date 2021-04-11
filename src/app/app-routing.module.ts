import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//import {PostListComponent} from "./posts/post-list/post-list.component";
import {PostCreateComponent} from "./posts/post-create/post-create.component";

import { HomeComponent} from "./components/views/home/home.component";
import { ProductCrudComponent } from "./components/views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  //{path: '', component: PostListComponent},
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductCrudComponent},
  {path: 'create', component: PostCreateComponent},
  {path: 'edit/:postId', component: PostCreateComponent},
  {path: 'products/create', component: ProductCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
