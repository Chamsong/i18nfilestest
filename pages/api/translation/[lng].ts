// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
        const { lng } = req.query;
        /* const translation = await fetch(url)
        .then(response=>response.json())
        .then(json=> {return json})
        console.log(translation) 
        console.log(req.headers.host)*/
        if (req.method === "GET"){
            if (lng === 'es') {
                res.status(200).json({title: 'TITULO ES', footer: 'ARRIBA EL CAFÉ'})
            }
            if (lng === 'en') {
                res.status(200).json({title: 'TITLE EN', footer: 'MY SECOND NAME IS COFFEE'})
            }
        }
}