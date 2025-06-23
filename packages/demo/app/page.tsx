import { Metadata } from 'next';
import SnowfallDemo from './SnowEffectDemo';

export const metadata: Metadata = {
  title: 'Interactive Demo - React Snowfall Effect',
  description:
    'Try our interactive React snowfall effect demo with customizable settings including snowflake count, speed, wind, colors, and special effects like hearts and stars.',
  openGraph: {
    title: 'Interactive Demo - React Snowfall Effect',
    description:
      'Try our interactive React snowfall effect demo with customizable settings including snowflake count, speed, wind, colors, and special effects like hearts and stars.',
  },
};

export default function Home() {
  return <SnowfallDemo />;
}
