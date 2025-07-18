import ModelViewer from "./ModelViewer"



const Trail = () => {
  return (
    <div>
      <div className='w-full h-[200vh] relative'>
        <h1 className='text-center w-1/2 pl-10 pt-10 text-[6vw]'>Welcome</h1>
        <ModelViewer />
        {/* <div className='ml-[50vw] bg-red-400 w-1/2 h-[40vh] fixed z-10'><h1>Hello</h1></div> */}
        <h1></h1>
      </div>
    </div>
  )
}

export default Trail