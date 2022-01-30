// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { firestore } from '@common/firebase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { title, description } = req.body
    await firestore.collection('cards').doc().create({ title, description });
    res.status(200).json({ title, description });
}
