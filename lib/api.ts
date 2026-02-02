export interface Raffle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  targetAmount: number;
  ticketPrice: number;
  collectedAmount: number;
  endTime: string;
  status: string;
  fundingPercentage: number;
  sellerName: string;
  externalLinkUrl?: string;
  externalLinkText?: string;
  bannerLeftUrl?: string;
  bannerRightUrl?: string;
  consolationPrizeType?: string;
  consolationPrizeValue?: string;
}

// API URL Logic:
// 1. If NEXT_PUBLIC_API_URL is set (Vercel/Render), use it for everything (or client-side).
// 2. If NOT set, assume local Docker environment:
//    - Server-side: http://api:8080/api (Internal Docker DNS)
//    - Client-side: http://localhost:5081/api
const API_URL = process.env.NEXT_PUBLIC_API_URL || (
  typeof window === 'undefined'
    ? 'http://api:8080/api'
    : 'http://localhost:5081/api'
);

export async function getActiveRaffles(): Promise<Raffle[]> {
  // Mock data for now if API is not running or CORS issues
  // But I should try to fetch
  try {
    const res = await fetch(`${API_URL}/raffles`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch raffles');
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getRaffleById(id: string): Promise<Raffle | null> {
  console.log(`Fetching raffle ${id} from ${API_URL}/raffles/${id}`);
  try {
    const res = await fetch(`${API_URL}/raffles/${id}`, { cache: 'no-store' });
    console.log(`Response status: ${res.status}`);
    if (!res.ok) {
      console.error(`Failed to fetch: ${res.statusText}`);
      return null;
    }
    const data = await res.json();
    console.log('Raffle data received:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}
