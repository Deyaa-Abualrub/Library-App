import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          background: "black",
          margin: "20px",
          padding: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        Header
      </div>
    );
  }
}
class Main extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      books: [
        {
          id: 1,
          title: "مقدمة ابن خلدون ",
          author: "ابن خلدون ",
          isbn: "1289499030",
        },
        {
          id: 2,
          title: "الحاوي في الطب ",
          author: "ابو بكر الرازي ",
          isbn: "893847239479",
        },
      ],
    };
  }
  render() {
    return (
      <main
        style={{ display: "flex", margin: "20px", justifyContent: "center" }}
      >
        {this.state.books.map((item) => (
          <div
            className="card"
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>{item.title}</h2>
            <p>
              <strong>Author:</strong> {item.author}
            </p>
            <p>
              <strong>ISBN:</strong> {item.isbn}
            </p>
          </div>
        ))}
      </main>
    );
  }
}
class Footer extends Component {
  render() {
    return (
      <div
        style={{
          background: "black",
          margin: "20px",
          padding: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        Footer
      </div>
    );
  }
}

function Home() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default Home;
