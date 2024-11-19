export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:8000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:8000/user-places", {
    method: "PUT",
    body: JSON.stringify(places),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}
