"use client";
import { TService } from "@/types/Services";
import { TableCell, TableRow } from "@/components/ui/table";
import { redirect } from "next/navigation";
import { format } from "date-fns";

export default function ServiceItem({ data }: { data: TService }) {
  const { id, name, updated_at, created_at } = data;

  return (
    <TableRow onClick={() => redirect(`/services/${id}`)}>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell className="text-right">{created_at && format(created_at, 'MMM dd, yyyy HH:ii')}</TableCell>
      <TableCell className="text-right">{updated_at && format(updated_at, 'MMM dd, yyyy HH:ii')}</TableCell>
    </TableRow>
  );
}