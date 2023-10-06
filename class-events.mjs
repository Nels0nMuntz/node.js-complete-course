import EventEmitter from 'events';

const LIKE_POST_EVENT = 'likePost';
const LIKE_ERROR_EVENT = 'likeError';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on(LIKE_POST_EVENT, (username) =>
      console.log(`${username} liked your post`)
    );
    this.on(LIKE_POST_EVENT, () => post.showLikesQty());
    this.on(LIKE_ERROR_EVENT, (error) => console.log(error.message))
  }

  like(username) {
    if(!username) {
      this.emit(LIKE_ERROR_EVENT, new Error("No username in the request"))
      return
    }
    this.likesQty += 1;
    this.emit(LIKE_POST_EVENT, username);
  }

  showLikesQty() {
    console.log(`Your post have ${this.likesQty} likes`);
  }
}

const post = new Post(
  'Carl',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora dolor consectetur, nulla quis, veritatis in dignissimos sit impedit autem, beatae repellat! Incidunt, veritatis harum! Quidem nulla voluptate eligendi sequi!'
);

post.like('Karyn Ashley');

setTimeout(() => post.like('Karyn Ashley'), 1000);
setTimeout(() => post.like('Kirk Hogan'), 2000);
setTimeout(() => post.like(), 3000);
