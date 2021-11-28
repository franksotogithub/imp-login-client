import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button'
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {DropdownModule} from 'primeng/dropdown';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
    PanelMenuModule,
    ToolbarModule,
    SidebarModule,
    DropdownModule,
    InputTextareaModule,
    SplitButtonModule,
    AccordionModule,
    CalendarModule,
    FileUploadModule,
    AutoCompleteModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,

  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
    PanelMenuModule,
    ToolbarModule,
    SidebarModule,
    DropdownModule,
    InputTextareaModule,
    SplitButtonModule,
    AccordionModule,
    CalendarModule,
    FileUploadModule,
    AutoCompleteModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
  ]

})
export class PrimeModule { }
