import pg from "pg"

export function connect() {
    const db = new pg.Pool({
        connectionString: 'postgresql://postgres.tigpjmlthlbutzfqbpei:1Aa2Bb3Cc4Dd@aws-0-eu-west-2.pooler.supabase.com:6543/postgres'
      })

      return(
        db
    )
}

