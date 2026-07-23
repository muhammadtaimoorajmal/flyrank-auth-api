require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables. Check your .env file.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Basic health check route
app.get('/', (req, res) => {
    res.json({ message: "Server running and connected to Supabase" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Connected to Supabase successfully.");
});