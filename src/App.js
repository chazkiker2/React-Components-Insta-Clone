// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";
// Import the dummyData
import postsData from "./dummy-data";
//Import styles
import './App.css';

const App = () => {
	const [posts, setPosts] = useState(postsData);
	// const[liked, setLiked]
	// const [searchTerm, setSearchTerm] = useState("");

	const likePost = postId => {
		setPosts(posts.map(post => {
			if (postId === post.id) {

				return { ...post, likes: (post.likes + 1) };
			}
			return post;
		}));
	};

	return (
		<div className='App'>

			{/* <SearchBar 	searchTerm={searchTerm}	 /> */}
			<SearchBar />
			<Posts posts={posts} likePost={likePost} />
		</div>
	);
};

export default App;


// REGARDING STATES
// Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
// This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
// To make the search bar work (which is stretch) we'd need another state to hold the search term. 

// REGARDING likePost() function
/*
	This function serves the purpose of increasing the number of likes by one, of the post with a given id.

	The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
	This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

	Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
	The callback passed into `map` performs the following logic:
		- if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
		- otherwise just return the post object unchanged.
 */

//  REGARDING RETURN
/* Add SearchBar and Posts here to render them */ 
/* Check the implementation of each component, to see what props they require, if any! */ 