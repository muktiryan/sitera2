// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
// import { DashboardComponent } from './dashboard.component';
import { InformasiComponent } from './informasi.component';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		PartialsModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
		MatTableModule,
		RouterModule.forChild([
			{
				path: '',
				component: InformasiComponent
			},
		]),
	],
	providers: [],
	declarations: [
		InformasiComponent,
	]
})
export class InformasiModule {
}