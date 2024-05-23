"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase/config";
import { Button, buttonVariants } from "../../ui/button";

import { CircleUser, Search, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown";
const Header = () => {
  const [user] = useAuthState(auth);
  // const user = true;
  const router = useRouter();
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
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/courses"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
        </nav>
        <div className="flex w-full items-center justify-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            {user ? (
              <div className="relative">
                {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  list="courses"
                  type="search"
                  placeholder="Search for courses..."
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
                {
                  // it's static just for the moment
                }
                <datalist id="courses">
                  <option value="sfsd" />
                  <option value="algebra 1" />
                  <option value="algebra 2" />
                  <option value="analyse 1" />
                  <option value="probability" />
                  <option value="stats" />
                </datalist> */}
              </div>
            ) : (
              <div className="hidden sm:block">
                <Link className={buttonVariants()} href={"/signin"}>
                  Sign In
                </Link>
                <span
                  className=" mx-2.5 h-6 w-px bg-gray-400"
                  aria-hidden="true"
                />
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={"/signup"}
                >
                  Get Started
                </Link>
              </div>
            )}
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
                    <Link href="/docs">Docs</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/courses">Courses</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/contact">Contact</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/blog">Blog</Link>
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
