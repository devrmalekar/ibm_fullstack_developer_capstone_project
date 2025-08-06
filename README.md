# IBM Full Stack Software Developer Capstone Project

This is the final capstone project for the [IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer). It demonstrates the implementation of a complete full-stack web application, including front-end, back-end, and database layers.

> **Forked from** IBM Developer Skills Network — Credit to IBM and course instructors.

---

## 🚀 Project Overview

This project adds user authentication and integrates multiple backend services to build a full-stack application for managing car dealerships and user reviews. Key features include:

### ✅ Features

- **User Management** via Django authentication  
- **React Frontend** for login, registration, dealer pages  
- **Node.js Backend** for dealer and review APIs (MongoDB)  
- **Python Flask Sentiment Analysis** via IBM Watson NLU API
- **Django Models** for CarMake and CarModel  
- **Django Proxy Services** to communicate with Express APIs and MongoDb  
- **Django Templates** for dynamic pages:
  - Dealer listing
  - Dealer review display
  - Add review form  
- **CI/CD Pipeline** with linting and test automation  
- **Deployment on Kubernetes** via Docker
- [OPTIONAL] **Push to IBM Cloud Engine**

---

## 🗂 Project Structure

<pre>```
├── server/ # Root Folder
|   ├── database/ # Node.js Express Backend with MongoDB for dealers details and reviews 
    |   ├── data #sample data
          └── car_records.json
          └── dealerships.json
          └── reviews.json
        └── dealership.js
        └── docker-compose.yml
        └── dealership.js
        └── docker-compose.yml
        └── dealership.js
        └── docker-compose.yml
        └── app.js
        └── dealership.js
        └── docker-compose.yml
        └── Dockerfile
        └── inventory.js
        └── package.json
    |   └── review.js
  │ ├── djangoapp/ # Models, views, templates, sentiment analysis
    |   ├── microservices #python flask app used for sentiment analysis
          | ├── sentiment
            └── app.py
            └── Dockerfile
            └── requirements.txt
        | ├── migrations
          └── __init__.py
          └── .env
          └── admin.py
          └── models.py
          └── populate.py
          └── restapis.py
          └── urls.py
    |     └── views.py
  | ├── djangoproj/ # defines projects settings. router endpoint, asgi.py and wsgi.py
        └── __init__.py
        └── asgi.py
        └── settings.py
        └── urls.py
  |     └── wsgi.py
| ├── frontend/ # React frontend
     | ├── public
          └── favicon.ico.py
          └── index.html
          └── logo192.png
          └── logo512.png
          └── manifest.json
          └── robots.txt
     | ├── src
          ├── components
              ├── assets
              ├── Dealers
                └── Dealer.jsx
                └── Dealers.css
                └── Dealers.jsx
                └── PostReview.jsx
              ├── Header
                └── Header.jsx
              ├── Login
                └── Login.css
                └── Login.jsx    
              ├── Register
                └── Register.css
                └── Register.jsx    
          └── App.css
          └── App.js
          └── index.js
     | ├── static
           ├── assests # required js css images for static pages
           └── About.html
           └── Contact.html
           └── Home.html
           └── Navbar.html
       └── package.json
       └── README.md
       └── admin.py
       └── models.py
  └── .jshintrc
  └── db.sqlite3
  └── deployment.yaml
  └── Dockerfile
  └── entrypoint.sh
  └── manage.py
  └── package.json
  └── requirements.txt
  └── LICENSE
  └── README.md
```</pre>
---

## 🛠️ Technologies Used

| Technology       | Version    |
|------------------|------------|
| Python           | 3.10.12    |
| Django           | 5.2.5      |
| Flask            | 5.2.5      |
| React            | 18.2       |
| Node             | 18.12.1    |
| Express          | 4.18.2     |
| MongoDB          | 6.3.0      |
| SQL3 Lite        | 3.x        |
| IBM Watson NLU   | Cloud API  |
| Docker           | 28.0.4     |
| Kubernetes       | 1.27.6     |
| GitHub Actions   | CI/CD      |

---

---

## ✅ Requirements

- Python 3.10+  
- Node.js and npm  
- Docker & Docker Compose  
- IBM Cloud account and CLI  
- Kubernetes CLI (kubectl)  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/devrmalekar/ibm_fullstack_developer_capstone_project.git
cd YOUR_REPO
```

### 2. Django Backend

```bash
cd ibm_fullstack_developer_capstone_project/server
python -m venv env
source env/bin/activate  # For Windows: env\\Scripts\\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### 3. React Frontend

```bash
cd ibm_fullstack_developer_capstone_project/server/frontend
npm install
npm run build
```

### 4. Node.js MongoDB Backend 

```bash
cd ibm_fullstack_developer_capstone_project/server/database
docker build . -t nodeapp
docker-compose up
```

## ⚙️ IBM Cloud Engine App Creation and Push Docker to cloud container
### 2. Build App Docker and Push to Cloud Container 

*** Before you need to make sure step 2, 3 and 4 from setup instructions are completed without any error.

```bash
cd ibm_fullstack_developer_capstone_project/server
MY_NAMESPACE=$(ibmcloud cr namespaces | grep sn-labs-)
echo $MY_NAMESPACE
IBM_CC_Registry_Endpoint=<ur_ibm_clound_container_registry_endpoint>
echo $IBM_CC_Registry_Endpoint
MY_APP=dealership
echo $MY_APP

docker build -t $IBM_CC_Registry_Endpoint/$MY_NAMESPACE/$MY_APP .
docker push $IBM_CC_Registry_Endpoint/$MY_NAMESPACE/$MY_APP
```

### 3. Containerize the docker app in Kubernetics

```bash
cd ibm_fullstack_developer_capstone_project/server 
kubectl apply -f deployment.yaml
```

### 4. Run the Deplyed kubernetic

Use of port-forwarding to see the running application instead of adding a service in deployment.yaml

```bash
cd ibm_fullstack_developer_capstone_project/server 
kubectl port-forward deployment.apps/dealership 8000:8000
```

## 📷 Architecture Diagram

<img width="5233" height="3061" alt="image" src="https://github.com/user-attachments/assets/70e74b79-73a0-4b73-af1f-90a70eaddef8" />
*Image source: IBM Full Stack Software Developer Capstone Course*

## 🙏 Credits
This project is a capstone assignment for the:

[IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer)
Hosted on [Coursera](https://www.coursera.org)
Forked from [IBM Developer Skills Network](https://github.com/ibm-developer-skills-network/xrwvm-fullstack_developer_capstone)
