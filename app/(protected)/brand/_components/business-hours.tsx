"use client";

import { Label } from "@/components/ui/label";
import { TimePicker12Demo } from "@/components/ui/time-picker-fieldset";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function BusinessHours () {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-4">
      <h1>Business Hours</h1>
      <div className="flex flex-row items-center gap-4">
        <Label className="w-32">Monday</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>-</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>Closed</Label>
        <Switch />
        <Label>Open</Label>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Label className="w-32">Tuesday</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>-</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>Closed</Label>
        <Switch />
        <Label>Open</Label>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Label className="w-32">Wednesday</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>-</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>Closed</Label>
        <Switch />
        <Label>Open</Label>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Label className="w-32">Thursday</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>-</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>Closed</Label>
        <Switch />
        <Label>Open</Label>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Label className="w-32">Friday</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>-</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>Closed</Label>
        <Switch />
        <Label>Open</Label>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Label className="w-32">Saturday</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>-</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>Closed</Label>
        <Switch />
        <Label>Open</Label>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Label className="w-32">Sunday</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>-</Label>
        <TimePicker12Demo date={date} setDate={setDate}/>
        <Label>Closed</Label>
        <Switch />
        <Label>Open</Label>
      </div>
    </div>
  );
}