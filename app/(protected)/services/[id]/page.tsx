import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getById, insertService, updateService } from "@/app/(protected)/services/actions";

export default async function UpdateService(props: {
  params: Promise<{ id: string }>,
  searchParams: Promise<Message>;
}) {

  const searchParams = await props.searchParams;
  const params = await props.params;
  const { id } = params;
  const { name, description } = await getById(id);
  const updateCurrentService = async (formData: FormData) => {
    "use server";
    await updateService(formData, id);
  };
  return (
    <div className="flex flex-col w-full max-w-full items-center px-5">
      <FormMessage message={searchParams}/>
      <form className="flex flex-col w-full max-w-lg p-4 gap-2 [&>input]:mb-4">
        <h1 className="text-2xl font-medium">Update service</h1>
        <p className="text-sm text-foreground/60">
          Please enter service details below.
        </p>
        <Label htmlFor="name">Service Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter the name of the person who makes all the magic happen."
          defaultValue={name}
          required
        />
        <Label htmlFor="description">Service Description</Label>
        <Textarea
          className="mb-6"
          name="description"
          placeholder="Describe your organization in a nutshell. Or, you know, a really big nutshell."
          defaultValue={description}
        />
        <SubmitButton formAction={updateCurrentService}>
          Update Service
        </SubmitButton>
      </form>
    </div>
  );
}
