import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Configure the Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.CALLBACK_URL || 'http://localhost:3000/api/auth/google/callback',
      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      // This 'profile' object contains the user's info from Google
      console.log('Google Profile:', profile);

      //
      // YOUR LOGIC GOES HERE:
      // 1. Find a user in your database with `profile.id` (the Google ID)
      // 2. If user exists: call `done(null, user)`
      // 3. If user doesn't exist: Create a new user in your database,
      //    then call `done(null, newUser)`
      //

      // For this example, we'll just pass the Google profile object
      // as the "user"
      return done(null, profile);
    }
  )
);

// Session Management
// 'serializeUser' saves the user's ID to the session.
passport.serializeUser((user: any, done) => {
  done(null, user.id); // For this example, we use the Google ID
});

// 'deserializeUser' gets the user's ID from the session and
// uses it to fetch the full user object from your database.
passport.deserializeUser((id: string, done) => {
  //
  // YOUR LOGIC GOES HERE:
  // Find user in database by 'id'
  //

  // For this example, we'll just fake it.
  // In a real app, you'd do: User.findById(id).then(user => done(null, user))
  done(null, { id: id }); // A real app would fetch the full user
});

export default passport;
