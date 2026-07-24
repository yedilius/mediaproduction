import type { Metadata } from "next";
import type { ReactNode } from "react";
import { InvestorRoomShell } from "@/components/investor-room/InvestorRoomShell";

export const metadata: Metadata = {
  title: {
    default: "Investor Room",
    template: "%s · Investor Room",
  },
  robots: { index: false, follow: false },
};

export default function InvestorRoomLayout({ children }: { children: ReactNode }) {
  return <InvestorRoomShell>{children}</InvestorRoomShell>;
}
