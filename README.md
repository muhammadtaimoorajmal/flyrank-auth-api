<div align="center">
  <h1>🔐 FlyRank Secure Auth API</h1>
  <p>A robust, production-ready backend API demonstrating secure user authentication, JSON Web Token (JWT) management, and protected route middleware.</p>

  ![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![Node.js](https://img.shields.io/badge/Node.js-Express-success)
  ![Supabase](https://img.shields.io/badge/Supabase-Auth-1fc38d)
</div>

---

![Swagger UI Interface](swagger-ui.png)

## 🚀 Features
* **Secure Authentication:** User signup and login powered by **Supabase Auth** as the Identity Provider (IdP).
* **JWT Verification:** Custom Express middleware to extract, validate, and authorize `Bearer` tokens securely.
* **Interactive Documentation:** Fully configured **Swagger UI** testing environment to visualize and interact with the API endpoints.
* **Environment Security:** Strict secrets management using `dotenv` to keep API keys out of version control.

## 💻 Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Authentication / BaaS:** Supabase
* **Documentation:** Swagger UI Express

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone [https://github.com/muhammadtaimoorajmal/flyrank-auth-api.git](https://github.com/muhammadtaimoorajmal/flyrank-auth-api.git)
cd flyrank-auth-api