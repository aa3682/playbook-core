import React from 'react'

export function HoverCard({ title, description }) {
  return (
    <div 
      className="hover-lift p-6 mt-6 border rounded-xl"
      style={{ 
        backgroundColor: 'var(--bg-subtle)', 
        borderColor: 'rgba(150, 150, 150, 0.2)' 
      }}
    >
      <h3 
        className="text-xl font-bold mb-2"
        style={{ color: 'var(--brand-accent)' }}
      >
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  )
}
