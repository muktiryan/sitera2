// Angular
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
// Layout
import {LayoutConfigService} from '../../../../../core/_base/layout';
// Charts
import {Chart} from 'chart.js/dist/Chart.min.js';

@Component({
    selector: 'kt-widgetlinebppengerahan1',
    templateUrl: './widgetlinebppengerahan1.component.html',
    styleUrls: ['./widgetlinebppengerahan1.component.scss'],
})
export class Widgetlinebppengerahan1Component implements OnInit {
    // Public properties
    @Input() title: string;
    @Input() data: { labels: string[]; datasets: any[] };
    @ViewChild('chart', {static: true}) chart: ElementRef;

    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    constructor(private layoutConfigService: LayoutConfigService) {
    }

    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */

    /**
     * On init
     */
    ngOnInit() {
        if (!this.data) {
            this.data = {
                labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei'],
                datasets: [
                    {
                        // label: 'dataset 1',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.success'),
                        data: [
                            10000000000, 12000000000, 11000000000, 12500000000, 12600000000
                        ]
                    }
                ]
            };
        }

        this.initChartJS();
    }

    /** Init chart */
    initChartJS() {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html

        const chart = new Chart(this.chart.nativeElement, {
            type: 'line',
            data: this.data,
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                barRadius: 4,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        stacked: true
                    }],
                    yAxes: [{
                        display: false,
                        stacked: true,
                        gridLines: false
                    }]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    }
}
