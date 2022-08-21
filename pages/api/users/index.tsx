import data from './user.json';

export function getUsersList() {
  return data;
}

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const users = getUsersList();
      res.status(200).json(users);
    default:
        return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}