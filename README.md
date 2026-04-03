# Cloud Native DevOps Project

## Goal
Design and operate a production-like cloud-native environment using containers, Infrastructure as Code, and CI/CD automation.

## Tech Stack
- WSL2 (Ubuntu)
- Git & GitHub
- Docker
- Kubernetes
- Terraform
- GitHub Actions

## Architecture
![Architecture](docs/architecture.png)
This project demonstrates a cloud-native DevOps pipeline from source code to a running Kubernetes application.
Developer → GitHub → Docker → Kubernetes → Application

## Run Locally
Deploy to Kubernetes
kubectl apply -f k8s/
Port forward
kubectl port-forward svc/devops-app 8080:80
Access
http://localhost:8080/health

## Monitoring
Prometheus and Grafana are deployed to monitor the Kubernetes cluster and application metrics.
Access Grafana (port-forward required):
kubectl port-forward svc/monitoring-grafana 3000:80
Open in browser:
http://localhost:3000
Example dashboard:
![Monitoring](docs/monitoring.png)

## Backlog
- [x] Create simple app
- [x] Dockerize app
- [x] Deploy to Kubernetes
- [ ] Add CI/CD with GitHub Actions
- [ ] Add Ingress
- [ ] Add monitoring (Prometheus / Grafana)
- [ ] Deploy infrastructure with Terraform
