import Link from 'next/link'
import Layout from './components/layout'
 
export default function NotFound() {
  return (
		<Layout>
			<h2 className='error'>404 Not Found</h2>
			<p className='error'>Could not find requested resource</p>
			<Link className='error-link' href="/">Return Home</Link>
    </Layout>
  )
}