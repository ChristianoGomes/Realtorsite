import Link from "next/link"


export const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center justify-between flex-wrap  h-20 w-full'>
            <p className="text-white">Next.js</p>
          <ul className=" flex-1 flex justify-end items-center gap-20  flex-nowrap cursor-pointer pr-10">
            <Link href="/" >
            <li>Home</li>
            </Link>
            <Link href="/about" >
            <li>About</li>
            </Link>
            <Link href="/contact" >
            <li>Contact</li>
            </Link>
          </ul>
        </nav>
    </div>
  )
}
