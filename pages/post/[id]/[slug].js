import React from "react";
import { f } from "../../../utils/fetch";

function post({ post: { title, content } }) {
	return (
		<section>
			<h1 dangerouslySetInnerHTML={{ __html: title.rendered }} />
			<div dangerouslySetInnerHTML={{ __html: content.rendered }} />
		</section>
	);
}

export async function getStaticProps({ params }) {
	const post = await f(
		`https://tfsnippets.ivorpad.com/wp-json/wp/v2/posts/${params.id}`
	);
	return {
		props: {
			post
		}
	};
}

export async function getStaticPaths(ctx) {
	const posts = await f(`https://tfsnippets.ivorpad.com/wp-json/wp/v2/posts`);
	const paths = posts.map(post => ({
		params: { id: post.id.toString(), slug: post.slug }
	}));

	return {
		paths,
		fallback: false
	};
}

export default post;
