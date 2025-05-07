import Link from 'next/link'

const scripts = [
  { slug: 'hub-do-dk', name: 'Hub do DK' },
  { slug: 'esp-hack', name: 'ESP Hack' }
]

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Scripts do DK</h1>
      <ul>
        {scripts.map(s => (
          <li key={s.slug}>
            <Link href={`/${s.slug}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
