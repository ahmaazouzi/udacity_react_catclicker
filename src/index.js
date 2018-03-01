import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Image extends React.Component{
	render(){
		return (
			<div>
			<img alt='' src={this.props.post.data.source} onClick={this.props.incrementCount}></img>
			<div><h1>{this.props.post.data.name + ': ' + this.props.post.data.count}</h1></div>
			</div>
			)
	}
}

class CatClicker extends React.Component{
	constructor(props){
		super(props);
		this.state = {posts: props.posts, post: props.posts[0]};
		this.changeImage = this.changeImage.bind(this);
		this.incrementCount = this.incrementCount.bind(this);
		this.updatePosts = this.updatePosts.bind(this);
	}

	incrementCount(){
		const newPost = Object.assign({}, this.state.post);
		newPost.data.count++;
		this.setState({post: newPost});
	}

	updatePosts(){
		const selectedPost = this.state.posts.indexOf(this.state.post);
		let posts = Object.assign([], this.state.posts);
		posts[selectedPost] = this.state.post;
		this.setState({posts: posts});
	}

	changeImage(e){
		this.updatePosts();
		const postId = e.target.id;
		const selectedPost = this.props.posts.filter((post) => post.id.toString() === postId)[0];
		this.setState({post: selectedPost});
	}
	render(){
		const posts = this.state.posts;
		const buttonas = posts.map(post => <button style={{marginLeft:2+'em'}} key={post.id} id={post.id} onClick={this.changeImage}>{post.data.name}</button>);
		return(
			<div>
			<div>{buttonas}</div>
			<Image posts={this.state.posts} post={this.state.post} incrementCount={this.incrementCount}/>
			</div>
		)
	}
}


const lista = [{id:7, data:{name: 'bon', source: 'https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg', count:0}},
	{id:0, data:{name: 'hon',source: 'https://www.petmd.com/sites/default/files/why-does-my-cat-lick-me.jpg', count:0}},
	{id:1, data:{name: 'jojo', source: 'https://www.petmd.com/sites/default/files/cat-meow-8470847777_9f98b751c5_b.jpg', count:0}},
	{id:2, data:{name: 'jon', source: 'https://www.pets4homes.co.uk/images/articles/2390/more-information-on-the-attractive-and-unusual-serengeti-cat-548ff497a8260.jpg', count:0}},
	{id:3, data:{name: 'koko', source: 'https://www.pets4homes.co.uk/images/articles/3845/gm-1-and-gm-2-gangliosidosis-in-cats-586ce0b9808c1.jpg',count:0}},
	{id:4, data:{name: 'lon', source: 'https://www.pets4homes.co.uk/images/articles/4528/ten-strange-facts-about-cats-which-you-may-not-know-5a467613df200.jpg',count:0}},
	{id:5, data:{name: 'mon', source: 'https://www.pets4homes.co.uk/images/articles/726/large/0b5f14018c6686b9178e602715f0f7a9.jpg', count:0}},
	  {id:6, data:{name: 'toto', source: 'https://www.pets4homes.co.uk/images/articles/823/fun-fascinating-facts-about-cats-our-feline-friends-51a8d0d099a35.jpg', count:0}}
];

ReactDOM.render(
  <CatClicker posts={lista} />,
  document.getElementById('root')
);