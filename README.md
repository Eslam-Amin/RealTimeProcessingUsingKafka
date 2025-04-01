# Event-Driven Microservice with Node.js and Kafka

## Overview
This project is a **scalable event-driven microservice** built using **Node.js, Kafka, and MongoDB** for real-time processing of user activity logs. The service follows **Domain-Driven Design (DDD)** principles and is deployed using **Docker and Kubernetes**.

## Features
- **Kafka Producer & Consumer**: Handles user activity events.
- **MongoDB Storage**: Stores processed logs with indexing for efficient querying.
- **REST API**: Exposes endpoints to fetch logs with pagination and filtering.
- **Dockerized**: Easily deployable via Docker and Kubernetes.
- **Fake Routes for Testing**: Includes user authentication and checkout actions to generate logs.

## Architecture
The project is divided into multiple layers following **DDD principles**:
- `controller/` - Contains business logic and entities.
- `config/` - Manages Kafka, database connections, and repositories.
- `services/` - Handles service logic and use cases.
- `routes/` - Exposes REST API endpoints.

## Installation
### Prerequisites
- **Docker & Docker Compose**
- **Kafka & Zookeeper**
- **MongoDB**

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/kafka-logs-service.git
   cd kafka-logs-service
   ```
2. Copy the `.env.example` file and rename it to `.env`, then configure it.
3. Start services using Docker Compose:
   ```sh
   docker-compose up --build
   ```

## Fake Routes for Testing
The following routes simulate user actions to generate logs:

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| POST   |  `/api/fake/login`  | Simulates user login  |
| POST   | `/api/fake/orders` | Simulates a checkout process |

Each action triggers a **Kafka event**, which is processed and stored in **MongoDB**.

## API Endpoints
| Method | Endpoint                     | Description |
|--------|------------------------------|----------------------------------------|
| GET    | `/api/user-activity-logs`    | Fetch logs with filtering & pagination |

## Debugging & Logs
- View application logs:
  ```sh
  docker logs -f <container_id>
  ```
- Check if Kafka topics are created:
  ```sh
  docker exec -it kafka kafka-topics.sh --list --zookeeper zookeeper:2181
  ```
- Test if MongoDB is storing logs:
  ```sh
  docker exec -it mongo mongosh
  use logs_db
  db.logs.find().pretty()
  ```

## Deployment with Kubernetes
To deploy the microservice using Kubernetes, apply the manifests:
```sh
kubectl apply -f k8s/
```

## Conclusion
This project demonstrates **real-time event-driven logging** with Kafka, Node.js, and MongoDB. It also includes **fake endpoints** to generate and test log functionality. 🚀

