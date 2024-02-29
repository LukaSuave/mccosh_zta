import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "./ui/button"
import { MailIcon } from "lucide-react"

export const Header = () => {
  return (
    <section className="grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Zim Tax App 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Note: Zim Tax App is for general guidance only and
          should not be used for exact tax or payroll calculations. It{"'"}s not
          affiliated with any service of our services and doesn{"'"}t offer tax
          or legal advice. Consult a professional for specific financial
          concerns.
        </p>
        <p className="mt-16"><span>A service by <span className="text-xl sm:text-3xl text-sky-600">MASTERWAY CONSULTING</span></span></p>
        <p className="ml-16"><span className="text-sm sm:text-xl">AUDIT AND EXECUTIVE SERVICES</span></p>
        <p className="text-orange-500 mt-4 flex "><MailIcon className="pr-3 h-8 w-8 text-sky-500"/>masterwayconsulting@gmail.com</p>
        <p className="mt-8">Developed by <span className="text-xl sm:text-3xl text-sky-600">Emmanuel Senengu</span></p>
        <p className="text-orange-500 mt-4 flex"><MailIcon className="pr-3 h-8 w-8 text-sky-500" />lukasuave6@gmail.com</p>
      </div>
      <hr className="mt-10" />
    </section>
  )
}
