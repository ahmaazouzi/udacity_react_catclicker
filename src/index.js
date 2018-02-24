import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Image(props){
	return (<div><img src={props.post}></img></div>);
}

class Blog extends React.Component{
	constructor(props){
		super(props);
		this.state = {imaga: props.posts[0].data.source};
		this.changeImage = this.changeImage.bind(this);
		this.incrementIt = this.incrementIt.bind(this);
	}

	changeImage(e){
		// this.setState({imaga: e.target.id});
		this.setState({imaga: e.target.id});
	}
	incrementIt(){
		// <img src={this.state.imaga} onClick={this.incrementIt}></img>
	}
	render(){
		const posts = this.props.posts;
		const buttonas = posts.map(post => <button style={{marginLeft:2+'em'}} id={post.id} onClick={this.changeImage}>{post.data.name}</button>);
		return(
			<div>
			<div>{this.state.counta}</div>
			<div>{buttonas}</div>
			<Image post={this.state.imaga}/>
			<div>{this.state.count}</div>
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
  <Blog posts={lista} />,
  document.getElementById('root')
);