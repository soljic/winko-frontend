import { getActiveRaffles } from '@/lib/api';
import HomeContent from '@/components/HomeContent';

export default async function Home() {
  const raffles = await getActiveRaffles();

  return <HomeContent raffles={raffles} />;
}
