import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { History } from "./History";
import { useStore } from "../../store/store";

jest.mock("../../store/store");
const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;
const mockSetHistory = jest.fn();

const mockHistoryArray = [
  {
    id: "0",
    details: "mock fact",
  },
  { id: "1", details: "mock fact" },
];

describe("History - component", () => {
  const renderHistory = () => render(<History />);

  mockUseStore.mockReturnValue({
    history: mockHistoryArray,
    setHistory: mockSetHistory,
  });

  it("should render History component with no errors and call setHistory on mount", async () => {
    const { getByTestId, debug } = renderHistory();
    debug();
    expect(mockSetHistory).toHaveBeenCalled();
    expect(getByTestId("history")).toBeInTheDocument();
  });
});
