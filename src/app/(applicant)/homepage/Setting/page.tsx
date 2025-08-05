import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <>
      <div className="flex gap-4 flex-col ">
        <div className=" ">
          <h1 className="mainh1">Setting</h1>
          <p className="text-xs text-[#475569] mt-1">
            Home <span className="text-[#1E293B]"> / Setting</span>
          </p>
        </div>
        <div className="BorderBgShadow  p-4  ">
          <h1 className="mainh2 mb-4">Change your Password</h1>
          <div className="flex flex-col gap-4">
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="oldPassword">Old Password</Label>
              <Input
                type="password"
                id="oldPassword"
                placeholder="*********************"
              />
            </div>
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                type="password"
                id="newPassword"
                placeholder="*********************"
              />
            </div>
            <div className="grid w-full  items-center gap-3">
              <Label htmlFor="comformPassword">Confirm New Password</Label>
              <Input
                type="password"
                id="comformPassword"
                placeholder="*********************"
              />
            </div>
            <Button variant={"saveButon"}>Save Password</Button>
          </div>
        </div>

        <div className="BorderBgShadow  p-4 flex gap-4 items-center justify-between">
          <div>
            <h1 className="mainh1">Deactivate account</h1>
            <p className="text-sm text-[#475569] mt-1">
              Once your account is deactivated, the process cannot be reversed.
              Please ensure your decision is final.
            </p>
          </div>
            <Button variant={"deleteButon"}>Deactivate Account</Button>
        </div>
      </div>
    </>
  );
}
