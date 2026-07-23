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

// --- STAGE 1: OPEN AUTH (SIGN UP & LOG IN) ---

// POST /auth/signup
app.post('/auth/signup', async (req, res) => {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    // Register user with Supabase
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    // Handle Supabase errors (e.g., weak password, email taken)
    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ message: "User created successfully", user: data.user });
});

// POST /auth/login
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    // Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    // Handle invalid credentials
    if (error) {
        return res.status(401).json({ error: "Invalid login credentials" });
    }

    // Success: Return the access token (JWT)
    res.status(200).json({
        message: "Login successful",
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Connected to Supabase successfully.");
});