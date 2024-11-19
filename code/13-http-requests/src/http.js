export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:8000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  return resData.places;
}
