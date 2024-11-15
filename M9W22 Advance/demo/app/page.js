import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello world!</h1>
      <div>
  
        <a href="#" className="text-lime-500 text-xlg hover:text-lime-100 md:text-lime-800" >Button</a>
      </div>
    </div>
  );
}

/*
  <Link href="/" component="<h1>Hello</h1> />"

*/
