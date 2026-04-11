# Cloud Native DevOps Project

---

## Goal
**EN**  
Design and operate a production-like cloud-native environment using containers, Infrastructure as Code, and CI/CD automation.

**KR**  
컨테이너, IaC, CI/CD 자동화를 활용해 실제 운영 환경과 유사한 클라우드 네이티브 시스템을 설계하고 운영하는 것을 목표로 한다.

---

## Tech Stack
- WSL2 (Ubuntu)
- Git & GitHub
- Docker
- Kubernetes
- Terraform
- GitHub Actions

---

## Architecture
![Architecture](docs/architecture.png)

**EN**  
This project demonstrates a complete DevOps workflow:
Developer → GitHub → CI/CD → Docker Image → Kubernetes → Application  
Infrastructure is provisioned using Terraform on Hetzner Cloud.

**KR**  
개발자가 코드를 push하면 CI/CD가 Docker 이미지를 생성하고 Kubernetes에 배포되어 애플리케이션이 실행된다.  
인프라는 Terraform을 사용해 Hetzner Cloud에 코드 기반으로 생성된다.

---

## CI/CD

**EN**  
GitHub Actions is used for automation.

- On push → Docker image is built  
- Image is pushed to GHCR  
- Kubernetes deployment is updated  

Workflow files:
- .github/workflows/ci.yml
- .github/workflows/deploy.yml

**KR**  
GitHub Actions를 사용하여 CI/CD 자동화를 구성했다.

- 코드 push 시 Docker 이미지 빌드  
- GHCR에 이미지 업로드  
- Kubernetes에 자동 배포  

---

## Deploy (Production)

**EN**  
Infrastructure is created using Terraform.

```bash
cd terraform
terraform init
terraform apply
```

Check server IP:
terraform output  

Connect to server:
ssh root@<SERVER_IP>  

Install k3s:
curl -sfL https://get.k3s.io | sh -  

Deploy application:
kubectl apply -f k8s/  

**KR**  
Terraform을 통해 Hetzner에 서버를 생성한 뒤, SSH로 접속하여 k3s를 설치하고 Kubernetes에 애플리케이션을 배포한다.

---

## Access

**EN**  
Application is exposed via Kubernetes Ingress.

http://<SERVER_IP>

**KR**  
브라우저에서 서버 IP로 접속하면 애플리케이션을 확인할 수 있다.

---

## Run Locally

kubectl apply -f k8s/  
kubectl port-forward svc/devops-app 8080:80  

Access:
http://localhost:8080/health  

**KR**  
로컬 Kubernetes 환경에서 애플리케이션을 실행하는 방법이다.

---

## Monitoring

**EN**  
Prometheus and Grafana are used to monitor cluster and application metrics.

- CPU / Memory usage  
- Network traffic  
- Disk usage  

![Monitoring](docs/monitoring.png)

**KR**  
Prometheus와 Grafana를 사용하여 시스템 리소스와 애플리케이션 상태를 모니터링한다.

---

## Troubleshooting

Terraform provider permission error:
rm -rf .terraform  
rm .terraform.lock.hcl  
terraform init  

SSH host key changed:
ssh-keygen -f "~/.ssh/known_hosts" -R "<SERVER_IP>"  

**KR**  
Terraform 실행 오류 및 SSH fingerprint 문제 발생 시 위 방법으로 해결할 수 있다.

---

## Backlog

- [x] Create application  
- [x] Dockerize application  
- [x] Deploy to Kubernetes  
- [x] Add CI/CD pipeline  
- [x] Configure Ingress  
- [x] Add monitoring (Prometheus / Grafana)  
- [x] Provision infrastructure with Terraform  

**KR**  
DevOps 파이프라인 구축 과정을 단계별로 정리한 목록이다.
