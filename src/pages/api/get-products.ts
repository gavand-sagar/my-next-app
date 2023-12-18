import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import jwt from 'jsonwebtoken'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let token: string = req.headers['token'] as string;

    try {
        jwt.verify(token, "ABCBCB")
    } catch {
        res.status(403).json({ message: "unauthorize" })
        return;
    }

    fetch('https://dummyjson.com/products?limit=20')
        .then(x => x.json())
        .then(x => {
            res.status(200).json(x)
        })

} 