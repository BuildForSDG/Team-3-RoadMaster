import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

describe("contact page", () => {
  afterEach(cleanup);
  it("renders contact address", () => {
    let tree = renderer.create(<ContactAddress />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders contact form with invalid subject error", () => {
    let { getByTestId, getByText, getByPlaceholderText } = render(
      <ContactForm />
    );
    let err = getByTestId("error");
    let errorMsg1 = "*Subject Too Short!";
    expect(err).toHaveTextContent("");
    fireEvent.change(getByPlaceholderText("Enter Your Name"), {
      target: { value: "Joshua" },
    });
    fireEvent.change(getByPlaceholderText("Enter Your Email"), {
      target: { value: "jo@jo" },
    });
    fireEvent.change(getByPlaceholderText("Your Subject"), {
      target: { value: "Hi" },
    });
    fireEvent.change(getByPlaceholderText("Message"), {
      target: { value: "React.js is the most popular frontend framework" },
    });
    fireEvent.click(getByText("Send Message"));
    expect(err).toHaveTextContent(errorMsg1);
  });
  it("renders contact form with invalid message error", () => {
    let { getByTestId, getByText, getByPlaceholderText } = render(
      <ContactForm />
    );
    let err = getByTestId("error");
    let errorMsg2 = "*Message Too Short!";
    expect(err).toHaveTextContent("");
    fireEvent.change(getByPlaceholderText("Enter Your Name"), {
      target: { value: "Joshua" },
    });
    fireEvent.change(getByPlaceholderText("Enter Your Email"), {
      target: { value: "jo@jo" },
    });
    fireEvent.change(getByPlaceholderText("Your Subject"), {
      target: { value: "Hello World" },
    });
    fireEvent.change(getByPlaceholderText("Message"), {
      target: { value: "No message" },
    });
    fireEvent.click(getByText("Send Message"));
    expect(err).toHaveTextContent(errorMsg2);
  });
  it("renders contact form with success message", () => {
    let { getByTestId, getByText, getByPlaceholderText } = render(
      <ContactForm />
    );
    let msg = getByTestId("msg");
    let info = "Message Sent";
    expect(msg).toHaveTextContent("");
    fireEvent.change(getByPlaceholderText("Enter Your Name"), {
      target: { value: "Joshua" },
    });
    fireEvent.change(getByPlaceholderText("Enter Your Email"), {
      target: { value: "jo@jo" },
    });
    fireEvent.change(getByPlaceholderText("Your Subject"), {
      target: { value: "Hello World" },
    });
    fireEvent.change(getByPlaceholderText("Message"), {
      target: {
        value:
          "I have a message and a subject whose length greater than 15 and 5 respectively",
      },
    });
    fireEvent.click(getByText("Send Message"));
    expect(msg).toHaveTextContent(info);
  });
  it("renders contact map", () => {
    let tree = renderer.create(<ContactMap />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
