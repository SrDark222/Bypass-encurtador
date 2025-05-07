import Link from 'next/link'
import { scripts } from '@/utils/scripts'

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Scripts do DK</h1>
      <ul>
        {scripts.map((script) => (
          <li key={script.slug}>
            <Link href={`/${script.slug}`}>
              {script.name} - {script.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
