// /pages/api/[script].ts
import { NextApiRequest, NextApiResponse } from 'next'
import { scripts } from '@/utils/scripts'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { script } = req.query
  const data = scripts.find(s => s.slug === script)
  if (!data) return res.status(404).json({ error: 'Script não encontrado' })

  res.status(200).json({
    name: data.name,
    loadstring: `loadstring(game:HttpGet("https://bypass-tcc-orcin.vercel.app/api/${data.slug}"))()`
  })
}
