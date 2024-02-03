'use client'

import { AppProvider } from "@/shared/components/AppProvider";
import { Home } from "@/shared/components/Home";

export default function HomeScreen() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
