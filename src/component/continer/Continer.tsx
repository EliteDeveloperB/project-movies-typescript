
interface IContainer{
    children:React.ReactNode
}

function Continer({children}:IContainer) {
  return (
    <div className='container mx-30'>
       {children} 
    </div>
  )
}

export default Continer