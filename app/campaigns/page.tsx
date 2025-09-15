import CampaignCard from "@/components/CampaignCard"

const campaigns = [
  {
    id: 1,
    title: "Sustainable Water Bottles Launch",
    description: "Help spread awareness of our eco-friendly bottles and earn rewards.",
    reward: "Free bottle + referral credits",
  },
  {
    id: 2,
    title: "Campus Blood Drive",
    description: "Support your community by sharing this nonprofit campaign.",
    reward: "Badge + community recognition",
  },
]

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Active Campaigns 🚀
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {campaigns.map(c => (
          <CampaignCard
            key={c.id}
            title={c.title}
            description={c.description}
            reward={c.reward}
          />
        ))}
      </div>
    </main>
  )
}

"use client" // needed for useEffect and useState

import { useEffect, useState } from "react";
import CampaignCard from "@/components/CampaignCard";

interface Campaign {
  id: number;
  title: string;
  description: string;
  reward: string;
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    async function fetchCampaigns() {
      const res = await fetch("/api/campaigns");
      const data: Campaign[] = await res.json();
      setCampaigns(data);
    }
    fetchCampaigns();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Active Campaigns 🚀
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {campaigns.map((c) => (
          <CampaignCard
            key={c.id}
            title={c.title}
            description={c.description}
            reward={c.reward}
          />
        ))}
      </div>
    </main>
  );
}

