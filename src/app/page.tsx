import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-4xl text-red-500 font-bold">Intern Nepal - V2</h1>
        <div className="my-4 flex gap-4">
          <Link href="/homepage">
            <Button>home page</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
