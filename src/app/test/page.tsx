// src/app/test/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function TestPage() {
  const [profiles, setProfiles] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('profiles').select('*')
      if (error) console.error(error)
      else setProfiles(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Supabase Test</h1>
      {profiles.length > 0 ? (
        <ul>
          {profiles.map((profile, i) => (
            <li key={i}>{JSON.stringify(profile)}</li>
          ))}
        </ul>
      ) : (
        <p>Keine Daten gefunden</p>
      )}
    </div>
  )
}
