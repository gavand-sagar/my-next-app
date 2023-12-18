import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).setHeader('Content-Type','text/html').send('<html><img src="https://pbs.twimg.com/media/EUsBZQjU8AEEF28?format=jpg&name=900x900"/></html>')
} 