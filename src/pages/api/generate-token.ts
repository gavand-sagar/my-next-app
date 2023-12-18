import { readArrayFromFile } from '@/services/utils/file-utils'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string,
  token: string
}

type User = {
  username: string,
  password: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let body: User = req.body;
  let data = readArrayFromFile<User>('./users.json');
  if (data.some(x => x.username == body.username && x.password == body.password)) {
    let token = jwt.sign({ username: body.username }, "ABCBCB", { expiresIn: '10m' })
    res.status(200).json({ token: token, message: "created" })
  } else {
    res.status(200).json({ token: "", message: "Not created" })
  }

}