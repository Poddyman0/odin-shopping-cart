<strong>Project Title: Mock Shopping Cart</strong>

<strong>Description:</strong>

This project involves creating a React-based shopping cart application with a home page and a shop page. Users will be able to view products, adjust quantities, add items to their cart, and navigate between pages using a navigation bar. The cart will reflect the number of items added, and the app will be tested using React Testing Library.

<strong>Technologies Used:</strong>

<ul>
  <li><strong>React:</strong> For building the user interface and handling state management.</li>
  <li><strong>React Router:</strong> For managing navigation between pages.</li>
  <li><strong>React Testing Library:</strong> For testing React components.</li>
  <li><strong>FakeStore API:</strong> For fetching product data.</li>
  <li><strong>CSS:</strong> For styling the application.</li>
</ul>
<strong>Features:</strong>

<ul>
  <li><strong>Home Page:</strong> A customizable page with images or information.</li>
  <li><strong>Shop Page:</strong> Displays products with options to adjust quantities and add them to the cart.</li>
  <li><strong>Navigation Bar:</strong> Persistent across pages, displaying the number of items in the cart and a button to navigate to the checkout.</li>
  <li><strong>Product Cards:</strong> Each card allows users to select the quantity and add the product to their cart.</li>
  <li><strong>Shopping Cart:</strong> Reflects the total number of items added and allows users to see their selections.</li>
  <li><strong>Testing:</strong> Uses React Testing Library to ensure the functionality of components.</li>
  <li><strong>Deployment:</strong> Configured for deployment on Netlify, Vercel, or Cloudflare Pages.</li>
</ul>
To run this React app in your web browser, follow these steps:

Ensure you have Node.js and npm installed: You can check this by running the following commands in your terminal:

bash
Copy code
node -v
npm -v
If you don’t have them installed, download and install Node.js from https://nodejs.org/, which includes npm.

Navigate to your project directory: Open your terminal or command prompt and navigate to the root of your project:

bash
Copy code
cd cd odin-shoppingcart-react-app
Install dependencies: Run the following command to install all the necessary dependencies specified in your package.json:

bash
Copy code
npm install
Start the development server: Run the following command to start your development server using Vite:

bash
Copy code
npm run dev
Open the app in your browser: After running the npm run dev command, you should see output in your terminal that looks like this:

arduino
Copy code
VITE vX.X.X  ready in Xs

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
Open your browser and navigate to the URL shown under Local, usually http://localhost:5173.

Your React app should now be running in your browser! Any changes you make to your code should automatically be reflected in the browser thanks to hot-reloading.
