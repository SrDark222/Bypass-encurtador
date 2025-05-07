import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

const scripts = [
  {
    slug: 'hub-do-dk',
    name: 'Hub do DK',
    description: 'O melhor hub de todos.',
    rawUrl: 'https://raw.githubusercontent.com/SEUUSER/REPO/main/hub.lua'
  },
  {
    slug: 'esp-hack',
    name: 'ESP Hack',
    description: 'Veja inimigos por paredes.',
    rawUrl: 'https://raw.githubusercontent.com/SEUUSER/REPO/main/esp.lua'
  }
]

export default function ScriptPage({ script }) {
  const loadstring = `loadstring(game:HttpGet("${script.rawUrl}"))()`

  return (
    <>
      <Head>
        <title>{script.name} | Scripts DK</title>
      </Head>
      <main style={{ padding: '2rem', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
        <h1>{script.name}</h1>
        <p>{script.description}</p>
        <textarea
          readOnly
          value={loadstring}
          style={{ width: '100%', height: '80px', marginTop: '20px', fontSize: '14px' }}
        />
        <br />
        <button
          onClick={() => navigator.clipboard.writeText(loadstring)}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#111',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Copiar Loadstring
        </button>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: scripts.map(s => ({ params: { script: s.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const script = scripts.find(s => s.slug === params?.script)
  if (!script) return { notFound: true }

  return {
    props: {
      script
    }
  }
}
