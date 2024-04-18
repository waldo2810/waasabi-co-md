import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionTitle from "@/components/ui/section-title";

export default async function Auth() {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle text="Backdoor" />
      <form
        className="w-full flex flex-col gap-3 md:max-w-sm"
        // action={authenticate}
      >
        <Input type="text" name="user" placeholder="user" required />
        <Input
          type="password"
          name="passcode"
          placeholder="passcode"
          required
        />
        <Button type="submit">Authenticate</Button>
      </form>
    </div>
  );
}
