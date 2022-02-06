export const postDetails = () => {
  const [post, setpost] = useState();

  const { id } = useParams();

  useEffect(() => {
    getPost(lastItem).then(res=> res.json())
      .then((data) => setpost(data));
  }, [id]);

  if (post === undefined) {
    return <>Still loading...</>;
  }

  return <>
  <div class="form-collection">
            <label htmlFor="fileUpload">
              <i class="upload-icon fas fa-plus"></i>
            </label>
            {/* {this.state.Post.title ? <p>{this.state.Post.title}</p>:  <p>"No Post data"</p> } */}
            <input type="file" id="fileUpload" hidden="true" />
            <input
              class="title-text"
              name="title"
              type="text"
              placeholder="Title"
              value={post.title}
              onChange={(e) => {
                this.changeEvent(e);
              }}
              autoFocus="true"
            />
          </div>
          <div class="form-collection">
            <textarea
              class="story-text"
              name="description"
              placeholder="Tell you story..."
              value={post.description}
              onChange={(e) => {
                this.changeEvent(e);
              }}
              type="text"
            ></textarea>
            <button class="submit" onClick={() => this.validatePostContent()}>
              Publish
            </button>
          </div></>
};