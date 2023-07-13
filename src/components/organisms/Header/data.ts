import { v4 as uuid } from 'uuid';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

export const navItems: NavItem[] = [
  {
    id: uuid(),
    label: 'RSVP',
    href: '#form-rsvp',
  },
  {
    id: uuid(),
    label: 'O grande dia',
    href: '#event-info',
  },
  {
    id: uuid(),
    label: 'Como chegar?',
    href: '#map',
  },
  {
    id: uuid(),
    label: 'Lista de presentes',
    href: 'https://www.casar.com/lista-de-casamento/',
  },
];
