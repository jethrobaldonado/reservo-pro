import { useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";

export default function Settings() {
  const leadTimes: { label: string; value: number }[] = useMemo(() => [
    { label: 'Immediately', value: 0 },
    { label: 'Today', value: 1 },
    { label: 'Tomorrow', value: 2 },
    { label: 'This Week', value: 7 },
    { label: 'Next Week', value: 13 },
    { label: '2 Weeks', value: 14 },
    { label: '3 Weeks', value: 21 },
    { label: '4 Weeks', value: 28 },
    { label: '1 Month', value: 30 },
    { label: '2 Months', value: 60 },
    { label: '3 Months', value: 90 },
    { label: '1 Hour', value: 1 / 24 },
    { label: '2 Hours', value: 2 / 24 },
    { label: '4 Hours', value: 4 / 24 },
    { label: '8 Hours', value: 8 / 24 },
    { label: '12 Hours', value: 12 / 24 },
  ], []);
  const cancellationPeriods = useMemo(() => [
    { label: 'No Cancellation', value: 0 },
    { label: '1 Hour', value: 1 },
    { label: '2 Hours', value: 2 },
    { label: '4 Hours', value: 4 },
    { label: '8 Hours', value: 8 },
    { label: '12 Hours', value: 12 },
    { label: '1 Day', value: 24 },
    { label: '2 Days', value: 48 },
    { label: '1 Week', value: 168 }
  ], []);

  return (
    <div className="flex flex-col gap-4">
      <h2>Settings</h2>
      <div className="flex flex-col gap-2">
        <Label>Lead time</Label>
        <Combobox data={leadTimes} placeholder="Select leadtime"/>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Cancellation</Label>
        <Combobox data={cancellationPeriods} placeholder="Select Cancellation"/>
      </div>
    </div>
  );
}
