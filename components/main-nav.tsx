import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import sitelogo from "@/public/siteLogo.svg"
import sidelogo from "@/public/designLogo.svg"
import Image from "next/image"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
      <Image src={sidelogo} alt="logo" className="h-8 w-10"/>
        <span className="inline-block text-xl font-bold">
          <Image src={sitelogo} alt="logo" className="h-12 w-24 mt-2"/>
        </span>
      </Link>
    </div>
  )
}
