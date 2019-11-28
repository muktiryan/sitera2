// Angular
import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';
// Object path
import * as objectPath from 'object-path';
// Services
import { MenuConfigService } from './menu-config.service';

@Injectable()
export class MenuAsideService {
	// Public properties
	menuListAsideKemenkeu$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	menuListAsideAdmin$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	menuListAsideBpTappera$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

	/**
	 * Service constructor
	 *
	 * @param menuConfigService: MenuConfigService
	 */
	constructor(private menuConfigService: MenuConfigService) {
		this.loadMenu();
	}

	/**
	 * Load menu list
	 */
	loadMenu() {
		const menuItems: any[] = objectPath.get(this.menuConfigService.getMenus(), 'aside.items');
		this.menuListAsideAdmin$.next(menuItems);
		const menuItemsKemenkeu: any[] = objectPath.get(this.menuConfigService.getMenus(), 'asideKemenkeu.items');
		this.menuListAsideKemenkeu$.next(menuItemsKemenkeu);
		const menuItemsBptappera: any[] = objectPath.get(this.menuConfigService.getMenus(), 'asideBptappera.items');
		this.menuListAsideBpTappera$.next(menuItemsBptappera);
	}
	
}
