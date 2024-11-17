import { Button } from "@/components/ui/button";
import BusinessHours from "@/app/(protected)/brand/_components/business-hours";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Settings from "@/app/(protected)/brand/_components/settings";

export default function Brand() {

  return (
    <div className="flex flex-col w-full max-w-full">
      <div className={`flex w-full max-w-full items-end justify-end mb-4
        border-b-2 border-slate-200 pb-4 px-4 sticky pt-4 top-16 bg-white z-50`}>
        <Button size="sm">Save</Button>
      </div>
      <div className="flex flex-col px-4 gap-12">
        <BusinessHours/>
        <div>
          <h2>Unavailability</h2>
          <Table className="w-full max-w-full mb-2">
            <TableHeader>
              <TableRow>
                <TableHead>Time off datetime</TableHead>
                <TableHead className="text-right">Created at</TableHead>
                <TableHead className="text-right">Updated at</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium" colSpan={4}>No future time offs.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button variant="outline">Add timeoff</Button>
        </div>
        <Settings/>
      </div>
    </div>
  );
}