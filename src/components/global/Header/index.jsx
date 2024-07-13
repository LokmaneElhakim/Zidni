"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase/config";
import { Button, buttonVariants } from "../../ui/button";
import { useState } from "react";

import { CircleUser, Search, Menu, ExternalLink } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown";
import { cn } from "../../../utils/cn";
import { ComboboxDemo } from "./searchCourses";
const Header = () => {
  const [user] = useAuthState(auth);
  // const user = true; /** for preview mode only */
  const router = useRouter();
  const [selected, setSelected] = useState("home");

  return (
    <>
      <header className="z-50 sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link
          href="/"
          className="ml-4 flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <img
            src="/logo/usthb.png"
            alt="logo"
            width={38}
            height="auto"
            className="mr-12 ml-2"
          />
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:!items-center md:gap-4 md:text-sm lg:gap-6">
          <Link
            href="/"
            className={cn(
              ` ${
                selected === "home"
                  ? "text-foreground"
                  : "text-muted-foreground"
              }transition-colors hover:text-foreground`
            )}
            onClick={() => setSelected("home")}
          >
            Home
          </Link>
          <Link
            href={"/docs"}
            className={cn(
              `flex items-center ${
                selected === "docs"
                  ? "!text-foreground"
                  : "!text-muted-foreground"
              } hover:text-foreground`
            )}
            onClick={() => setSelected("docs")}
          >
            Docs
          </Link>
          <Link
            href="/courses"
            className={` ${
              selected === "courses"
                ? "text-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
            onClick={() => setSelected("courses")}
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className={` ${
              selected === "contact"
                ? "text-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
            onClick={() => setSelected("contact")}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={` ${
              selected === "blog" ? "text-foreground" : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
            onClick={() => setSelected("blog")}
          >
            Blog
          </Link>
        </nav>
        <div className="flex w-full items-center justify-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <ComboboxDemo />
          </form>
          <ThemeToggler />
          <div className="h-full m-0 p-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full h-10 w-10 flex items-center justify-center"
                >
                  {user ? (
                    user.photoURL ? (
                      <img
                        src={user?.photoURL}
                        className="rounded-full h-full w-full"
                      />
                    ) : (
                      <CircleUser className="h-5 w-5" />
                    )
                  ) : (
                    <Menu className="h-5 w-5 " />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <div className="second-zindex">
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {user?.displayName ?? <p>Pages</p>}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {user && (
                    <>
                      <DropdownMenuItem>
                        <Link href="/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                    </>
                  )}

                  <DropdownMenuItem>
                    <Link href="/docs" className="h-full w-full">
                      Docs
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/courses" className="h-full w-full">
                      Courses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/contact" className="h-full w-full">
                      Contact
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/blog" className="h-full w-full">
                      Blog
                    </Link>
                  </DropdownMenuItem>
                  {user ? (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <button
                          onClick={() => {
                            signOut(auth);
                            router.push("/signin");
                          }}
                        >
                          Logout
                        </button>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/signin">Sign in</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </div>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
