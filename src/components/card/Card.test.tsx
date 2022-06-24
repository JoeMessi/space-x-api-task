import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { Card } from "./Card";

const defaultProps = {
  imgUrl: "mockImgUrl",
  rocketName: "MockRocketName",
  description: "MockDescription",
  wikipedia: "MockWiki",
};

describe("Card - component", () => {
  const renderCard = () => render(<Card {...defaultProps} />);

  it("should render Card with no errors", () => {
    const { getByTestId, getByText } = renderCard();
    expect(getByTestId("article-card")).toBeInTheDocument();
    expect(getByText("MockRocketName")).toBeInTheDocument();
  });
});
