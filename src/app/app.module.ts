import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { AppComponent } from './app.component';
import { BasicComponent } from './com/basic/basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './com/form-group/form-group.component';
import { FormArrayComponent } from './com/form-array/form-array.component';
import { FormBuilderComponent } from './com/form-builder/form-builder.component';
import { FormErrorComponent } from './com/form-error/form-error.component';
import { FormValidatorComponent } from './com/form-validator/form-validator.component';
import { FormAsyncValidatorComponent } from './com/form-async-validator/form-async-validator.component'
import { ErrorMessageComponent } from './com/error-message/error-message.component';
import { DropdownModule } from 'primeng/dropdown';
import { TestcomComponent } from './testcom/testcom.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const routers: Routes=[
  {
    path: '',
    component: BasicComponent
  },
  {
    path:'basic',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'group',
    component: FormGroupComponent
  },
  {
    path: 'array',
    component: FormArrayComponent
  },
  {
    path: 'builder',
    component: FormBuilderComponent
  },
  {
    path: 'error',
    component: FormErrorComponent
  },
  {
    path: 'validator',
    component: FormValidatorComponent
  },
  {
    path: 'async-validator',
    component: FormAsyncValidatorComponent
  },
  {
    path: 'error-message',
    component: ErrorMessageComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormBuilderComponent,
    FormErrorComponent,
    FormValidatorComponent,
    FormAsyncValidatorComponent,
    ErrorMessageComponent,
    TestcomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  // DropdownModule ,
     MatCardModule,
    MatSelectModule,
    DropdownModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
