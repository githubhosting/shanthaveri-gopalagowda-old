import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}
const gallery = [
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery1.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery2.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery3.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery4.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery5.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery6.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery7.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery8.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery9.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery10.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery11.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery12.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery13.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery15.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery16.jpeg',
  'http://shanthaverigopalagowda.in//siteimg/galthunb/gallery14.jpeg',
]

export default function Gallery() {
  return (
    <>
      <Head>
        <title>About - Shri Shantaveri Gopala Gowda</title>
        <meta
          name="description"
          content="About - Shri Shantaveri Gopala Gowda"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <section class="overflow-hidden text-gray-700 ">
          <div class="container mx-auto px-5 py-2 lg:px-12 lg:pt-12">
            <div class="-m-1 flex flex-wrap md:-m-2">
              {gallery.map((item, index) => (
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src={item}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
