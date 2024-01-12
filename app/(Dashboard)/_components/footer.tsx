import Link from "next/link"
import FooterList from "./footer-list"
import { FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="bg-black text-slate-200 text-lg mt-16    bottom-0 w-full">
          <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
            <FooterList>
              <Link href="#">Udemy&nbsp;Bussiness</Link>
              <Link href="#">Teach&nbsp;on&nbsp;Udemy</Link>
              <Link href="#">Get the app</Link>
              <Link href="#">About us</Link>
              <Link href="#">Contact us</Link>
            </FooterList>
            <FooterList>
              <Link href="#">Career</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Help&nbsp;and&nbsp;Support</Link>
              <Link href="#">Affiliate</Link>
              <Link href="#">Investors</Link>
            </FooterList>
            <FooterList>
            <Link href="#">Terms</Link>
              <Link href="#">Privacy policy</Link>
              <Link href="#">Cookie&nbsp;settings</Link>
              <Link href="#">Sitemap</Link>
              <Link href="#">Accessibilty&nbsp;statement</Link>
            </FooterList>
            <FooterList>
                <h1>Social Logins</h1>
                <div className="flex gap-4 mt-4 cursor-pointer">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <GithubIcon />
                </div>
            </FooterList>
          </div>
      </footer>
    )
}