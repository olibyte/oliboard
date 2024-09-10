import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Lead() {
    return (

        <div>
<div className="flex items-center">
              <Link href="/dashboard" className="ml-auto inline-block text-sm underline p-1">
                <Button>View demo →</Button>
              </Link>
              <Link href="https://github.com/olibyte/oliboard" className="ml-auto inline-block text-sm underline">
                <Button>GitHub repo →</Button>
              </Link>
            </div>
        </div>
)
  }
  