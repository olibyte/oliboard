import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/TypographyH2";
import { TypographyLead } from "@/components/ui/TypographyLead";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TypographyH2/>
      <TypographyLead/>
        <LoginForm />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://olibyte.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          olibyte.io
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/olibyte/oliboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/olivercbennett"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn 
        </a>
      </footer>
    </div>
  );
}
