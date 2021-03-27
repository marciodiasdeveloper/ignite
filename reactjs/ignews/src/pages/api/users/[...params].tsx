import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const id = request.query;
    
    const users = [
        { id: 1, name: 'Márcio' },
        { id: 2, name: 'Marielle' },
        { id: 3, name: 'Hugo' },
    ];

    return response.json(users);
}