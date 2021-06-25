import React, { useState, useEffect } from "react";
import Card from "./Card";
const HeroSection = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    )
      .then((response) => response.json())
      .then((users) => {
        setUsers(users.results);
      });
  }, []);

  function selectUser(user, e) {
    e.preventDefault();
    setData(user);
  }

  return (
    <>
      {data ? (
        <header>
          <div>
            <img src={data.picture.large} alt={data.name.title} />
          </div>

          <div>
            <h1>{`${data.name.title} ${data.name.first} ${data.name.last}`}</h1>
            <p>
              <i style={{ color: "#a259ff" }}>{data.location.street.number}</i>,
              {data.location.street.name}, {data.location.city},
              {data.location.state},<b>{data.location.country}</b>,
              {`${data.location.postcode}
          ${data.location.timezone.offset} - ${data.location.timezone.description}`}
            </p>
            <span>{data.gender}</span>
          </div>
        </header>
      ) : (
        ""
      )}
      <main>
        {users.map((user) => {
          return <Card key={user.email} selectUser={selectUser} user={user} />;
        })}
      </main>
    </>
  );
};

export default HeroSection;
