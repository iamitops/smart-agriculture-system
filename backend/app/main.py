from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .database import SessionLocal, engine, Base
from . import models
from .models import Farm, Crop, Sensor, Irrigation


app = FastAPI()
@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "Smart Agriculture Management System Backend Running Successfully"
    }


@app.get("/api/dashboard")
def dashboard(db: Session = Depends(get_db)):
    total_farms = db.query(Farm).count()

    total_crops = db.query(Crop).count()

    active_sensors = (
        db.query(Sensor)
        .filter(Sensor.status == "active")
        .count()
    )

    active_irrigation = (
        db.query(Irrigation)
        .filter(Irrigation.status == "active")
        .count()
    )

    return {
        "total_farms": total_farms,
        "total_crops": total_crops,
        "active_sensors": active_sensors,
        "active_irrigation": active_irrigation,
    }