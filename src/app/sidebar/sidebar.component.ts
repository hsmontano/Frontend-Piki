import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: any;
}

export const ROUTES: RouteInfo[] = [
    /*{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },*/
    { path: './dashboard',      title: 'Inicio',                  icon: 'nc-align-center',      class: '', role: [1,2,3]},
    { path: './carretera',      title: 'Carretera',               icon: 'nc-ambulance',         class: '', role: [1,2,3]},
    { path: './urbanero',       title: 'Urbanero',                icon: 'nc-delivery-fast',     class: '', role: [1,2,3]},
    { path: './exportacion',    title: 'Exportacion',             icon: 'nc-planet',            class: '', role: [1,2,3]},
    { path: './reposicion',     title: 'Reposicion',              icon: 'nc-app',               class: '', role: [1,2,3]},
    { path: './reenturneCa',    title: 'Reenturne Carretera',     icon: 'nc-ambulance',         class: '', role: [1,2,3]},
    { path: './reenturneUr',    title: 'Reenturne Urbanero',      icon: 'nc-delivery-fast',     class: '', role: [1,2,3]},
    { path: './gestion',        title: 'Gestion',                 icon: 'nc-briefcase-24',      class: '', role: [1,2,3]},
    { path: './reporte',        title: 'Reportes',                icon: 'nc-bullet-list-67',    class: '', role: [1,2]},
    { path: './empresas',       title: 'empresas',                icon: 'nc-bank',              class: '', role: [1,2,3]},
    { path: './conductores',       title: 'conductores',                icon: 'nc-single-02',              class: '', role: [1,2,3]},
    { path: './clientes',       title: 'Clientes',                icon: 'nc-badge',             class: '', role: [1,2,3]},
    { path: './usuarios',       title: 'Usuarios',                icon: 'nc-single-02',         class: '', role: [1,2]},
    { path: './configuracion',  title: 'Configuración',           icon: 'nc-settings',          class: '', role: [1,2]},
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public user = {
        roleId:1
    };
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.menuItems = ROUTES.filter(menuItem => {
            for (let j = 0; j < menuItem.role.length; j++) {
                const r = menuItem.role[j];
                if(r === this.user.roleId){
                    return r;
                }
            }
        });
        
    }
}
