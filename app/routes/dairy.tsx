import { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare'
import { createClient } from 'microcms-js-sdk'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'
import { ContentCard } from '~/components/content-card'

export const meta: MetaFunction = () => {
  return [
    { title: '日々のあれこれ | ダイモンTips' },
    {
      name: 'description',
      content:
        '毎日を全力で生きているダイモンが、大好きな植物のことや日々の学びをアウトプットしています。',
    },
  ]
}

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = createClient({
    serviceDomain: context.cloudflare.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: context.cloudflare.env.MICROCMS_API_KEY,
  })

  const response = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: {
      orders: '-createdAt',
      filters: 'category[equals]cgxkplli7x',
    },
  })
  return typedjson({ response })
}

export default function Dairy() {
  const { response } = useTypedLoaderData<typeof loader>()
  const { contents } = response

  return (
    <div className='container mx-auto w-full max-w-[1120px] py-8 md:py-10'>
      <div className='mb-10 space-y-4'>
        <h2 className='text-center text-md md:text-xl font-semibold'>
          日々あれこれ
        </h2>
        <p className='text-center text-sm md:text-md'>
          誰に向けるわけでもなく、日々のことを呟きます
        </p>
      </div>
      {contents.length > 0 ? (
        <div className='grid lg:grid-cols-3 gap-8 justify-center'>
          {contents.map((content) => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
      ) : (
        <div>
          <p className='text-muted-foreground text-center'>
            記事が見つかりません
          </p>
        </div>
      )}
    </div>
  )
}
