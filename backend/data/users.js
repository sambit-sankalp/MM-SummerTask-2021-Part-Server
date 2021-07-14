import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'


dotenv.config()


const users = [
    {
        name: 'Admin User',
        email: 'admin@mondaymorning.nitrkl.ac.in',
        password: bcrypt.hashSync(process.env.ADMIN, 10),
        isAdmin: true
    },
    {
        name: 'Raju Ray',
        email: 'raju@mondaymorning.nitrkl.ac.in',
        password: bcrypt.hashSync(process.env.RAJU, 10),
    },
    {
        name: 'Ram Ray',
        email: 'ram@mondaymorning.nitrkl.ac.in',
        password: bcrypt.hashSync(process.env.RAM, 10),
    },
]

export default users