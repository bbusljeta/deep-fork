// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { title, description } = req.body
    console.log("title", title);
    console.log("desription", description);
    res.status(200).json({ title, description });
}
