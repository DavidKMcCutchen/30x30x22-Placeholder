import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildComponent } from './wild/wild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "@currency-converter/material";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent, ToolbarComponent, WildComponent],
  exports: [LoginComponent, ToolbarComponent, WildComponent],
})
export class UiLoginModule {}
