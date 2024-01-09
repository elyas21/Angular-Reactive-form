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
import { FormsModule, NG_ASYNC_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
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
import { NestFormGroupComponent } from './com/nest-form-group/nest-form-group.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IsUserNameTaken } from './validator/asyncValidatorService';
import { TwoDigitDecimaNumberDirective } from './com/basic/two-digit-decimal-number';

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
    path: 'nest-form-group',
    component: NestFormGroupComponent
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
    TestcomComponent,
    NestFormGroupComponent,
    TwoDigitDecimaNumberDirective
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
    MatSortModule,
    NgbModule
    
  ],
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: IsUserNameTaken, multi:
    true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
