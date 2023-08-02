import { v4 as uuid } from 'uuid';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  internal: boolean;
}

export const navItems: NavItem[] = [
  {
    id: uuid(),
    label: 'RSVP',
    href: '#form-rsvp',
    internal: true,
  },
  {
    id: uuid(),
    label: 'O grande dia',
    href: '#event-info',
    internal: true,
  },
  {
    id: uuid(),
    label: 'Como chegar?',
    href: '#map',
    internal: true,
  },
  {
    id: uuid(),
    label: 'Lista de presentes',
    href: 'https://pri-e-lucas.zankyou.com/br/lista-casamento',
    internal: false,
  },
];
