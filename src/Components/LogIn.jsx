import React, { useState } from 'react';

const LogIn = () => {
    const [ focus, setFocus ] = useState(false);
    return (
        <section className="h-[calc(100vh - 4rem)]">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="" />
                    </div>
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form className='flex flex-col gap-5 w-3/5'>
                            <input 
                            type="email"
                            onFocus ={() => setFocus(true)} 
                            onBlur={() => setFocus(false)} 
                            name="Email" 
                            id="Email"
                            className={`bg-transparent p-2 text-xl border ${focus === true ? 'border-blue-600' : 'border-white'}`} 
                            placeholder='Enter Email' />
                            <input 
                            type="password" 
                            name="password" 
                            id="Password"
                            className='bg-transparent p-2 text-xl border border-white focus:border-blue-600' 
                            placeholder='Enter Password' />
                            <button type="button" className='bg-blue-600 text-white p-2'>Log In</button>
                        </form>

                    </div>
                </ div>
            </ div>
        </section>
    )
}


export default LogIn
