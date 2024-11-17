import ServiceList from "@/components/services/service-list";
import { getAllServices } from "@/app/(protected)/services/actions";
import { TService } from "@/types/Services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Services() {
  const data: TService[] | undefined = await getAllServices();

  return (
    <div className="flex flex-col w-full max-w-xxl px-5 pt-4">
      <div className="flex">
        <Button asChild>
          <Link href="/services/create">Create Service</Link>
        </Button>
      </div>
      <ServiceList data={data}/>
    </div>
  );
}