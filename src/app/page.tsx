import { HomePage, HomePageSkeleton } from "@/components";
import { Suspense } from "react";
export default function Home() {
  return (
    <div>
      <Suspense fallback={<HomePageSkeleton />}>
        <HomePage />
      </Suspense>
    </div>
  );
}
