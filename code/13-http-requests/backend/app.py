from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
import json
import os

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["GET", "PUT"],
    allow_headers=["Content-Type"],
)


# Static files
@app.get("/images/{file_path:path}")
async def read_image(file_path: str):
    file_location = os.path.join("images", file_path)
    if os.path.exists(file_location):
        response = FileResponse(file_location)
        response.headers["Access-Control-Allow-Origin"] = "*"  # CORS
        return response
    else:
        raise HTTPException(status_code=404, detail="File not found")


# Models
class Place(BaseModel):
    id: int
    name: str
    description: str


@app.get("/places")
async def get_places():
    with open("./data/places.json", "r") as file:
        places_data = json.load(file)
    return {"places": places_data}


@app.get("/user-places")
async def get_user_places():
    with open("./data/user-places.json", "r") as file:
        places = json.load(file)
    return {"places": places}


@app.put("/user-places")
async def update_user_places(place: Place):
    with open("./data/user-places.json", "r") as file:
        places = json.load(file)

    places.append(place.model_dump())

    with open("./data/user-places.json", "w") as file:
        json.dump(places, file, indent=4)

    return {"message": "Place updated successfully"}
