import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { ComplexModule } from './components/complex-component-example/complex.module';
import { ComponentsModule } from './components/components.module';
// Components
import { SimpleComponent } from './components/simple-component-example/simple.component';
import { PopupDirective } from './directives/popup.directive';

const EXPORT_COMPONENTS = [SimpleComponent];

const PIPES: never[] = [];

const MODULES = [ComplexModule, ComponentsModule];

const DIRECTIVES = [PopupDirective];

@NgModule({
  declarations: [...EXPORT_COMPONENTS, ...PIPES, ...DIRECTIVES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...MODULES],
  exports: [...EXPORT_COMPONENTS, ...PIPES, ...MODULES, ...DIRECTIVES],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
