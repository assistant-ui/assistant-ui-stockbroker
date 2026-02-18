"use client";

import { Thread } from "@/components/assistant-ui/thread";
import { PriceSnapshotTool } from "@/components/tools/price-snapshot/PriceSnapshotTool";
import { PurchaseStockTool } from "@/components/tools/purchase-stock/PurchaseStockTool";

export default function Home() {
  return (
    <div className="flex h-dvh">
      <div className="flex-grow">
        <Thread />
        <PriceSnapshotTool />
        <PurchaseStockTool />
      </div>
    </div>
  );
}
