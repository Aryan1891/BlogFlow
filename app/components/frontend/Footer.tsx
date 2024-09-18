import { cn } from '@/lib/utils'
import {Separator} from '../../../components/ui/Separator'



async function Footer({ footerWidth = 'max-w-10xl ' }: { footerWidth?: string }) {
  const year = String(new Date().getFullYear())

  return (
    <>
      <div className="mt-10" /> {/* Add a margin top of 4 */}
      <footer
        className={cn(
          'container mx-auto flex flex-col py-5 md:px-16',
          footerWidth
        )}
      >
        <Separator className="h-[0.5px] bg-slate-400/60" />
        <div className="flex items-center py-3 text-sm font-semibold text-[#4B4B4B]">
          <time className="hidden sm:inline" dateTime={String(year)}>
            {year}{' '}
          </time>{' '}
          ©<p>Aryan Jangir</p>
          <a
            className="link ml-auto inline-flex items-center gap-1.5"
            href="https://github.com/Aryan1891/BlogFlow"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              <span className="bg-gradient-to-l from-gray-600 to-gray-300 bg-clip-text text-transparent">
                Github Repo 🚀
              </span>
            </span>
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
