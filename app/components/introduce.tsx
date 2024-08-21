import { Link } from '@remix-run/react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
// import avatar from '~/image/katada-avatar.png'
import x from '~/image/x-icon.png'

export const Introduce = () => {
  return (
    <div className='border rounded p-5 space-y-4'>
      <div className='flex flex-row gap-3'>
        <Avatar>
          <AvatarImage src={''} alt='ダイモンシュウのアイコン' />
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
        <div className='space-y-2'>
          <p className='font-bold tracking-wider'>ダイモン シュウ</p>
          <div className='flex flex-row gap-2 items-baseline'>
            {/* <Link to='https://github.com/aiirononeko' target='_blank'> */}
            {/*   <img src={github} width='24px' height='24px' /> */}
            {/* </Link> */}
            <Link to='https://x.com/donalddshu1' target='_blank'>
              <img src={x} width='20px' height='20px' />
            </Link>
          </div>
        </div>
      </div>
      <div className='py-1'>
        <p className='tracking-wider text-sm leading-6'>
          人間界のエイリアン植物こと、ダイモンです！
        </p>
        <p className='tracking-wider text-sm leading-6'>大好きな植物のことや、日々の学びをアウトプットしています。</p>
      </div>
    </div>
  )
}
