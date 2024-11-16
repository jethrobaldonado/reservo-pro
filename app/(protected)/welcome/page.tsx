import { getUserData, updateProfileAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  const { user } = await getUserData();

  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Welcome to Reservo</h1>
      <p className="text-sm text-foreground/60">
        Please enter additional details below.
      </p>
      <Label htmlFor="name">Display name</Label>
      <Input
        type="text"
        name="name"
        placeholder="John Doe"
        defaultValue={user?.user_metadata.displayName ?? ''}
        required
      />
      <SubmitButton formAction={updateProfileAction}>
        Save Details
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
