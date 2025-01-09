from fastapi.testclient import TestClient
import pytest
from main import app
from hashlib import md5

# Initialize the test client
client = TestClient(app)

# Test the /generate endpoint
def test_generate():
    response = client.post("/generate", json={"text": "hello"})
    assert response.status_code == 200
    assert "checksum" in response.json()
    assert response.json()["checksum"] == md5("hello".encode('utf-8')).hexdigest()

