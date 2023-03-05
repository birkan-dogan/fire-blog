import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewUpdateBlog = ({
  handleChange,
  handleSubmit,
  blog,
  handleQuillEdit,
}) => {
  return (
    <div className="new-blog">
      <form onSubmit={handleSubmit} className="content">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={blog.title}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          placeholder="Image Url"
          name="imageUrl"
          value={blog.imageUrl}
          onChange={handleChange}
          required
        />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={blog.content}
            onChange={handleQuillEdit}
            className="editor"
            required
          />
        </div>
        <div className="buttons">
          <button>Save as a draft</button>
          <button>Publish</button>
        </div>
      </form>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
        </div>

        <div className="item">
          <h1>Category</h1>
          {["art", "science", "technology", "design", "movie", "sports"].map(
            (item, index) => (
              <div className="cat" key={index}>
                <input type="radio" name="cat" value={item} id={item} />
                <label htmlFor={item}>
                  {item[0].toUpperCase() + item.slice(1, item.length)}
                </label>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NewUpdateBlog;
