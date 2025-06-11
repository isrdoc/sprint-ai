-- Create training_sessions table if it doesn't exist
CREATE TABLE IF NOT EXISTS training_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL,
    duration INTEGER NOT NULL, -- in minutes
    intensity DECIMAL(3,1) NOT NULL, -- RPE scale 1-10
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample training sessions
INSERT INTO training_sessions (user_id, type, duration, intensity, date) VALUES
    -- Strength Training sessions
    (1, 'Strength Training', 120, 8.5, CURRENT_TIMESTAMP - INTERVAL '2 days'),
    (1, 'Strength Training', 90, 8.0, CURRENT_TIMESTAMP - INTERVAL '5 days'),
    (1, 'Strength Training', 105, 8.2, CURRENT_TIMESTAMP - INTERVAL '8 days'),
    
    -- Cardio sessions
    (1, 'Cardio', 45, 6.5, CURRENT_TIMESTAMP - INTERVAL '1 day'),
    (1, 'Cardio', 60, 6.8, CURRENT_TIMESTAMP - INTERVAL '4 days'),
    (1, 'Cardio', 30, 6.2, CURRENT_TIMESTAMP - INTERVAL '7 days'),
    
    -- Mobility sessions
    (1, 'Mobility', 30, 4.5, CURRENT_TIMESTAMP - INTERVAL '3 days'),
    (1, 'Mobility', 45, 4.8, CURRENT_TIMESTAMP - INTERVAL '6 days'),
    (1, 'Mobility', 60, 5.0, CURRENT_TIMESTAMP - INTERVAL '9 days'),
    
    -- Skill Work sessions
    (1, 'Skill Work', 45, 7.0, CURRENT_TIMESTAMP - INTERVAL '2 days'),
    (1, 'Skill Work', 60, 7.2, CURRENT_TIMESTAMP - INTERVAL '5 days'),
    (1, 'Skill Work', 75, 7.1, CURRENT_TIMESTAMP - INTERVAL '8 days');

-- Create training_metrics table if it doesn't exist
CREATE TABLE IF NOT EXISTS training_metrics (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    total_sessions INTEGER NOT NULL,
    weekly_average DECIMAL(4,1) NOT NULL,
    week_streak INTEGER NOT NULL,
    readiness_score INTEGER NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample training metrics
INSERT INTO training_metrics (user_id, total_sessions, weekly_average, week_streak, readiness_score, date) VALUES
    (1, 220, 3.5, 16, 82, CURRENT_TIMESTAMP);

-- Create training_recommendations table if it doesn't exist
CREATE TABLE IF NOT EXISTS training_recommendations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    recommendation TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    priority INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample training recommendations
INSERT INTO training_recommendations (user_id, recommendation, category, priority) VALUES
    (1, 'Increase protein intake', 'Nutrition', 1),
    (1, 'Add rest day between heavy sessions', 'Recovery', 2),
    (1, 'Focus on form in deadlift', 'Technique', 3); 