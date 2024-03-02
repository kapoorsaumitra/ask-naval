import logo from '/src/assets/svg/full.svg'
export function Hero(){
    return(
        <>
            <div className=' flex flex-col items-center'>
            <img  className='w-48 h-48 drop-shadow-2xl' src={logo}/>
            
            <input type="text" className=" w-96 h-12 bg-neutral-700 rounded-[35px] shadow-2xl text-white"/>
            
            
            </div>
        </>
    )
}