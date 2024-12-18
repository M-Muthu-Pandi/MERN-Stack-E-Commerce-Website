## 🚀 **Mu2 Infinity - E-Commerce Website**

A fully responsive **E-Commerce Website** built using the **MERN Stack** (MongoDB, Express, React, Node.js), **Firebase**, and **Tailwind CSS**. Mu2 Infinity delivers a seamless user experience with modern design and functionality.

---

### 🌟 **Features**

1. **User Authentication**

   - Email and Password Login/Sign Up
   - Google Sign-In Integration
   - Forgot Password Functionality
   - **Delete User**: Users can delete their accounts.

2. **Home Page**

   - Display products and categories.

3. **Detailed Product View**

   - View a single product's details, including:
     - **Images**
     - **Description**
     - **Price**
     - **Add to Cart** button

4. **Search and Filter**

   - Search for products.
   - Filter products category-wise.

5. **Cart and Order Management**

   - Add to Cart and Place Your Order.
   - View Orders and Manage Purchases.

6. **Admin Access**

   - Product Upload and Other Admin Features.

7. **Fully Responsive Navbar**
   - Smooth navigation across all devices.

---

### ⚙️ **Tech Stack**

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Deployment**: Vercel, Render

---

### 📂 **Project Structure**

#### **Client Side**

```plaintext
MERN-Stack-E-Commerce-Website/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AdminAccess/   # Admin-related components
│   │   │   ├── Common/        # Reusable components
│   │   │   ├── ECommerceFeatures/
│   │   │   │   ├── AddToCart/
│   │   │   │   ├── SearchAndFilter/
│   │   │   │   ├── HelpAndSettings/
│   │   │   │   ├── Home/
│   │   │   │   ├── Orders/
│   │   │   │   ├── PlaceOrder/
│   │   │   ├── UserAuthentication/
│   │   │       ├── Login/
│   │   │       ├── Signup/
│   │   │       ├── ForgotPassword/
│   │   ├── config/            # Firebase configuration
│   │   ├── index.js           # Main entry point
│   │   ├── App.jsx            # React root component
│   │   ├── index.css          # Tailwind styles
│   └── package.json           # Client dependencies
│
```

#### **Server Side**

```plaintext
server/
│
├── addressroutes/            # Address-related API routes
├── cartRoutes/               # Cart-related API routes
├── categoryroutes/           # Category-related API routes
├── modals/                   # Database Models
│   ├── addressModel.js
│   ├── cartModel.js
│   ├── categoryHeadModel.js
│   ├── orderModel.js
│   ├── productModel.js
│   ├── sliderImageModel.js
├── ordersroutes/             # Order management API routes
├── otherroutes/              # Miscellaneous routes
├── toppicksroutes/           # Routes for top picks/products
├── index.js                  # Server entry point
└── package.json              # Server dependencies
```

---

### 🛠️ **How It Works**

1. **Authentication**:

   - Firebase handles user authentication with Email/Password and Google Sign-In.
   - Users can **delete their accounts** using the **Delete User** option in their profile settings.

2. **Detailed Product View**:

   - Clicking on a product displays a **detailed view** with:
     - Product **images**
     - Product **description**
     - Product **price**
     - **Add to Cart** button to add the product to the cart.

3. **Search and Filter**:

   - Users can search for products by name.
   - Filter products by categories for easier navigation.

4. **Cart and Orders**:

   - Users can add products to the cart.
   - Proceed to place an order and view the order history on the **Orders Page**.

5. **Admin Access**:

   - Admins can upload new products, view existing products, and Delete products.

6. **Database**:
   - MongoDB stores product details and orders.

---

### 🔗 **Live Website**

[Mu2 Infinity Live Website](https://mu2infinity-ecommerce-mern.vercel.app/)

### 📂 **Repository**

[GitHub Repository](https://github.com/M-Muthu-Pandi/MERN-Stack-E-Commerce-Website.git)

---

### 🚀 **How to Run Locally**

1. Clone the repository:

   ```bash
   git clone https://github.com/M-Muthu-Pandi/MERN-Stack-E-Commerce-Website.git
   ```

2. Install dependencies:  
   **For Client**:

   ```bash
   cd client
   npm install
   ```

   **For Server**:

   ```bash
   cd server
   npm install
   ```

3. Start the project:  
   **Run the Client**:

   ```bash
   cd client
   npm start
   ```

   **Run the Server**:

   ```bash
   cd server
   npm start
   ```

4. Open the project at:
   ```
   http://localhost:3000
   ```

---

### 🤝 **Connect with Me**

- **LinkedIn**: https://www.linkedin.com/in/muthupandim/

---
