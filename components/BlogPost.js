import React from 'react'
import Link from 'next/link'

function BlogPost({title, slug, content, excerpt, categories, tags, date, id}) {
  return (
		<article>
			<h1>
				<Link href="/post/[id]/[slug]" as={`/post/${id}/${slug}`}>
					<a>{title.rendered}</a>
				</Link>
			</h1>
			<div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
		</article>
	);
}

export default BlogPost
