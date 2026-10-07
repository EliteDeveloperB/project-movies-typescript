<<<<<<< HEAD

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

=======

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

>>>>>>> c287fbb6f295a66496bd0f6ab3fc793b9c6b28dd
export default Continer