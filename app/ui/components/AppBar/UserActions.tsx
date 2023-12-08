import { Button } from "@/app/ui/components";

export default function UserActions() {
  return (
    <div className="hidden sm:flex mr-8">
      <Button className="text-white flex items-center text-lg rounded-md transition ease-in-out delay-150 bg-secondary py-1 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-secondary dark:hover:bg-indigo-500 duration-300">
        <div className="mr-2 text-white">+</div> Add
      </Button>
      <Button className="text-white ml-3 flex items-center text-lg rounded-md transition ease-in-out delay-150 bg-secondary py-1 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-secondary dark:hover:bg-indigo-500 duration-300">
        💧 Study
      </Button>
    </div>
  );
}
