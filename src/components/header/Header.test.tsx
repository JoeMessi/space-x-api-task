import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { Header } from "./Header";
import { useStore } from "../../store/store";

jest.mock("../../store/store");
const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

const mockSetMenuOpen = jest.fn();
mockUseStore.mockReturnValue({
  setMenuOpen: mockSetMenuOpen,
});

describe("Header - component", () => {
  const renderHeader = () => render(<Header />);

  it("should render Header with no errors", () => {
    const { getByTestId } = renderHeader();
    expect(getByTestId("header")).toBeInTheDocument();
  });

  it("should call setMenuOpen when hamburger menu is clicked", () => {
    const { getByTestId } = renderHeader();
    fireEvent.click(getByTestId("hamburger"));
    expect(mockSetMenuOpen).toHaveBeenCalled();
  });
});
