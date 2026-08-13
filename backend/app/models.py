from sqlalchemy import Column, Integer, String, DateTime, Date, Boolean, Numeric, Text, ForeignKey
from sqlalchemy.sql import func

from .database import Base


class Farmer(Base):
    __tablename__ = "farmers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    phone = Column(String(20))
    email = Column(String(100))
    location = Column(String(255))
    created_at = Column(DateTime, server_default=func.now())


class Farm(Base):
    __tablename__ = "farms"

    id = Column(Integer, primary_key=True, index=True)
    farmer_id = Column(Integer, ForeignKey("farmers.id"), nullable=False)
    name = Column(String(100), nullable=False)
    location = Column(String(255))
    area_acres = Column(Numeric(10, 2))
    created_at = Column(DateTime, server_default=func.now())


class Crop(Base):
    __tablename__ = "crops"

    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey("farms.id"), nullable=False)
    name = Column(String(100), nullable=False)
    variety = Column(String(100))
    planting_date = Column(Date)
    expected_harvest_date = Column(Date)
    status = Column(String(50), default="growing")


class Sensor(Base):
    __tablename__ = "sensors"

    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey("farms.id"), nullable=False)
    name = Column(String(100), nullable=False)
    sensor_type = Column(String(50), nullable=False)
    value = Column(Numeric(10, 2))
    unit = Column(String(20))
    status = Column(String(30), default="active")
    last_reading = Column(DateTime, server_default=func.now())


class Irrigation(Base):
    __tablename__ = "irrigation"

    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey("farms.id"), nullable=False)
    system_name = Column(String(100), nullable=False)
    irrigation_type = Column(String(50))
    status = Column(String(30), default="inactive")
    water_usage_liters = Column(Numeric(10, 2), default=0)
    last_run = Column(DateTime)


class Weather(Base):
    __tablename__ = "weather"

    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey("farms.id"), nullable=False)
    temperature = Column(Numeric(5, 2))
    humidity = Column(Numeric(5, 2))
    rainfall = Column(Numeric(10, 2))
    wind_speed = Column(Numeric(10, 2))
    weather_condition = Column(String(100))
    recorded_at = Column(DateTime, server_default=func.now())


class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey("farms.id"), nullable=False)
    sensor_id = Column(Integer, ForeignKey("sensors.id"))
    alert_type = Column(String(100), nullable=False)
    message = Column(Text, nullable=False)
    severity = Column(String(30), default="warning")
    is_resolved = Column(Boolean, default=False)
    created_at = Column(DateTime, server_default=func.now())