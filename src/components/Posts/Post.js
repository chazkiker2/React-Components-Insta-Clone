import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
	// 🔥 Make sure the parent of Post is passing the right props!
	const [liked, setLiked] = useState(false);
	const { post, likePost } = props;

	const likePostOnce = () => {
		if (!liked) {
			setLiked(true);
			likePost(post.id);
		}
	}

	return (
		<div className='post-border'>
			<PostHeader
				username={post.username}
				thumbnailUrl={post.thumbnailUrl}
			/>
			<div className='post-image-wrapper'>
				<img
					alt='post thumbnail'
					className='post-image'
					src={post.imageUrl}
				/>
			</div>
			{/* Is LikeSection getting all the props it needs to work correctly? */}
			<LikeSection numberOfLikes={post.likes} likePost={() => likePostOnce()} liked={liked} />
			{/* Comments also wants its props! */}
			<Comments comments={post.comments} />
		</div>
	);
};

export default Post;
