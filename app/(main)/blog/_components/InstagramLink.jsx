'use client'
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export default function InstagramLink({ instagramUrl }) {
  const handleClick = (e) => {
    // Validate URL before navigation
    if (!instagramUrl || instagramUrl.includes('YOUR_POST_ID') || instagramUrl.includes('placeholder')) {
      e.preventDefault();
      window.open('https://www.instagram.com/blustockconsultants/', '_blank');
    }
  };

  const finalUrl = instagramUrl && !instagramUrl.includes('YOUR_POST_ID') 
    ? instagramUrl 
    : 'https://www.instagram.com/blustockconsultants/';

  return (
    <a 
      href={finalUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full"
      onClick={handleClick}
    >
      <Button variant="outline" size="sm" className="w-full group">
        <Instagram className="w-4 h-4 mr-2 group-hover:text-secondary" />
        Read More on Instagram
      </Button>
    </a>
  );
}

