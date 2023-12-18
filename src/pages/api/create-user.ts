import { pushToArrayInFile, readArrayFromFile } from '@/services/utils/file-utils'
import type { NextApiRequest, NextApiResponse } from 'next'
type ResponseData = {
    success: boolean
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
    if (body.username && body.password) {
        let data = readArrayFromFile<User>('./users.json');
        if (data.some(x => x.username == body.username)) {
            res.status(200).json({ success: false })
        } else {
            pushToArrayInFile('./users.json', body)
            res.status(200).json({ success: true })
        }
    } else {
        res.status(200).json({ success: false })
    }

}