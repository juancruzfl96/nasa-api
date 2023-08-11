import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchEarchDate from "../components/SearchEarthDate";
import SearchSol from "../components/SearchSol";
import NoPhotos from "../components/NoPhotos";
import Favorites from "../pages/favorites";

test("Should read default props", () => {
  let expectedProps = {
    dateSelected: "2023-08-11",
    setDateSelected: () => {},
  };

  render(<SearchEarchDate {...expectedProps} />);
  screen.debug();

  const container = screen.getByTestId("date-input-container");
  const containerQueries = within(container);
  const input = containerQueries.getByTestId("date-input");
  expect(input.getAttribute("value")).toBe(expectedProps.dateSelected);
});

test("Should read default props", () => {
  let expectedProps = {
    solDistance: "2000",
    setSolDistance: () => {},
  };

  render(<SearchSol {...expectedProps} />);
  screen.debug();

  const container = screen.getByTestId("sol-input-container");
  const containerQueries = within(container);
  const input = containerQueries.getByTestId("sol-input");
  expect(input.getAttribute("value")).toBe(expectedProps.solDistance);
});

test("Show component", () => {
  let expectedProps = {
    text: "No se encuentra las fotos",
  };

  render(<NoPhotos {...expectedProps} />);
  expect(screen.getByTestId("no-photos")).toBeInTheDocument();
});

test("Show component", () => {
  render(<Favorites />);
  expect(screen.getByText("Home")).toBeInTheDocument();
});
