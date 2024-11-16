import { getUserData, updateProfileAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  const { user } = await getUserData();
  console.log(searchParams);
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
        <h1 className="text-2xl font-medium">Welcome to Reservo</h1>
        <p className="text-sm text-foreground/60">
          Please enter additional details below.
        </p>
        <Label htmlFor="name">Owner's name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter the name of the person who makes all the magic happen."
          required
        />
        <Label htmlFor="orgName">Organization name</Label>
        <Input
          type="text"
          name="orgName"
          placeholder="Your organization’s name. The world deserves to know."
        />
        <Label htmlFor="description">Company Description</Label>
        <Textarea
          name="description"
          placeholder="Describe your organization in a nutshell. Or, you know, a really big nutshell."
        />
        <SubmitButton formAction={updateProfileAction}>
          Save Details
        </SubmitButton>
        <FormMessage message={searchParams}/>
      </form>
    </div>

  );
}
