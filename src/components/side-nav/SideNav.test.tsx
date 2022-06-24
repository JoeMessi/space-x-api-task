import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { SideNav } from "./SideNav";
import { MemoryRouter } from "react-router-dom";
import { useStore } from "../../store/store";

jest.mock("../../store/store");
const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

const mockSetMenuOpen = jest.fn();
mockUseStore.mockReturnValue({
  setMenuOpen: mockSetMenuOpen,
});

describe("SideNav - component", () => {
  const renderSideNav = () =>
    render(
      <MemoryRouter>
        <SideNav />
      </MemoryRouter>
    );

  it("should render SideNav with no errors", () => {
    const { getByTestId } = renderSideNav();
    expect(getByTestId("side-nav")).toBeInTheDocument();
  });

  it("should call setMenuOpen when close x icon is clicked", () => {
    const { getByTestId } = renderSideNav();
    fireEvent.click(getByTestId("close-btn"));
    expect(mockSetMenuOpen).toHaveBeenCalled();
  });
});
