import { describe, expect, it } from "vitest";
import { calculateBreakEvenClients, calculateMonth, createProjection, findPaybackMonth } from "./finance";
import { defaultInvestorInputs } from "@/config/finance";

describe("financial model", () => {
  it("calculates revenue only from the base package", () => {
    const result = calculateMonth(defaultInvestorInputs);

    expect(result.mainRevenue).toBe(4_200_000);
    expect(result.totalRevenue).toBe(4_200_000);
    expect(result.profitBeforeTax).toBe(150_000);
    expect(result.tax).toBe(15_000);
    expect(result.netProfit).toBe(135_000);
    expect(result.distributableProfit).toBe(0);
    expect(result.investorPayout).toBe(0);
    expect(result.companyRemainder).toBe(135_000);
  });

  it("never pays investor when distributable profit is negative", () => {
    const result = calculateMonth({ ...defaultInvestorInputs, clients: 5 });
    expect(result.distributableProfit).toBe(0);
    expect(result.investorPayout).toBe(0);
  });

  it("grows client count and accumulated payout month by month", () => {
    const projection = createProjection({ ...defaultInvestorInputs, period: 6 });
    expect(projection).toHaveLength(6);
    expect(projection[5].clients).toBe(defaultInvestorInputs.clients + 5);
    expect(projection[5].accumulatedPayout).toBeGreaterThanOrEqual(projection[0].investorPayout);
  });

  it("finds payback only when accumulated payouts reach the investment", () => {
    const projection = createProjection({ ...defaultInvestorInputs, investment: 100_000, period: 6 });
    expect(findPaybackMonth(projection, 100_000)).toBe(3);
    expect(findPaybackMonth(projection, 100_000_000)).toBeNull();
  });

  it("calculates break-even client count", () => {
    expect(calculateBreakEvenClients(4_050_000, 300_000)).toBe(14);
  });
});
