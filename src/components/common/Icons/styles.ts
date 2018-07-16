import { CSSProperties } from 'react';

export const iconStyles = {
  base: {
    stroke: 'hsl(0, 0%, 34%)',
  },
  timerCommandButton: {
    base: {
      strokeWidth: 1.3,
    },
    reset: {
      fill: 'none',
      strokeDasharray: '52px',
      transform: 'rotateZ(-159deg)',
      transformOrigin: '50%',
    },
  },
  crispEdges: {
    shapeRendering: 'crispEdges',
  } as CSSProperties,
};
