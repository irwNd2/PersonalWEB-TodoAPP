import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center py-20 h-full font-lato">
      <p className="text-2xl font-bold text-orange-400">Oppss...</p>
      <div className="flex flex-col items-center">
        <p className="px-2">{"We couldn't find find what you're looking for"}</p>
        <Link href="/" className="px-2 hover:text-orange-200 relative group font-bold text-lg">
          Get back to Home
          <span className={`absolute -bottom-1 rounded-xl left-0 h-0.5 bg-green-400 transition-all group-hover:w-full`}></span>
        </Link>
      </div>
    </div>
  );
}
