import React from 'react'
import Card from './components/Card'

const App = () => {

  const users =[ 
    {
    tag: 'Heading',
    img: 'https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww',
    btn: 'Hi everyone@'
    },
    {
    tag: 'Shading',
    img: 'https://plus.unsplash.com/premium_photo-1777272105742-719089a7ebaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    btn: 'Hi All@'
    },
    {
    tag: 'Heading',
    img: 'https://images.unsplash.com/photo-1778525306814-a23f07f44a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    btn: 'Hi team@'
    }
]

  return (
    <div className='flex flex-wrap'>
      {users.map((user,idx) => (
        <Card key={user.tag} {...user} />
      ))}
    </div>
  )
}

export default App
