from fastapi import FastAPI
from hashlib import md5
from pydantic import BaseModel

# Create FastAPI app instance
app = FastAPI()

# Define the Pydantic model for input validation
class TextRequest(BaseModel):
    text: str

# Endpoint to generate checksum from the text field
@app.post("/generate", response_model=dict)
async def generate(request: TextRequest):
    """
    Endpoint to generate a checksum for a given text.
    
    - **text**: A string field that will be used to generate the checksum.
    
    Returns a checksum of the provided text.
    """
    checksum = md5(request.text.encode('utf-8')).hexdigest()
    return {"checksum": checksum}

# Welcome route with a customized participant message
@app.get("/welcome")
async def welcome():
    return {"message": "Welcome to the FastAPI application, from [Your Name]!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)