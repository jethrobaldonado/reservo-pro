import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TService } from "@/types/Services";
import ServiceItem from "@/components/services/service-item";

export default function ServiceList({ data }: { data: TService[] | undefined}) {
  return (
    <Table className="w-full max-w-full">
      <TableCaption>A list of your Services.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Service name</TableHead>
          <TableHead className="text-right">Created at</TableHead>
          <TableHead className="text-right">Updated at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data && data.length ? data.map((data) => <ServiceItem key={`service-${data.id}`}  data={data} />) : (
          <TableRow>
            <TableCell className="font-medium" colSpan={4}>No services.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}