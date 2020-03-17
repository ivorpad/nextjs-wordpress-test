import React from 'react'
import Link from 'next/link'
function index() {
  return (
		<div>
			<h1>This is a homepage</h1>
			<p>
				Go to the <Link href="/blog"><a>blog</a></Link> page
			</p>
		</div>
	);
}

export default index
