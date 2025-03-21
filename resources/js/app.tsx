import React from 'react'
import ReactDOM from 'react-dom/client'
import ExampleComponent from './components/ExampleComponent'

const App = () => {
    return (
        <div className='container mx-auto'>
            <ExampleComponent />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App />)
