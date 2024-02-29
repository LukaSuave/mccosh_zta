"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export function MainNav() {
  const { theme } = useTheme()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src='/logo.png' alt='zim tax app logo' width={40} height={40}/>
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
