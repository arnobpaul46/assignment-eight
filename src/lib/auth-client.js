import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "https://skill-sphere-a8-arnob.vercel.app"
})