import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import NotFoundimage from '../../public/images/image.png'

export default function NotFound() {
  return (
    <section className='pb-24 pt-40'>
      <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
          <Image
          className='flex-1 rounded-lg grayscale tracking-tight text-muted-foreground sm:text-5xl'
          src={NotFoundimage}
          alt='Shaik Reshma'
          width={175}
          height={175}
          priority
        />
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-1 text-base text-muted-foreground'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Link
                  href='/'
                  className='inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground'
                >
                  <ArrowLeftIcon className='h-5 w-5' />
                  <span>Go back home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
