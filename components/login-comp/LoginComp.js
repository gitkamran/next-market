import React, { useState } from 'react'
import MobileForm from './MobileForm'
import CodeForm from './CodeForm'

const LoginComp = ({ setShowLogin }) => {

    const [codeFormShow, setCodeFormShow] = useState(false)
    const [mobile, setMobile] = useState("")
    return (
        <>
            <div onClick={() => setShowLogin(false)} className='fixed inset-0 bg-white/50 z-50'>
            </div>
            <div className='absolute top-12 left-0 z-50 rounded-md shadow-[0_0_10px_#00000050] bg-white p-8 min-w-[300px]'>
                {
                    !codeFormShow ?
                        <MobileForm setMobile={setMobile} mobile={mobile} setCodeFormShow={setCodeFormShow} />
                        :
                        <CodeForm mobile={mobile} setShowLogin={setShowLogin} />
                }
            </div>
        </>
    )
}

export default LoginComp