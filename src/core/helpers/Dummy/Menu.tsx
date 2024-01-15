export interface IMenu {
    id: number
    name: string
    url: string
    icon: string
    active: boolean // true visibility item is active fase of the item
}
export const MENU = [
  {
    id: 1,
    name: 'Usuarios',
    url: '/app',
    icon: 'SourceIcon',
    active: true
  },
  {
    id: 2,
    name: 'Proyectos',
    url: '/user',
    icon: 'SourceIcon',
    active: true
  },
  {
    id: 3,
    name: 'Flujos',
    url: '/flujos',
    icon: 'SourceIcon',
    active: true
  }
]
