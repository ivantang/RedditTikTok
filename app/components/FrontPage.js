import React, { useState, useEffect } from "react";
const snoowarp = require("snoowrap");

const r = new snoowarp({
  userAgent: "",
  clientId: "",
  clientSecret: "",
  username: "",
  password: ""
});

export const FrontPage = () => {
  const [frontPageTitle, setFrontPageTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await r.getHot();
      setFrontPageTitles(result);
    };

    fetchData();
  }, []);

  return (
    <div className="FrontPage">
      <p>Front Page (Hot)</p>
      {frontPageTitle.map(Submission => (
        <p>{Submission.title}</p>
      ))}
    </div>
  );
};
