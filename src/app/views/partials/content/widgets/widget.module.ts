import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
} from '@angular/material';
import {CoreModule} from '../../../../core/core.module';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
// Datatable
import {DataTableComponent} from './general/data-table/data-table.component';
// General widgets
import { Widget1Component } from './widget1/widget1.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget12Component } from './widget12/widget12.component';
import { Widget14Component } from './widget14/widget14.component';
import { Widget26Component } from './widget26/widget26.component';
import {Widgetlinebppengerahan1Component} from './widgetlinebppengerahan1/widgetlinebppengerahan1.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { Widget27Component } from './widget27/widget27.component';
import { Widget28Component } from './widget28/widget28.component';

@NgModule({
	declarations: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
        Widgetlinebppengerahan1Component,
        Widget27Component,
		Widget28Component,
	],
	exports: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
		Widget27Component,
		Widget28Component,
	],
	imports: [
		CommonModule,
		PerfectScrollbarModule,
		MatTableModule,
		CoreModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
	]
})
export class WidgetModule {
}
