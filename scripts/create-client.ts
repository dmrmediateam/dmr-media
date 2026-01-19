/**
 * Script to create a new client in Sanity
 * 
 * Usage: npx tsx scripts/create-client.ts
 * 
 * Make sure to set environment variables:
 * - NEXT_PUBLIC_SANITY_PROJECT_ID
 * - NEXT_PUBLIC_SANITY_DATASET
 * - SANITY_API_TOKEN
 */

import { createClient } from '@sanity/client'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import * as readline from 'readline'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

async function createNewClient() {
  try {
    console.log('\n=== Create New Client ===\n')

    const name = await question('Client Name: ')
    const email = await question('Email: ')
    const password = await question('Password: ')
    const studioUrl = await question('Sanity Studio URL (e.g., https://eagan-luxury.sanity.studio): ')
    const clientId = await question('Client ID (for URL, e.g., "eagan-luxury" for /dashboard/eagan-luxury): ')

    // Validate clientId is unique
    const existing = await sanityClient.fetch(
      `*[_type == "client" && clientId == $clientId][0]`,
      { clientId }
    )

    if (existing) {
      console.error(`\n❌ Error: Client ID "${clientId}" already exists!`)
      rl.close()
      return
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)

    // Create client document
    const client = {
      _type: 'client',
      name,
      email,
      passwordHash,
      studioUrl,
      clientId,
      isActive: true,
    }

    const result = await sanityClient.create(client)
    console.log(`\n✅ Successfully created client: ${name}`)
    console.log(`   Email: ${email}`)
    console.log(`   Client ID: ${clientId}`)
    console.log(`   Dashboard URL: /dashboard/${clientId}`)
    console.log(`   Sanity ID: ${result._id}\n`)

    rl.close()
  } catch (error: any) {
    console.error('\n❌ Error creating client:', error.message)
    rl.close()
    process.exit(1)
  }
}

createNewClient()
