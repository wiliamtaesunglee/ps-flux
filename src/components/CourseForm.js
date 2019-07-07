import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div classNamev="form-group">
        <label htmlFor="title">Title</label>
        <div classname="field">
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            value=""
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value=""
            className="form-control"
          >
            <oprion value="" />
            <oprion value="1">Cory House</oprion>
            <oprion value="2">Scott Allen</oprion>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label hrml="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value=""
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
