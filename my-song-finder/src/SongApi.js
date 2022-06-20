import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Song() {
  const [ResourceType, setResourceType] = useState("post");
  const [items, setItems] = useState([{ title: "no Item", link: "#" }]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "25fa114ee5msh66127afb399db09p1e29b1jsn559429d2a626",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const [name, setName] = useState("adele");
  const [Change, SetChange] = useState("");
  useEffect(() => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`, options)
      .then((response) => response.json())
      .then((json) => setItems(json.data))
      .catch((err) => console.error(err));
  }, [ResourceType]);
  console.log(items);
  function handleChange(event) {
    console.log(event.target.value);
    SetChange(event.target.value);
  }
  function HandleClick() {
    setName(Change);
  }
  return (
    <>
      <input type="text" onChange={handleChange}></input>
      <button onClick={HandleClick}>search</button>
      <button onClick={() => setResourceType("post")}>Posts</button>
      <button onClick={() => setResourceType("users")}> Users </button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <div>
        {items.map((item) => {
          // {
          //   JSON.stringify(item.title);
          // }
          return (
            <div>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img
                  variant="top"
                  src={`https://cdns-images.dzcdn.net/images/artist/${item.md5_image}/250x250-000000-80-0-0.jpg`}
                /> */}
                <Card.Body>
                  {/* <Card.Title>{item.title}</Card.Title> */}
                  <Card.Text></Card.Text>
                  <Button variant="primary">
                    {/* <a href={item.link}>Leasten</a> */}
                  </Button>
                </Card.Body>
              </Card>{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}

// https://cdns-images.dzcdn.net/images/artist/${item.md5_image}/250x250-000000-80-0-0.jpg
//         <Card style={{ width: "18rem" }}>
//           <Card.Img
//             variant="top"
//             src={`https://cdns-images.dzcdn.net/images/artist/${item.md5_image}/250x250-000000-80-0-0.jpg`}
//           />
//           <Card.Body>
//             <Card.Title>{item.title}</Card.Title>
//             <Card.Text></Card.Text>
//             <Button variant="primary">
//               <a href={item.link}>Leasten</a>
//             </Button>
//           </Card.Body>
//         </Card>
