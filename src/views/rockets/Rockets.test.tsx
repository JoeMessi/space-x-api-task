import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { Rockets } from "./Rockets";
import { useStore } from "../../store/store";

jest.mock("../../store/store");
const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;
const mockSetRockets = jest.fn();

const mockRocketsArray = [
  {
    rocket_id: "0",
    flickr_images: "mockImage",
    rocket_name: "MockName",
    description: "MockDescription",
    wikipedia: "MockWiki",
  },
  {
    rocket_id: "1",
    flickr_images: "mockImage",
    rocket_name: "MockName",
    description: "MockDescription",
    wikipedia: "MockWiki",
  },
];

describe("Rockets - component", () => {
  const renderRockets = () => render(<Rockets />);

  mockUseStore.mockReturnValue({
    rockets: mockRocketsArray,
    setRockets: mockSetRockets,
  });

  it("should render Rockets component with no errors and call setRockets on mount", async () => {
    const { getByTestId } = renderRockets();
    expect(mockSetRockets).toHaveBeenCalled();
    expect(getByTestId("rockets")).toBeInTheDocument();
  });
});
