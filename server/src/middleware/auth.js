const supabase = require('../utils/supabase'); // Assuming this is where your Supabase client is

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const [authType, token] = authHeader.split(' ');

  if (authType !== 'Bearer') {
    return res.status(401).json({ error: 'Invalid authorization type' });
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error) {
      if (error.message.includes('Invalid token')) {
        return res.status(401).json({ error: 'Invalid or expired token' });
      }
      console.error('Supabase Auth error:', error);
      return res.status(500).json({ error: 'Authentication failed' });
    }

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication middleware error:', error);
    res.status(500).json({ error: 'Server error during authentication' });
  }
};

module.exports = auth;