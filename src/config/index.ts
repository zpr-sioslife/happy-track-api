import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

// loads local .env if available
dotenv.config()

interface ConfigToken {
  secret: string
  options: jwt.SignOptions
}

const config = {
  // Base settings
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || '3000',

  // Settings for mongo db connection
  database: {
    username: process.env.MONGO_USERNAME || 'guest',
    password: process.env.MONGO_PASSWORD || 'guest',
    host: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || '27017',
    // ↑ or maybe just MONGO_URI and we good to go
    name: process.env.MONGO_DATABASE || 'happy-track-db',
  },

  // Settings for jwt tokens generator
  tokens: {
    access: {
      secret: process.env.ACCESS_TOKEN_SECRET || 'acce$$-$ecret',
      options: {
        expiresIn: '15m',
      },
    } as ConfigToken,
    refresh: {
      secret: process.env.REFRESH_TOKEN_SECRET || 'refre$h-$ecret',
      options: {
        expiresIn: '7d',
      },
    } as ConfigToken,
  },
}

export default config
