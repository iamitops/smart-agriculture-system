from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Smart Agriculture Management System Backend Running Successfully"
    }