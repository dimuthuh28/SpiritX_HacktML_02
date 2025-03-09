require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const connectDB = require('./config/db');  
const teamRoutes = require('./routes/teamRoutes');
const playerRoutes = require('./routes/playerRoutes');

// const tournamentRoutes = require('./routes/tournamentRoutes');
// const leaderboardRoutes = require('./routes/leaderboardRoutes');
const tournamentRoutes = require('./routes/tournament_Routes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const users = require('./routes/auth');
connectDB();

app.use(cors());
app.use(express.json());

// Use the team routes
app.use('/api/team', teamRoutes);
app.use('/api/players', playerRoutes);

// app.use('/api/tournaments', tournamentRoutes);
// app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/users', users);

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
