import pg from 'pg'

if(!process.env.DATABASE_URL) {
	throw new Error('Database url was not found in environment')
}

export async function createPool () {
	const { Pool } = pg
	const pool = new Pool({
		connectionString: process.env.DATABASE_URL
	})
	return pool
}

export async function createAUser (email, message) {
	if (email === undefined || message === undefined) {
		return 'Missing Params'
	} 

	const pool =  await createPool()
	pool.query('INSERT INTO usuarios (email, message) VALUES ($1, $2)', [email, message], err => { console.error(err) })
}