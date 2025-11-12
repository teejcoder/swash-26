import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Rip() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Thanks for your Interest and Support.</h1>
        <div className="text-balance mb-6">
          <p className="mb-6">Sadly, Swash closed its doors in March 2020.</p>
          <p className="mb-6">
            To all our Friends, Supporters, Artists, Venues, Managers, Team
            Members and Affiliates;
          </p>
          <p className="mb-6">A MASSIVE THANK YOU ❤️</p>
          <p>Good Luck Out There && Much Love ✌️</p>
        </div>

        <Link href="/" className="underline">
          <Button
            className="hover:underline transform -rotate-1 hover:rotate-0 transition-transform"
            variant="ghost"
          >
            <ArrowLeft />
            Return to Homepage
          </Button>
        </Link>
      </div>
    </section>
  );
}
