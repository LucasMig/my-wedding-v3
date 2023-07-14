import { v4 as uuidv4 } from 'uuid';
import {
  HiOutlineCalendar,
  HiOutlineGift,
  HiOutlineLightBulb,
} from 'react-icons/hi';

export const eventInfoData = [
  {
    id: uuidv4(),
    icon: <HiOutlineCalendar />,
    title: 'A Cerimônia',
    description: [
      'Domingo, 17 de dezembro de 2023',
      'Início da cerimônia - 14:30',
      'Biritiba Mirim',
      'Chácara Grão de Areia',
      '-23.540964, -46.079376',
    ],
  },
  {
    id: uuidv4(),
    icon: <HiOutlineGift />,
    title: 'O Enxoval',
    description: [
      'Sábado, 21 de outubro de 2023',
      'Início do chá - 16:30',
      'Ajude-nos a construir nosso lar',
      'Caso prefira, pode nos presentear com dinheiro',
    ],
  },
  {
    id: uuidv4(),
    icon: <HiOutlineLightBulb />,
    title: 'Seu traje',
    description: [
      'A cerimônia será ao ar livre',
      'Sugerimos que você use roupas leves e confortáveis',
      'O traje é esporte fino',
    ],
  },
];
