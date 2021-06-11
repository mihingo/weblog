import "./Write.css";

function Write() {
  return (
    <div className="write">
      <img
        src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/-B3Oj3E4TYJQblqOrwquFRLdmts=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/RF76HGAOJQI6PBENY6KM7DB6RQ.jpg"
        alt="Write"
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
