import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
const App = () => {
  let date = new Date();
  let dateString =
    // date.getUTCFullYear() +
    // "/" +
    // (date.getUTCMonth() + 1) +
    // "/" +
    // date.getUTCDate() +
    // " " +
    date.getUTCHours() +
    ":" +
    date.getUTCMinutes() +
    ":" +
    date.getUTCSeconds();
  return (
    <div className="ui container comment">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jack"
         timeStamp={dateString}
          postMessage="Good Times"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
         timeStamp={dateString}
          postMessage="Say What?"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Mack"
         timeStamp={dateString}
          postMessage="Up in the sky "
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
