"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, Github } from "lucide-react";
import { Button, buttonVariants } from "./ui/Button";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-yH2hNqJeVhFgKXbSoT05cbF4+3VvYc0Z8uQpD/hFYp7LQfXqj9yHqFfVYc4uR7p8bRTHR/3N7J9s4dKqk2hzYQ=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>;

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Memora.</span>
          </Link>

          {/* <MobileNav isAuth={!!user} /> */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Sign In
              </LoginLink>
              <RegisterLink className={buttonVariants({ size: "sm" })}>
                Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
              </RegisterLink>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() =>
                  window.open("https://github.com/vishwa-vj21", "_blank")
                }
              >
                {" "}
                <Github className="h-5 w-5" />{" "}
              </Button>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
