import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
  checkIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import homeimage from '@/images/shanthaverigopalagowda.png'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
function HeroPhoto() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div
          className={clsx(
            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
          )}
        >
          <Image
            src={homeimage}
            alt="Shri Shantaveri Gopala Gowda Hero Image"
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function AvatarPhoto() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Shri Shantaveri Gopala Gowda Hero Image"
              src={homeimage}
              class="w-100% absolute inset-0 h-full object-cover drop-shadow-lg"
            />
          </div>
          <div class="lg:py-24">
            <h2 class="text-3xl font-bold text-insp-300 dark:text-white sm:text-4xl ">
              Shri Shantaveri Gopala Gowda
            </h2>
            <p class="mt-4 text-gray-600 dark:text-white">
              Welcome to the official website dedicated to the life and legacy
              of Shantaveri Gopala Gowda, one of the most prominent socialist
              leaders of Karnataka. Here, you will discover his early
              involvement in the freedom movement, his introduction to
              socialism, and his contributions to shaping the political and
              social landscape of the state. Join us as we commemorate his
              centenary and pay tribute to his enduring legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
function Example() {
  return (
    <div className="mt-8 lg:py-16">
      <div className="pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-12 aspect-h-15 overflow-hidden rounded-xl shadow-xl dark:shadow-slate-800 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://user-images.githubusercontent.com/71520844/213859867-404c457a-4ffd-4f63-832f-051d83a14d97.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-4">
              <blockquote>
                <div>
                  <p className="mt-6 flex justify-center text-2xl font-bold italic text-insp-200 dark:text-zinc-100 lg:justify-start lg:text-4xl">
                    Shantaveri Gopala Gowda
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="px-1 text-base text-zinc-600 dark:text-zinc-400">
                    Welcome to the official website dedicated to the life and
                    legacy of Shantaveri Gopala Gowda, one of the most prominent
                    socialist leaders of Karnataka. Here, you will discover his
                    early involvement in the freedom movement, his introduction
                    to socialism, and his contributions to shaping the political
                    and social landscape of the state. Join us as we commemorate
                    his centenary and pay tribute to his enduring legacy.
                  </p>
                </footer>
                <div className="max-w-2xl">
                  <div className="mt-6 flex justify-center gap-6 lg:justify-start">
                    <SocialLink
                      href="https://twitter.com"
                      aria-label="Follow on Twitter"
                      icon={TwitterIcon}
                    />
                    <SocialLink
                      href="https://instagram.com"
                      aria-label="Follow on Instagram"
                      icon={InstagramIcon}
                    />
                    <SocialLink
                      href="https://linkedin.com"
                      aria-label="Follow on LinkedIn"
                      icon={LinkedInIcon}
                    />
                    <SocialLink
                      href="https://youtube.com"
                      aria-label="Follow on Facebook"
                      icon={YouTubeIcon}
                    />
                    <SocialLink
                      href="https://facebook.com"
                      aria-label="Follow on Facebook"
                      icon={checkIcon}
                    />
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Poem() {
  return (
    <div className="pt-16 lg:py-24">
      <div className="bg-grey-900 pb-8 lg:relative lg:z-10 lg:pb-0">
        <div className="items-center lg:ml-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-4 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0">
              <div className="aspect-w-10 aspect-h-12 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  // src="https://user-images.githubusercontent.com/71520844/213867004-ac0bcf99-94cf-43e6-a949-d1ee8f5e9b55.jpg"
                  src="https://user-images.githubusercontent.com/71520844/213868001-d2e719ce-81b0-49e6-bbfd-392473bc8e86.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="text-grey-900 h-12 w-12 opacity-25 dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-base font-medium dark:text-white">
                    ಬಂದೆ ಬಿಟ್ಟನೆ ಶಾರ್ವರಿ<br></br>
                    ಬಡವನ ಈ ಬಾಗಿಲಿಗೂ<br></br>
                    ಬಂದಂತೆ ಹಿಂದೆ ರಾಯಭಾರಿ ವಿದುರನ ಮನೆಗೆ.<br></br>
                    ಹೇಗೆ ಇದಿರುಗೊಳ್ಳಲಿ ?<br></br>
                    ಎಂತು ಸತ್ಕರಿಸಲೀ ಕಾಲಪುರುಷನ ?<br></br>
                    ಇಲ್ಲ ಮನೆಯೊಳಗೊಂದಿನಿತು ಅವಲಕ್ಕಿ ಕೂಡ,<br></br>
                    ವಂಚಿಸಿದೆ, ತಂದೆ ತಾಯಿ ಮಡದಿಮಕ್ಕಳ<br></br>
                    “ನಾಳೆ ತರುವೆ” , “ನಾಳೆ ಕೊಡುವೆ” ಎಂದು<br></br>
                    ಬರಲಿಲ್ಲ ಆ ನಾಳೆ, ನನ್ನ ನ್ನೇ ವಂಚಿಸಿಕೊಂಡೆ<br></br>
                    ನೆಮ್ಮಿ ಎಂದೂ ಬರದ ಆ ನಂಬುಗೆಯು ನಾಳೆಯನು<br></br>
                    ವಂಚಿಸಲಾರೆ ಇವನ , ಈ ಕಳ್ಳ ಕಾಲನ.<br></br>
                    ಅವಗೆ ಗೊತ್ತಿರುವುದನೆ, ಹೇಳಿಕೊಳ್ಳುವ ಮತ್ತೆ<br></br>
                    ಆದೀತು ನನ್ನ ಈ ಎದೆಭಾರ ಹಗುರ.<br></br>
                    ಎಷ್ಟಾದರೂ ಜಗಕೆ ಮಿತ್ರನಲ್ಲವೆ ಅವನು ?<br></br>
                    ಬೇಗನೇ ಉಣಬಡಿಸಿ ಆಡುವೆನು ಬೆಲ್ಲದ ಮಾತ,<br></br>
                    ಶಾರ್ವರಿ, ಇಗೋ ಇತ್ತೆ ನಿನಗೆ ಸ್ವಾಗತ !<br></br>
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">
                    - Giridhari
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const timeline = [
  {
    id: 1,
    date: '14 - March, 1923',
    title: 'Birth',
    description: '',
  },
  {
    id: 2,
    date: '1941',
    title: 'Entered India’s Freedom Struggle Movement',
    description: '',
  },
  {
    id: 3,
    date: '1942',
    title: 'Quit India Movement',
    description:
      'Took active part in the Quit India Movement, Was kept in Shimoga Jail, was running a Night School for Harijans during this time.',
  },
  {
    id: 4,
    date: '1946',
    title: 'Student Union Congress ',
    description:
      'Participated in the Student Union Congress of Nanjangud and left Intermediate studies.',
  },
  {
    id: 5,
    date: '1947',
    title: 'General Secretary',
    description: 'In Shimoga Student Congress, Fought as General Secretary',
  },

  {
    id: 6,
    date: '1948',
    title: 'Instrumental in the alliance between Congress and Samajwadi Party',
    description: '',
  },
  {
    id: 7,
    date: '1949',
    title: 'Karnataka Samajwadi Party',
    description:
      'In Shimoga, organised the First Association of Karnataka Samajwadi Party',
  },
  {
    id: 8,
    date: '1951',
    title: 'Successfully lead the Kagodu Farmers’ Satyagraha movement ',
    description: '',
  },
  {
    id: 9,
    date: '1951',
    title: 'Met Dr.RamamanoharLohia in Kagodu and Jayaprakash Narayan',
    description: '',
  },
  // {
  //   id: 10,
  //   date: '1951',
  //   title: 'Met ',
  //   description: '',
  // },
  {
    id: 11,
    date: '1952',
    title: 'Got Elected as M.L.A.',
    description: 'from Mysore Vidhana Sabha',
  },
  {
    id: 12,
    date: '1955',
    title: 'Rashtriya Samajwadi Party',
    description:
      'Was appointed as a key member of the Rashtriya Samajwadi Party',
  },
  {
    id: 13,
    date: '1957',
    title: 'Thirthahalli Constituency',
    description:
      'Contested from Thirthahalli constituency and lost but established the Karnataka Samajwadi Youth Association.',
  },
  {
    id: 14,
    date: '1960',
    title: 'Goa Agitation',
    description:
      'Took active part in the Goa Agitation and published the Samajwadi Party’s newsletter called “Margadarshi”',
  },
  {
    id: 15,
    date: '1962',
    title: 'Elected as M.L.A',
    description:
      'from Thirthahalli and was heading the Samajwadi Party Workers Union in Sagara.',
  },
  {
    id: 16,
    date: '1964',
    title: 'Marriage to Smt. Sonakka',
    description: '',
  },
  {
    id: 17,
    date: '1967',
    title: 'Re-elected as M.L.A',
    description:
      'Was re-elected as M.L.A. from the constituency of Thirthahalli. Daughter,Kum. Ila Geeta was born.',
  },
  {
    id: 18,
    date: '1968',
    title: 'Son, Mst. Ram Manohar was born',
    description: '',
  },
  {
    id: 19,
    date: '1971',
    title: 'Was admitted to Victoria Hospital',
    description:
      'Underwent prolonged treatment for 6 months which was unsuccessful, was cremated in the Wilson Garden Crematorium.',
  },
]
function Timeline() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-insp-200 dark:text-zinc-100 sm:text-3xl">
        About Shantaveri Gopala Gowda
      </h1>
      <ol class="border-l border-gray-300">
        {timeline.map((item) => (
          <li>
            <div class="flex-start flex items-center pt-3">
              <div class="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
              <p class="text-sm font-semibold text-gray-600 dark:text-white">
                {item.date}
              </p>
            </div>
            <div class="mt-0.5 ml-4 mb-6">
              <h4 class="mb-1.5 text-xl font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h4>
              <p class="mb-3 text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Shantaveri Gopala Gowda - A Legacy of Political Activism and Social
          Reform
        </title>
        <meta
          name="description"
          content="Explore the life and legacy of Shantaveri Gopala Gowda, one of Karnataka's most prominent socialist leaders. Learn about his early involvement in the freedom movement, his introduction to socialism and his role in shaping the political landscape of the state. Discover his contributions to the 'Land for the Tiller' movement and his stance on the unification of Karnataka. A centenary tribute website"
        />
      </Head>
      <Container className="mt-3">
        <Example />
        {/* <AvatarPhoto /> */}
        {/* <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-insp-200 dark:text-zinc-100 sm:text-5xl">
            Shri Shantaveri Gopala Gowda
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Welcome to the official website dedicated to the life and legacy of
            Shantaveri Gopala Gowda, one of the most prominent socialist leaders
            of Karnataka. Here, you will discover his early involvement in the
            freedom movement, his introduction to socialism, and his
            contributions to shaping the political and social landscape of the
            state. Join us as we commemorate his centenary and pay tribute to
            his enduring legacy.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div> */}
      </Container>
      <Poem />
      <Container>
        <Timeline />
      </Container>
      {/* <Photos /> */}
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
