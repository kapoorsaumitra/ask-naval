import navallogo from '/src/assets/naval.jpg'

export function Hero(){
    return(
        <>
            <div style={{width: '100%', height: '100%', paddingTop: 208, paddingBottom: 476, paddingLeft: 71, paddingRight: 71, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <img style={{width: 284, height: 267}} src={navallogo} />
            <input type="text" className=" w-full h-12 bg-neutral-700 rounded-[35px] shadow"/>
            
            
            </div>
        </>
    )
}