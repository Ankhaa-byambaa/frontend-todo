import {
  HomePage,
  HomePageSkeleton,
  Task,
  ThemeController,
} from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<HomePageSkeleton />}>
        <HomePage />
        <Task />
      </Suspense>
    </div>
  );
}
