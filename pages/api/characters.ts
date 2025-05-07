// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '@/src/interfaces';



export default async function characters(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  try {
    const response = await fetch(`${process.env.BASE_URL}/character`);

    const characters: Data = await response.json();

    console.log(characters);

    res.status(200).json({...characters});
  } catch (e) {
    res.status(500).json({ok: false, e});
  }

}
