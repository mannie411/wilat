import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { ComplexModule } from './components/complex-component-example/complex.module';
import { ComponentsModule } from './components/components.module';
// Components
import { SimpleComponent } from './components/simple-component-example/simple.component';

const EXPORT_COMPONENTS = [SimpleComponent];

const PIPES: never[] = [];

const MODULES = [ComplexModule, ComponentsModule];

@NgModule({
  declarations: [...EXPORT_COMPONENTS, ...PIPES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...MODULES],
  exports: [...EXPORT_COMPONENTS, ...PIPES, ...MODULES],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
