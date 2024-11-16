import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { insertService } from "@/app/(protected)/services/actions";

export default async function CreateService(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex flex-col w-full max-w-full items-center">
      <form className="flex flex-col w-full max-w-lg p-4 gap-2 [&>input]:mb-4">
        <h1 className="text-2xl font-medium">Create new service</h1>
        <p className="text-sm text-foreground/60">
          Please enter service details below.
        </p>
        <Label htmlFor="name">Service Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter the name of the person who makes all the magic happen."
          required
        />
        <Label htmlFor="description">Service Description</Label>
        <Textarea
          className="mb-6"
          name="description"
          placeholder="Describe your organization in a nutshell. Or, you know, a really big nutshell."
        />
        <SubmitButton formAction={insertService}>
          Save Service
        </SubmitButton>
        <FormMessage message={searchParams}/>
      </form>
    </div>

  );
}
