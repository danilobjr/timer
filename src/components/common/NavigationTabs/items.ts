import { icons } from './NavigationTabItem';

interface Items {
  text: string;
  icon: keyof typeof icons;
}

export const items: Items[] = [
  {
    text: 'Timer',
    icon: 'timer'
  },
  {
    text: 'Chronometer',
    icon: 'stopwatch'
  }
];
