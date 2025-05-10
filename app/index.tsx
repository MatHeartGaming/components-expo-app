import { animationMenuRoutes } from '@/constants/Routes'
import ThemedView from '@/presentation/shared/ThemedView'
import { Href, Link } from 'expo-router'
import React from 'react'

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {
        animationMenuRoutes.map( (route, index) => (
            <Link href={route.name.split('/')[0] as Href} >{route.title}</ Link>
        ))
      }
    </ThemedView>
  )
}

export default ComponentsApp