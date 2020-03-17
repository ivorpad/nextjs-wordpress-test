import React from 'react'
import BlogPost from '../components/BlogPost';
import {f} from '../utils/fetch'


function blog({posts}) {
  return (
		<div>
			<h1>Blog</h1>
			{posts.map(post => (
				<BlogPost key={post.id} {...post} />
			))}
		</div>
	);
}

export async function getStaticProps() {
  const posts = await f(`https://tfsnippets.ivorpad.com/wp-json/wp/v2/posts`);
  return {
    props: { posts }
  }
}


export default blog
