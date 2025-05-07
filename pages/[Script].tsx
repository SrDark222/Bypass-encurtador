import { GetServerSideProps } from 'next'
import { scripts } from '@/utils/scripts'

export default function ScriptPage({ name, loadstring }) {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>{name}</h1>
      <p>Copia e cola esse monstro no Roblox:</p>
      <textarea
        value={loadstring}
        readOnly
        style={{ width: '100%', height: '80px', marginTop: '10px' }}
      />
      <button
        onClick={() => navigator.clipboard.writeText(loadstring)}
        style={{ marginTop: '10px' }}
      >
        Copiar
      </button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const script = ctx.params?.script
  const data = scripts.find(s => s.slug === script)
  if (!data) return { notFound: true }

  return {
    props: {
      name: data.name,
      loadstring: `loadstring(game:HttpGet("https://url.vercel.app/api/${data.slug}"))()`
    }
  }
}
