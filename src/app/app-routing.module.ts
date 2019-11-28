// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {BaseComponent} from './views/theme/base/base.component';
import {ErrorPageComponent} from './views/theme/content/error-page/error-page.component';
// Auth
import {AuthGuard} from './core/auth';
import {PengajuanmanfaatComponent} from './views/pages/pengajuanmanfaat/pengajuanmanfaat.component';
import {PengajuanredemptionComponent} from './views/pages/pengajuanredemption/pengajuanredemption.component';

const routes: Routes = [
    {path: 'auth', loadChildren: () => import('../app/views/pages/auth/auth.module').then(m => m.AuthModule)},
    {
        path: '',
        component: BaseComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                loadChildren: () => import('../app/views/pages/jobs/jobpost/jobpost.module').then(m => m.JobPostModule)
            },
            {
                path: 'kepesertaan',
                loadChildren: () => import('../app/views/pages/apps/e-commerce/e-commerce.module').then(m => m.ECommerceModule)
            },
            {
                path: 'pengembangan',
                loadChildren: () => import('../app/views/pages/pengembangan/pengembangan.module').then(m => m.PengembanganModule)
            },
            {
                path: 'pemanfaatan',
                loadChildren: () => import('../app/views/pages/pemanfaatan/pemanfaatan.module').then(m => m.PemanfaatanModule)
            },
            {
                path: 'bphome',
                loadChildren: () => import('../app/views/pages/bphome/bphome.module').then(m => m.BphomeModule)
            },
            {
                path: 'bppengajuan',
                loadChildren: () => import('../app/views/pages/bppengajuan/bppengajuan.module').then(m => m.BppengajuanModule)
            },
            {
                path: 'bppemanfaatan',
                loadChildren: () => import('../app/views/pages/bppemanfaatan/bppemanfaatan.module').then(m => m.BppemanfaatanModule)
            },
            {
                path: 'bppengerahan',
                loadChildren: () => import('../app/views/pages/bppengerahan/bppengerahan.module').then(m => m.BppengerahanModule)
            },
            {
                path: 'bppencadangan',
                loadChildren: () => import('../app/views/pages/bppencadangan/bppencadangan.module').then(m => m.BppencadanganModule)
            },
            {
                path: 'bppemupukan',
                loadChildren: () => import('../app/views/pages/bppemupukan/bppemupukan.module').then(m => m.BppemupukanModule)
            },
            {
                path: 'bpkepesertaan',
                loadChildren: () => import('../app/views/pages/bpkepesertaan/bpkepesertaan.module').then(m => m.BpkepesertaanModule)
            },
            {
                path: 'bpdashboardandreport',
                loadChildren: () => import('../app/views/pages/bpdashboardreport/bpdashboardreport.module').then(m => m.BpdashboardreportModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../app/views/pages/pengajuan/pengajuan.module').then(m => m.PengajuanModule)
            },
            {
                path: 'applicant',
                loadChildren: () => import('../app/views/pages/applicants/applicants.module').then(m => m.ApplicantsModule)
            },
            {
                path: 'pengajuan/manfaat',
                component: PengajuanmanfaatComponent,
            },
            {
                path: 'pengajuan/redemption',
                component: PengajuanredemptionComponent,
            },
            {
                path: 'informasi',
                loadChildren: () => import('../app/views/pages/informasi/informasi.module').then(m => m.InformasiModule)
            },
            {
                path: 'kalkulator',
                loadChildren: () => import('../app/views/pages/simulasi/simulasi.module').then(m => m.SimulasiModule)
            },
            {
                path: 'dashboardandreport',
                loadChildren: () => import('../app/views/pages/dashboardreport/dashboardreport.module').then(m => m.DashboardreportComponentModule)
            },
            {
                path: 'faq',
                loadChildren: () => import('../app/views/pages/faq/faq.module').then(m => m.faqmodule)
            },
            {
                path: 'error/403',
                component: ErrorPageComponent,
                data: {
                    'type': 'error-v6',
                    'code': 403,
                    'title': '403... Access forbidden',
                    'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
                }
            },
            {path: 'error/:type', component: ErrorPageComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', redirectTo: 'home', pathMatch: 'full'},

        ]
    },

    {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
