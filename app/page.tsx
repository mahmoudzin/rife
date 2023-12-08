import { Button, Logo } from "@/app/ui/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen py-3 bg-[url('/hero-image.jpg')] bg-cover bg-no-repeat bg-center 
    after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:dark:bg-black after:opacity-70 after:w-full after:h-full z-[1]"
    >
      {/* app bar */}
      <div className="relative container mx-auto md:px-4 xl:px-0 z-[2]">
        <nav className="flex justify-between">
          <Logo />
          <Button>
            <Link href="/register/login">Log in</Link>
          </Button>
        </nav>
        <div className="flex items-center flex-wrap min-h-[80vh] mt-5">
          {/* Highlists */}
          <div className="w-full md:w-1/2 ">
            <h2 className="text-primary mb-4 text-center text-xl">
              Maximize vocabulary retention with our AI bot
            </h2>
            <p className="mb-4 text-lg text-center">
              Use our system to memorize as many vocabulary words as possible
              with the help of our AI bot
            </p>
            <ul className="px-5 md:mx-0 list-none">
              <li className="flex mb-3">
                <span className="mr-3">📚</span>
                <p>Organize all your interesting vocabulary in one place</p>
              </li>
              <li className="flex mb-3">
                <span className="mr-3">💡</span>
                <p>
                  AI defines words, provides examples, and matches them with
                  expressive images.
                </p>
              </li>
              <li className="flex mb-3">
                <span className="mr-3">⏰</span>
                <p>Maximize word retention using spaced repetition.</p>
              </li>
              <li className="flex mb-3">
                <span className="mr-3">🎮</span>
                <p>
                  Gamify your word learning experience and enjoy reviewing and
                  memorizing new words.
                </p>
              </li>
            </ul>
          </div>
          {/* image */}
          <div className="w-full md:w-1/2 text-center hidden md:block">
            <Image
              className="inline"
              src="/learn.svg"
              alt="SVG Photo"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
